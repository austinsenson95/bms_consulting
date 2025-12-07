import { CellConfig, PackConfig, SimulationParams, SimulationResult, TimeStepResult } from './types';
import { getOCV } from './chemistry';

export function simulateECM(
    cell: CellConfig,
    pack: PackConfig,
    params: SimulationParams
): SimulationResult {
    const { durationSeconds, timeStep, currentAmps } = params;
    const steps = Math.floor(durationSeconds / timeStep);

    // Initial State
    let soc = 1.0; // Assume start fully charged for discharge test, or 0 for charge
    if (params.profileType === 'CC_CHARGE') soc = 0.0;

    let tempK = pack.initialTempC + 273.15;
    const ambientTempK = pack.ambientTempC + 273.15;

    // Pack specific scalars
    const totalMassKg = cell.massKg * pack.series * pack.parallel; // Simplified pack mass (cells only)
    const effectiveCp = cell.specificHeatJperKgK; // J/kg.K

    // Resistance Temperature Dependence (Simple Arrhenius-like factor)
    // R(T) = R_ref * exp( B * (1/T - 1/T_ref) )
    // Just simple linear derating for now: 1% decrease per degree rise (physically typical for simple models)
    const getResistance = (T_Kelvin: number) => {
        const dTemp = T_Kelvin - 298.15; // Delta from 25C
        // Resistance drops as it gets hotter
        const factor = Math.max(0.5, 1 - 0.008 * dTemp);
        return cell.initialResistanceOhm * factor; // Cell level R
    };

    const results: TimeStepResult[] = [];
    let totalEnergyJ = 0;

    // Sign convention: Discharge is Positive Current for simpler math here? 
    // Usually Discharge is Positive in Load perspective. Let's assume params.currentAmps is magnitude.
    // If Discharge: I > 0
    // If Charge: I < 0
    let I_pack = params.profileType === 'CC_DISCHARGE' ? currentAmps : -currentAmps;

    // Cell Current
    let I_cell = I_pack / pack.parallel;

    for (let i = 0; i <= steps; i++) {
        const t = i * timeStep;

        // 1. Update State of Charge
        // Coulomb Counting: dSoC = - I * dt / Q_total
        // (If I is discharge positive, SoC decreases)
        const dSoC = -(I_cell * timeStep) / (cell.nominalCapacityAh * 3600);
        soc += dSoC;

        // Clamp SoC
        if (soc < 0) soc = 0;
        if (soc > 1) soc = 1;

        // 2. Electrochemistry
        const rInternal = getResistance(tempK);
        const ocv = getOCV(cell.chemistry, soc);

        // V_term = OCV - I * R (Discharge: V < OCV)
        const vCell = ocv - I_cell * rInternal;
        const vPack = vCell * pack.series;

        // 3. Thermal
        // Q_gen = I^2 * R (Joules per sec = Watts)
        const powerJouleCell = (I_cell * I_cell) * rInternal;
        const powerJoulePack = powerJouleCell * pack.series * pack.parallel;

        // Q_cool = hA * (T - T_ambient)
        const powerCooling = pack.coolingCoeffWperK * (tempK - ambientTempK);

        // m * Cp * dT/dt = Q_gen - Q_cool
        const netHeatWatts = powerJoulePack - powerCooling;
        const dTemp = (netHeatWatts * timeStep) / (totalMassKg * effectiveCp);

        tempK += dTemp;

        // Record
        results.push({
            time: t,
            current: I_pack,
            voltageCell: vCell,
            voltagePack: vPack,
            soc: soc,
            temperature: tempK - 273.15,
            heatGenWatts: powerJoulePack
        });

        // Accumulate Energy (Wh)
        // Energy = V * I * dt
        // Only count delivered energy (Discharge)
        if (I_pack > 0) {
            totalEnergyJ += (vPack * I_pack * timeStep);
        }

        // Stop conditions (V_min / V_max)
        if (vCell < cell.minVoltage && I_pack > 0) break; // Undervoltage on discharge
        if (vCell > cell.maxVoltage && I_pack < 0) break; // Overvoltage on charge
    }

    const maxPowerW = Math.max(...results.map(r => r.voltagePack * Math.abs(r.current)));
    const maxTempC = Math.max(...results.map(r => r.temperature));

    return {
        timeSeries: results,
        summary: {
            totalEnergyWh: totalEnergyJ / 3600,
            maxPowerW,
            maxTempC,
            finalSoC: results[results.length - 1].soc
        }
    };
}
