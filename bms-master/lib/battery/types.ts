export type ChemistryType = 'NMC' | 'LFP';

export interface CellConfig {
    chemistry: ChemistryType;
    nominalCapacityAh: number;
    nominalVoltage: number;
    minVoltage: number;
    maxVoltage: number;
    initialResistanceOhm: number; // R0 at 25C
    massKg: number;
    specificHeatJperKgK: number; // Cp
}

export interface PackConfig {
    series: number;
    parallel: number;
    initialTempC: number;
    ambientTempC: number;
    coolingCoeffWperK: number; // h*A, lumped thermal conductivity to ambient
}

export interface SimulationParams {
    durationSeconds: number;
    timeStep: number;
    profileType: 'CC_DISCHARGE' | 'CC_CHARGE' | 'PULSE' | 'DRIVE_CYCLE'; // Simple for now
    currentAmps: number; // For CC
    // Future: complex profiles
}

export interface TimeStepResult {
    time: number;
    current: number;
    voltageCell: number;
    voltagePack: number;
    soc: number;
    temperature: number;
    heatGenWatts: number;
}

export interface SimulationResult {
    timeSeries: TimeStepResult[];
    summary: {
        totalEnergyWh: number;
        maxPowerW: number;
        maxTempC: number;
        finalSoC: number;
    };
}

export const DEFAULT_NMC_CELL: CellConfig = {
    chemistry: 'NMC',
    nominalCapacityAh: 50, // Large prismatic
    nominalVoltage: 3.7,
    minVoltage: 2.7,
    maxVoltage: 4.2,
    initialResistanceOhm: 0.001, // 1 mOhm
    massKg: 1.5,
    specificHeatJperKgK: 1000,
};

export const DEFAULT_LFP_CELL: CellConfig = {
    chemistry: 'LFP',
    nominalCapacityAh: 100, // Large prismatic LFP
    nominalVoltage: 3.2,
    minVoltage: 2.5,
    maxVoltage: 3.65,
    initialResistanceOhm: 0.0008, // 0.8 mOhm
    massKg: 2.2,
    specificHeatJperKgK: 1100,
};
