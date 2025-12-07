import { ChemistryType } from './types';

// Simple Lookup Tables for OCV vs SoC
// Start at SoC = 0.0 to 1.0 (0% to 100%)

const NMC_OCV_CURVE = [
    [0.00, 3.00],
    [0.05, 3.20],
    [0.10, 3.35],
    [0.20, 3.50],
    [0.30, 3.60],
    [0.40, 3.68],
    [0.50, 3.75],
    [0.60, 3.82],
    [0.70, 3.90],
    [0.80, 4.00],
    [0.90, 4.10],
    [0.95, 4.15],
    [1.00, 4.20]
];

const LFP_OCV_CURVE = [
    [0.00, 2.50],
    [0.05, 2.90],
    [0.10, 3.10], // Entering plateau
    [0.20, 3.20],
    [0.30, 3.23],
    [0.40, 3.25],
    [0.50, 3.27],
    [0.60, 3.29],
    [0.70, 3.31],
    [0.80, 3.33], // Exiting plateau
    [0.90, 3.34],
    [0.95, 3.45],
    [0.99, 3.60],
    [1.00, 3.65]
];

// Linear interpolation helper
function interp(x: number, data: number[][]): number {
    // Clamp
    if (x <= data[0][0]) return data[0][1];
    if (x >= data[data.length - 1][0]) return data[data.length - 1][1];

    for (let i = 0; i < data.length - 1; i++) {
        const x0 = data[i][0];
        const x1 = data[i + 1][0];
        if (x >= x0 && x <= x1) {
            const y0 = data[i][1];
            const y1 = data[i + 1][1];
            return y0 + (x - x0) * (y1 - y0) / (x1 - x0);
        }
    }
    return data[0][1]; // Should not reach
}

export function getOCV(chemistry: ChemistryType, soc: number): number {
    const curve = chemistry === 'NMC' ? NMC_OCV_CURVE : LFP_OCV_CURVE;
    return interp(soc, curve);
}
