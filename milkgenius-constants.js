/**
 * MilkGenius ROI Calculator Constants
 * Unified Ketosis (CK/SCK) + Acidosis (SARA) Calculator
 *
 * These values are extracted from the reference Excel files:
 * - MilkGenius_Ketosis_ROI_v4.xlsx
 * - SARA_ROI_Calculator_v1.xlsx
 */

const MILKGENIUS_CONSTANTS = {
    // ===========================================
    // KETOSIS - Epidemiology & Loss Model
    // ===========================================
    ketosis: {
        // Derived cases
        sckCkMultiplier: 6,              // SCK cases per CK case
        sckSplit0_30: 0.80,              // 80% of SCK cases in 0-30 DIM
        sckSplit30_90: 0.20,             // 20% of SCK cases in 30-90 DIM

        // Milk losses
        milkLossPerSck0_30: 65,          // kg lost per SCK case in early phase
        dailyLoss30_90: 0.5,             // kg/day lost in 30-90 DIM phase
        daysIn30_90Phase: 60,            // duration of 30-90 DIM phase
        milkLossPerCkCase305d: 353,      // kg lost per CK case over 305 days
        milkLossPerSckCase305d: 251,     // kg lost per SCK case over 305 days

        // SCK Treatment
        treatment: {
            sck: {
                pgDoseGrams: 300,        // Propylene glycol dose (g/day)
                pgDays: 4,               // Treatment duration (days)
                pgPricePerKg: 3,         // EUR/kg
                laborCostPerHour: 20,    // EUR/hour
                laborMinutesPerDay: 20   // Minutes per day of treatment
            },
            ck: {
                pgDoseGrams: 400,        // Propylene glycol dose for CK (g/day)
                pgDays: 4,               // Treatment duration (days)
                vetCostPerHour: 160,     // EUR/hour
                vetMinutesPerCase: 30,   // Minutes vet per case
                laborMinutesPerDay: 60   // Minutes labor per day
            }
        },

        // Action (Device Impact)
        action: {
            sckReductionPercent: 50,     // % reduction in SCK cases
            ckReductionPercent: 70       // % reduction in CK cases
        }
    },

    // ===========================================
    // SARA (Subacute Ruminal Acidosis)
    // ===========================================
    sara: {
        // Prevalence levels (%)
        prevalenceLevels: {
            low: 10,
            medium: 25,
            high: 35
        },

        // Milk loss
        milkLossPerAffectedCowPerDay: 2.7,  // kg/day

        // Lactation
        lactationLengthDays: 305,

        // Action (Device Impact)
        prevalenceReductionPercent: 30      // % reduction in prevalence
    },

    // ===========================================
    // Commercial Parameters
    // ===========================================
    commercial: {
        deviceCostPerUnit: 4500,         // EUR per device
        depreciationYears: 5,            // Years for depreciation

        // Subscription formula:
        // <=1: 830, =2: 1400, =3: 1800, >3: 1800+(n-3)*220
        subscription: {
            base1: 830,                  // 1 device
            base2: 1400,                 // 2 devices
            base3: 1800,                 // 3 devices
            additionalPerDevice: 220     // Each device after 3
        }
    },

    // ===========================================
    // Input Validation Constraints
    // ===========================================
    validation: {
        cowCount: { min: 1, max: 2000, default: 200 },
        robotBoxes: { min: 1, max: 20, default: 4 },
        annualCkCases: { min: 0, max: 500, default: 10 },
        milkPrice: { min: 0.20, max: 1.00, default: 0.40 },
        avgMilkProduction: { min: 15, max: 60, default: 32 },
        overridePrevalence: { min: 0, max: 100, default: null },
        fatPremium: { min: 0, max: 10, default: 0 },
        proteinPremium: { min: 0, max: 10, default: 0 }
    },

    // ===========================================
    // Default SARA prevalence level
    // ===========================================
    defaultSaraLevel: 'medium'
};

/**
 * Calculate annual subscription based on device count
 * @param {number} deviceCount - Number of devices (= number of robot boxes)
 * @returns {number} Annual subscription in EUR
 */
function calculateSubscription(deviceCount) {
    const sub = MILKGENIUS_CONSTANTS.commercial.subscription;
    if (deviceCount <= 1) return sub.base1;
    if (deviceCount === 2) return sub.base2;
    if (deviceCount === 3) return sub.base3;
    return sub.base3 + (deviceCount - 3) * sub.additionalPerDevice;
}

// Export for Node.js and browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MILKGENIUS_CONSTANTS, calculateSubscription };
}
if (typeof window !== 'undefined') {
    window.MILKGENIUS_CONSTANTS = MILKGENIUS_CONSTANTS;
    window.calculateSubscription = calculateSubscription;
}
