/**
 * MilkGenius ROI Calculator - Browser Application
 * Handles UI interactions and displays calculation results
 */

class MilkGeniusCalculator {
    constructor() {
        this.isDsmMode = true;
        this.lastResults = null;
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        // Get DOM elements
        this.form = document.getElementById('milkGeniusCalculatorForm');
        this.publicResults = document.getElementById('publicResults');
        this.dsmResults = document.getElementById('dsmResults');
        this.dsmSettingsSection = document.getElementById('dsmSettingsSection');
        this.resetSettingsBtn = document.getElementById('resetSettingsBtn');
        this.newCalculationBtn = document.getElementById('newCalculationBtn');
        this.languageSwitch = document.getElementById('languageSwitch');

        // Bind events
        this.form?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.calculate();
        });

        this.resetSettingsBtn?.addEventListener('click', () => this.resetSettings());
        this.newCalculationBtn?.addEventListener('click', () => this.resetForm());

        // MilkGenius now ships as the full DSM calculator by default.
        this.checkDsmAccess();

        // Initialize language
        this.initLanguage();
    }

    checkDsmAccess() {
        this.isDsmMode = true;

        if (this.dsmSettingsSection) {
            this.dsmSettingsSection.style.display = 'block';
        }
        if (this.publicResults) {
            this.publicResults.classList.add('hidden');
        }
    }

    initLanguage() {
        const savedLang = localStorage.getItem('milkgenius_language');
        const browserLang = navigator.language.split('-')[0];
        const lang = savedLang || (['en', 'fr', 'de', 'nl'].includes(browserLang) ? browserLang : 'en');

        if (this.languageSwitch) {
            this.languageSwitch.value = lang;
            this.languageSwitch.addEventListener('change', (e) => {
                localStorage.setItem('milkgenius_language', e.target.value);
                if (typeof i18n !== 'undefined') {
                    i18n.setLanguage(e.target.value);
                }
                if (this.lastResults) {
                    this.displayResults(this.lastResults);
                }
            });
        }

        if (typeof i18n !== 'undefined') {
            i18n.currentLanguage = lang;
            i18n.applyTranslations();
        }
    }

    getInputs() {
        const saraLevel = document.querySelector('input[name="saraPrevalenceLevel"]:checked');
        const overrideVal = document.getElementById('overridePrevalence').value;
        const fatPremiumVal = document.getElementById('fatPremium')?.value;
        const proteinPremiumVal = document.getElementById('proteinPremium')?.value;
        const parseNumber = (value, fallback, parser) => (
            value !== '' ? parser(value) : fallback
        );

        return {
            cowCount: parseNumber(document.getElementById('cowCount').value, 200, (value) => parseInt(value, 10)),
            robotBoxes: parseNumber(document.getElementById('robotBoxes').value, 4, (value) => parseInt(value, 10)),
            annualCkCases: parseNumber(document.getElementById('annualCkCases').value, 10, (value) => parseInt(value, 10)),
            milkPrice: parseNumber(document.getElementById('milkPrice').value, 0.40, parseFloat),
            avgMilkProduction: parseNumber(document.getElementById('avgMilkProduction').value, 32, parseFloat),
            saraPrevalenceLevel: saraLevel ? saraLevel.value : 'medium',
            overridePrevalence: overrideVal !== '' ? parseFloat(overrideVal) : null,
            fatPremium: fatPremiumVal !== '' ? parseFloat(fatPremiumVal) : 0,
            proteinPremium: proteinPremiumVal !== '' ? parseFloat(proteinPremiumVal) : 0
        };
    }

    getDsmConfig() {
        if (!this.isDsmMode) return {};

        const getVal = (id, defaultVal) => {
            const el = document.getElementById(id);
            return el && el.value !== '' ? parseFloat(el.value) : defaultVal;
        };

        return {
            ketosis: {
                // Epidemiology & Loss Model
                sckCkMultiplier: getVal('dsmSckCkMultiplier', 6),
                sckSplit0_30: getVal('dsmSckSplit0_30', 80) / 100,
                sckSplit30_90: (100 - getVal('dsmSckSplit0_30', 80)) / 100,
                milkLossPerSck0_30: getVal('dsmSckLoss0_30', 65),
                dailyLoss30_90: getVal('dsmDailyLoss30_90', 0.5),
                daysIn30_90Phase: getVal('dsmDays30_90', 60),
                milkLossPerCkCase305d: getVal('dsmCkLoss305d', 353),
                milkLossPerSckCase305d: getVal('dsmSckLoss305d', 251),
                // Treatment Economics
                treatment: {
                    sck: {
                        pgDoseGrams: getVal('dsmSckPgDose', 300),
                        pgDays: getVal('dsmSckPgDays', 4),
                        pgPricePerKg: getVal('dsmPgPrice', 3),
                        laborCostPerHour: getVal('dsmLaborCost', 20),
                        laborMinutesPerDay: getVal('dsmSckLaborMin', 20)
                    },
                    ck: {
                        pgDoseGrams: getVal('dsmCkPgDose', 400),
                        pgDays: getVal('dsmCkPgDays', 4),
                        vetCostPerHour: getVal('dsmVetCost', 160),
                        vetMinutesPerCase: getVal('dsmCkVetMin', 30),
                        laborMinutesPerDay: getVal('dsmCkLaborMin', 60)
                    }
                },
                // Device Impact
                action: {
                    sckReductionPercent: getVal('dsmSckReduction', 50),
                    ckReductionPercent: getVal('dsmCkReduction', 70)
                }
            },
            sara: {
                prevalenceLevels: {
                    low: getVal('dsmSaraLow', 10),
                    medium: getVal('dsmSaraMedium', 25),
                    high: getVal('dsmSaraHigh', 35)
                },
                milkLossPerAffectedCowPerDay: getVal('dsmMilkLossPerCow', 2.7),
                lactationLengthDays: getVal('dsmLactationDays', 305),
                prevalenceReductionPercent: getVal('dsmSaraReduction', 30)
            },
            commercial: {
                deviceCostPerUnit: getVal('dsmDeviceCost', 4500),
                depreciationYears: getVal('dsmDepreciation', 5),
                subscription: {
                    base1: getVal('dsmSubBase1', 830),
                    base2: getVal('dsmSubBase2', 1400),
                    base3: getVal('dsmSubBase3', 1800),
                    additionalPerDevice: getVal('dsmSubAdditional', 220)
                }
            }
        };
    }

    calculate() {
        const input = this.getInputs();
        const customConfig = this.getDsmConfig();
        const results = this.runCalculation(input, customConfig);
        this.lastResults = results;
        this.displayResults(results);
    }

    runCalculation(input, customConfig) {
        const config = this.mergeConfig(MILKGENIUS_CONSTANTS, customConfig);

        const ketosisLosses = this.calculateKetosisLosses(input, config);
        const ketosisGains = this.calculateKetosisGains(input, config, ketosisLosses);
        const saraLosses = this.calculateSaraLosses(input, config);
        const saraGains = this.calculateSaraGains(input, config, saraLosses);
        const combinedRoi = this.calculateCombinedRoi(input, config, ketosisGains, saraGains);
        const totalBaselineLosses = ketosisLosses.baselineAnnualLosses + saraLosses.milkLostPerLactation_eur;

        return {
            input,
            ketosis: { losses: ketosisLosses, gains: ketosisGains },
            sara: { losses: saraLosses, gains: saraGains },
            combined: { totalBaselineLosses, ...combinedRoi }
        };
    }

    calculateKetosisLosses(input, config) {
        const k = config.ketosis;

        const annualSckCases = input.annualCkCases * k.sckCkMultiplier;
        const sckCases0_30 = annualSckCases * k.sckSplit0_30;
        const sckCases30_90 = annualSckCases * k.sckSplit30_90;

        const milkLoss0_30_kg = sckCases0_30 * k.milkLossPerSck0_30;
        const milkLoss0_30_eur = milkLoss0_30_kg * input.milkPrice;

        const milkLossPerSck30_90 = k.dailyLoss30_90 * k.daysIn30_90Phase;
        const milkLoss30_90_kg = sckCases30_90 * milkLossPerSck30_90;
        const milkLoss30_90_eur = milkLoss30_90_kg * input.milkPrice;

        const totalCkMilkLoss_kg = input.annualCkCases * k.milkLossPerCkCase305d;
        const totalSckMilkLoss_kg = annualSckCases * k.milkLossPerSckCase305d;
        const milkLossValue305d_eur = (totalCkMilkLoss_kg + totalSckMilkLoss_kg) * input.milkPrice;

        const sckTreatmentCostPerCase =
            ((k.treatment.sck.pgDoseGrams / 1000) * k.treatment.sck.pgDays * k.treatment.sck.pgPricePerKg) +
            ((k.treatment.sck.laborMinutesPerDay / 60) * k.treatment.sck.laborCostPerHour * k.treatment.sck.pgDays);
        const totalSckTreatmentCost = annualSckCases * sckTreatmentCostPerCase;

        const ckTreatmentCostPerCase =
            ((k.treatment.ck.pgDoseGrams / 1000) * k.treatment.ck.pgDays * k.treatment.sck.pgPricePerKg) +
            ((k.treatment.ck.laborMinutesPerDay / 60) * k.treatment.sck.laborCostPerHour * k.treatment.ck.pgDays) +
            ((k.treatment.ck.vetMinutesPerCase / 60) * k.treatment.ck.vetCostPerHour);
        const totalCkTreatmentCost = input.annualCkCases * ckTreatmentCostPerCase;

        const totalMilkLossValue = milkLossValue305d_eur;
        const totalTreatmentCost = totalSckTreatmentCost + totalCkTreatmentCost;
        const baselineAnnualLosses = totalMilkLossValue + totalTreatmentCost;

        return {
            annualSckCases, sckCases0_30, sckCases30_90,
            milkLoss0_30_kg, milkLoss0_30_eur,
            milkLoss30_90_kg, milkLoss30_90_eur,
            totalCkMilkLoss_kg, totalSckMilkLoss_kg,
            milkLossValue305d_eur,
            sckTreatmentCostPerCase, totalSckTreatmentCost,
            ckTreatmentCostPerCase, totalCkTreatmentCost,
            totalMilkLossValue, totalTreatmentCost, baselineAnnualLosses
        };
    }

    calculateKetosisGains(input, config, losses) {
        const k = config.ketosis;

        const avoidedSckCases = losses.annualSckCases * (k.action.sckReductionPercent / 100);
        const avoidedCkCases = input.annualCkCases * (k.action.ckReductionPercent / 100);

        const sckMilkGain_kg = avoidedSckCases * k.milkLossPerSckCase305d;
        const ckMilkGain_kg = avoidedCkCases * k.milkLossPerCkCase305d;
        const totalMilkGain_kg = sckMilkGain_kg + ckMilkGain_kg;
        const totalMilkGain_eur = totalMilkGain_kg * input.milkPrice;

        const sckTreatmentSavings = avoidedSckCases * losses.sckTreatmentCostPerCase;
        const ckTreatmentSavings = avoidedCkCases * losses.ckTreatmentCostPerCase;
        const totalTreatmentSavings = sckTreatmentSavings + ckTreatmentSavings;

        const annualBenefit = totalMilkGain_eur + totalTreatmentSavings;

        return {
            avoidedSckCases, avoidedCkCases,
            sckMilkGain_kg, ckMilkGain_kg,
            totalMilkGain_kg, totalMilkGain_eur,
            sckTreatmentSavings, ckTreatmentSavings, totalTreatmentSavings,
            annualBenefit
        };
    }

    calculateSaraLosses(input, config) {
        const s = config.sara;

        const effectivePrevalence = input.overridePrevalence !== null
            ? input.overridePrevalence / 100
            : s.prevalenceLevels[input.saraPrevalenceLevel] / 100;

        const affectedCowsPerDay = input.cowCount * effectivePrevalence;
        const milkLostPerDay_kg = affectedCowsPerDay * s.milkLossPerAffectedCowPerDay;
        const milkLostPerDay_eur = milkLostPerDay_kg * input.milkPrice;
        const milkLostPerLactation_kg = milkLostPerDay_kg * s.lactationLengthDays;
        const milkLostPerLactation_eur = milkLostPerLactation_kg * input.milkPrice;

        return {
            effectivePrevalence,
            effectivePrevalencePercent: effectivePrevalence * 100,
            affectedCowsPerDay,
            milkLostPerDay_kg, milkLostPerDay_eur,
            milkLostPerLactation_kg, milkLostPerLactation_eur
        };
    }

    calculateSaraGains(input, config, losses) {
        const s = config.sara;

        const newPrevalence = losses.effectivePrevalence * (1 - s.prevalenceReductionPercent / 100);
        const newAffectedCows = input.cowCount * newPrevalence;
        const avoidedAffectedCows = losses.affectedCowsPerDay - newAffectedCows;
        const newMilkLostPerDay_kg = newAffectedCows * s.milkLossPerAffectedCowPerDay;

        const milkRecoveredPerDay_kg = losses.milkLostPerDay_kg - newMilkLostPerDay_kg;
        const milkRecoveredPerLactation_kg = milkRecoveredPerDay_kg * s.lactationLengthDays;
        const annualBenefit = milkRecoveredPerLactation_kg * input.milkPrice;

        return {
            newPrevalence,
            newPrevalencePercent: newPrevalence * 100,
            avoidedAffectedCows,
            newAffectedCows, newMilkLostPerDay_kg,
            milkRecoveredPerDay_kg, milkRecoveredPerLactation_kg,
            annualBenefit
        };
    }

    calculateCombinedRoi(input, config, ketosisGains, saraGains) {
        const c = config.commercial;

        const deviceCount = input.robotBoxes;
        const totalCapex = deviceCount * c.deviceCostPerUnit;
        const annualizedCapex = totalCapex / c.depreciationYears;

        // Use custom subscription if available, otherwise use global function
        let annualSubscription;
        if (c.subscription) {
            const sub = c.subscription;
            if (deviceCount <= 1) annualSubscription = sub.base1;
            else if (deviceCount === 2) annualSubscription = sub.base2;
            else if (deviceCount === 3) annualSubscription = sub.base3;
            else annualSubscription = sub.base3 + (deviceCount - 3) * sub.additionalPerDevice;
        } else {
            annualSubscription = calculateSubscription(deviceCount);
        }

        const totalAnnualBenefit = ketosisGains.annualBenefit + saraGains.annualBenefit;
        const annualCost = annualizedCapex + annualSubscription;
        const netBenefit = totalAnnualBenefit - annualCost;
        const roi = annualCost > 0 ? netBenefit / annualCost : 0;

        const annualBenefitMinusSubscription = totalAnnualBenefit - annualSubscription;
        const paybackMonths = annualBenefitMinusSubscription > 0
            ? (12 * totalCapex) / annualBenefitMinusSubscription
            : Infinity;

        return {
            deviceCount, totalCapex, annualizedCapex, annualSubscription,
            totalAnnualBenefit, annualCost, netBenefit, roi,
            roiPercent: roi * 100, paybackMonths
        };
    }

    mergeConfig(defaults, overrides) {
        const result = JSON.parse(JSON.stringify(defaults));
        for (const key in overrides) {
            if (overrides[key] !== null && typeof overrides[key] === 'object' && !Array.isArray(overrides[key])) {
                result[key] = this.mergeConfig(result[key] || {}, overrides[key]);
            } else if (overrides[key] !== undefined) {
                result[key] = overrides[key];
            }
        }
        return result;
    }

    displayResults(results) {
        this.publicResults.classList.add('hidden');
        this.dsmResults.classList.remove('hidden');
        this.displayDsmResults(results);

        // Scroll to results
        this.dsmResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    displayPublicResults(results) {
        const totalLosses = results.combined.totalBaselineLosses;
        const totalGains = results.combined.totalAnnualBenefit;

        document.getElementById('totalLosses').textContent = this.formatCurrency(totalLosses);
        document.getElementById('totalGains').textContent = this.formatCurrency(totalGains);
    }

    displayDsmResults(results) {
        const r = results;

        // Summary cards
        document.getElementById('dsmTotalLosses').textContent = this.formatCurrency(r.combined.totalBaselineLosses);
        document.getElementById('dsmTotalGainsCard').textContent = this.formatCurrency(r.combined.totalAnnualBenefit);

        // Ketosis Losses - Detailed
        document.getElementById('dsmAnnualCkCases').textContent = r.input.annualCkCases;
        document.getElementById('dsmAnnualSckCases').textContent = Math.round(r.ketosis.losses.annualSckCases);
        document.getElementById('dsmSckCases0_30').textContent = Math.round(r.ketosis.losses.sckCases0_30);
        document.getElementById('dsmSckCases30_90').textContent = Math.round(r.ketosis.losses.sckCases30_90);
        document.getElementById('dsmMilkLoss0_30').textContent = this.formatCurrency(r.ketosis.losses.milkLoss0_30_eur);
        document.getElementById('dsmMilkLoss30_90').textContent = this.formatCurrency(r.ketosis.losses.milkLoss30_90_eur);
        document.getElementById('dsmKetMilkLoss').textContent = this.formatCurrency(r.ketosis.losses.milkLossValue305d_eur);
        document.getElementById('dsmSckTreatment').textContent = this.formatCurrency(r.ketosis.losses.totalSckTreatmentCost);
        document.getElementById('dsmCkTreatment').textContent = this.formatCurrency(r.ketosis.losses.totalCkTreatmentCost);
        document.getElementById('dsmKetTotalLoss').textContent = this.formatCurrency(r.ketosis.losses.baselineAnnualLosses);

        // Ketosis Gains - Detailed
        document.getElementById('dsmAvoidedSckCases').textContent = Math.round(r.ketosis.gains.avoidedSckCases);
        document.getElementById('dsmAvoidedCkCases').textContent = Math.round(r.ketosis.gains.avoidedCkCases);
        document.getElementById('dsmKetMilkGainKg').textContent = this.formatWeight(r.ketosis.gains.totalMilkGain_kg);
        document.getElementById('dsmKetMilkGainEur').textContent = this.formatCurrency(r.ketosis.gains.totalMilkGain_eur);
        document.getElementById('dsmKetTreatmentSavings').textContent = this.formatCurrency(r.ketosis.gains.totalTreatmentSavings);
        document.getElementById('dsmKetBenefit').textContent = this.formatCurrency(r.ketosis.gains.annualBenefit);

        // SARA Losses - Detailed
        document.getElementById('dsmSaraPrevalence').textContent = this.formatPercent(r.sara.losses.effectivePrevalencePercent);
        document.getElementById('dsmAffectedCows').textContent = Math.round(r.sara.losses.affectedCowsPerDay);
        document.getElementById('dsmSaraDailyLossKg').textContent = this.formatWeight(r.sara.losses.milkLostPerDay_kg);
        document.getElementById('dsmSaraDailyLossEur').textContent = this.formatCurrency(r.sara.losses.milkLostPerDay_eur);
        document.getElementById('dsmSaraMilkLoss').textContent = this.formatCurrency(r.sara.losses.milkLostPerLactation_eur);

        // SARA Gains - Detailed
        document.getElementById('dsmSaraAvoidedCows').textContent = Math.round(r.sara.gains.avoidedAffectedCows);
        document.getElementById('dsmSaraNewPrevalence').textContent = this.formatPercent(r.sara.gains.newPrevalencePercent);
        document.getElementById('dsmSaraRecoveredKg').textContent = this.formatWeight(r.sara.gains.milkRecoveredPerDay_kg);
        document.getElementById('dsmSaraRecoveredLactKg').textContent = this.formatWeight(r.sara.gains.milkRecoveredPerLactation_kg);
        document.getElementById('dsmSaraBenefit').textContent = this.formatCurrency(r.sara.gains.annualBenefit);

        // ROI - Detailed
        document.getElementById('dsmDeviceCount').textContent = r.combined.deviceCount;
        document.getElementById('dsmCapex').textContent = this.formatCurrency(r.combined.totalCapex);
        document.getElementById('dsmAnnualizedCapex').textContent = this.formatCurrency(r.combined.annualizedCapex);
        document.getElementById('dsmSubscription').textContent = this.formatCurrency(r.combined.annualSubscription);
        document.getElementById('dsmAnnualCost').textContent = this.formatCurrency(r.combined.annualCost);
        document.getElementById('dsmTotalBenefit').textContent = this.formatCurrency(r.combined.totalAnnualBenefit);
        document.getElementById('dsmNetBenefit').textContent = this.formatCurrency(r.combined.netBenefit);
        document.getElementById('dsmRoiPercent').textContent = this.formatPercent(r.combined.roiPercent);

        const payback = r.combined.paybackMonths;
        document.getElementById('dsmPayback').textContent = this.formatPayback(payback);
    }

    formatCurrency(value) {
        return new Intl.NumberFormat(this.getLocale(), {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    }

    formatWeight(value) {
        return `${this.formatNumber(value, 0)} ${this.t('units.kg')}`;
    }

    formatPercent(value) {
        return `${this.formatNumber(value, 0)}%`;
    }

    formatPayback(value) {
        if (value === Infinity) {
            return this.t('dsm.roi.notAvailable');
        }

        return `${this.formatNumber(value, 1)} ${this.t('units.months')}`;
    }

    formatNumber(value, decimals = 0) {
        return new Intl.NumberFormat(this.getLocale(), {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        }).format(value);
    }

    getLocale() {
        const language = typeof i18n !== 'undefined' ? i18n.currentLanguage : 'en';
        const locales = {
            en: 'en-GB',
            fr: 'fr-FR',
            de: 'de-DE',
            nl: 'nl-NL'
        };

        return locales[language] || 'en-GB';
    }

    t(key) {
        return typeof i18n !== 'undefined' ? i18n.t(key) : key;
    }

    resetSettings() {
        const d = MILKGENIUS_CONSTANTS;

        // Ketosis - Epidemiology & Loss Model
        document.getElementById('dsmSckCkMultiplier').value = d.ketosis.sckCkMultiplier;
        document.getElementById('dsmSckSplit0_30').value = d.ketosis.sckSplit0_30 * 100;
        document.getElementById('dsmSckLoss0_30').value = d.ketosis.milkLossPerSck0_30;
        document.getElementById('dsmDailyLoss30_90').value = d.ketosis.dailyLoss30_90;
        document.getElementById('dsmDays30_90').value = d.ketosis.daysIn30_90Phase;
        document.getElementById('dsmCkLoss305d').value = d.ketosis.milkLossPerCkCase305d;
        document.getElementById('dsmSckLoss305d').value = d.ketosis.milkLossPerSckCase305d;

        // Ketosis - Treatment Economics
        document.getElementById('dsmSckPgDose').value = d.ketosis.treatment.sck.pgDoseGrams;
        document.getElementById('dsmSckPgDays').value = d.ketosis.treatment.sck.pgDays;
        document.getElementById('dsmPgPrice').value = d.ketosis.treatment.sck.pgPricePerKg;
        document.getElementById('dsmLaborCost').value = d.ketosis.treatment.sck.laborCostPerHour;
        document.getElementById('dsmSckLaborMin').value = d.ketosis.treatment.sck.laborMinutesPerDay;
        document.getElementById('dsmCkPgDose').value = d.ketosis.treatment.ck.pgDoseGrams;
        document.getElementById('dsmCkPgDays').value = d.ketosis.treatment.ck.pgDays;
        document.getElementById('dsmVetCost').value = d.ketosis.treatment.ck.vetCostPerHour;
        document.getElementById('dsmCkVetMin').value = d.ketosis.treatment.ck.vetMinutesPerCase;
        document.getElementById('dsmCkLaborMin').value = d.ketosis.treatment.ck.laborMinutesPerDay;

        // Ketosis - Device Impact
        document.getElementById('dsmSckReduction').value = d.ketosis.action.sckReductionPercent;
        document.getElementById('dsmCkReduction').value = d.ketosis.action.ckReductionPercent;

        // SARA
        document.getElementById('dsmSaraLow').value = d.sara.prevalenceLevels.low;
        document.getElementById('dsmSaraMedium').value = d.sara.prevalenceLevels.medium;
        document.getElementById('dsmSaraHigh').value = d.sara.prevalenceLevels.high;
        document.getElementById('dsmMilkLossPerCow').value = d.sara.milkLossPerAffectedCowPerDay;
        document.getElementById('dsmLactationDays').value = d.sara.lactationLengthDays;
        document.getElementById('dsmSaraReduction').value = d.sara.prevalenceReductionPercent;

        // Commercial
        document.getElementById('dsmDeviceCost').value = d.commercial.deviceCostPerUnit;
        document.getElementById('dsmDepreciation').value = d.commercial.depreciationYears;
        document.getElementById('dsmSubBase1').value = d.commercial.subscription.base1;
        document.getElementById('dsmSubBase2').value = d.commercial.subscription.base2;
        document.getElementById('dsmSubBase3').value = d.commercial.subscription.base3;
        document.getElementById('dsmSubAdditional').value = d.commercial.subscription.additionalPerDevice;

        if (this.lastResults) {
            this.calculate();
        }
    }

    resetForm() {
        this.publicResults.classList.add('hidden');
        this.dsmResults.classList.add('hidden');
        this.form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Initialize calculator
const milkGeniusCalc = new MilkGeniusCalculator();
