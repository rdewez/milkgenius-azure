/**
 * MilkGenius ROI Calculator - Internationalization
 */

const translations = {
    en: {
        languageSelectorLabel: "Language selector",
        pageTitle: "MilkGenius ROI Calculator - BouMatic",
        pageMainTitle: "MilkGenius ROI Calculator",
        pageSubtitle: "Ketosis & Acidosis Detection",
        calculatorTitle: "Calculate your potential savings",
        calculatorSubtitle: "Estimate your ROI from Ketosis and Acidosis early detection",
        heroPill: "BouMatic",
        heroSubtitle: "Early detection, better outcomes.",
        newCalculation: "New Calculation",
        requestQuote: "Request Quote",
        footerCopyright: "© 2026 BouMatic LLC. All rights reserved.",
        footerDisclaimer: "This calculator provides estimates based on average parameters. A personalized audit is recommended for precise sizing.",
        units: {
            kg: "kg",
            months: "months"
        },
        inputs: {
            title: "Farm Information",
            cowCount: "Number of lactating cows",
            cowCountHelp: "Total cows currently in lactation",
            robotBoxes: "Number of robot boxes",
            robotBoxesHelp: "Number of milking robot stations",
            annualCkCases: "Annual clinical ketosis cases (CK)",
            annualCkCasesHelp: "Diagnosed clinical ketosis cases per year",
            milkPrice: "Milk price (EUR/kg)",
            milkPriceHelp: "Average price received per kg of milk",
            avgMilkProduction: "Average milk production (kg/cow/day)",
            avgMilkProductionHelp: "Daily average production per cow",
            optionalPremiums: "Optional: Fat & Protein Premium",
            fatPremium: "Fat premium (EUR/kg fat)",
            fatPremiumHelp: "Additional payment per kg of fat",
            proteinPremium: "Protein premium (EUR/kg protein)",
            proteinPremiumHelp: "Additional payment per kg of protein",
            premiumNote: "These premiums will be added to the milk price calculation when estimating losses and gains.",
            saraSectionTitle: "SARA Prevalence",
            saraSectionHelp: "Select the estimated prevalence level of subacute ruminal acidosis in your herd",
            overridePrevalence: "Or enter custom prevalence %",
            overridePrevalenceHelp: "Leave empty to use selected level above",
            calculate: "Calculate my potential savings",
            prevalence: {
                low: "Low",
                lowDesc: "Well-managed ration",
                medium: "Medium",
                mediumDesc: "Typical dairy herd",
                high: "High",
                highDesc: "At-risk herd"
            }
        },
        results: {
            title: "Your Results",
            todayLosses: "Today's Annual Losses",
            lossesDetail: "Milk loss + treatment costs",
            potentialGains: "Potential Annual Gains",
            gainsDetail: "With MilkGenius action",
            ctaTitle: "Want the full picture?",
            ctaText: "Get your exact ROI, payback period, and detailed breakdown.",
            ctaButton: "Request Full ROI Calculation"
        },
        dsm: {
            results: {
                title: "Detailed Analysis"
            },
            sections: {
                ketosisLosses: "Today's Losses - Ketosis",
                ketosisImpact: "Impact With Action - Ketosis",
                saraLosses: "Today's Losses - SARA",
                saraImpact: "Impact With Action - SARA"
            },
            fields: {
                annualCkCases: "Annual CK cases (input)",
                annualSckCases: "Annual SCK cases (derived)",
                sckCases0_30: "↳ SCK cases 0-30 DIM (80%)",
                sckCases30_90: "↳ SCK cases 30-90 DIM (20%)",
                milkLoss0_30: "Milk loss 0-30 DIM",
                milkLoss30_90: "Milk loss 30-90 DIM",
                fullLactationMilkLoss: "Full lactation milk loss (305d)",
                sckTreatmentCost: "SCK treatment cost",
                ckTreatmentCost: "CK treatment cost",
                totalKetosisLosses: "Total ketosis losses",
                avoidedSckCases: "Avoided SCK cases",
                avoidedCkCases: "Avoided CK cases",
                milkGainsKg: "Milk gains (kg)",
                milkGainsValue: "Milk gains value",
                treatmentSavings: "Treatment savings",
                annualKetosisBenefit: "Annual ketosis benefit",
                effectivePrevalence: "Effective prevalence",
                affectedCows: "Affected cows/day",
                dailyMilkLossKg: "Daily milk loss (kg)",
                dailyMilkLossValue: "Daily milk loss value",
                lactationMilkLoss: "Lactation milk loss",
                avoidedAffectedCows: "Avoided affected cows/day",
                newPrevalence: "New prevalence after action",
                milkRecoveredDayKg: "Milk recovered/day (kg)",
                milkRecoveredLactationKg: "Milk recovered/lactation (kg)",
                annualSaraBenefit: "Annual SARA benefit",
                deviceCount: "Number of devices",
                totalCapex: "Total CAPEX",
                annualizedCapex: "Annualized CAPEX",
                annualSubscription: "Annual subscription",
                totalAnnualCost: "Total annual cost",
                totalAnnualBenefit: "Total annual benefit",
                netAnnualBenefit: "Net annual benefit",
                roi: "ROI"
            },
            roi: {
                title: "ROI & Payback",
                payback: "Payback Period",
                notAvailable: "Not available"
            },
            settings: {
                title: "DSM Configuration",
                note: "Adjust parameters based on local economics",
                ketosisEpi: "Ketosis - Epidemiology & Loss Model",
                ketosisTreat: "Ketosis - Treatment Economics",
                ketosisAction: "Ketosis - Device Impact",
                sara: "SARA Parameters",
                commercial: "Commercial Parameters",
                reset: "Reset to Defaults",
                fields: {
                    sckCkMultiplier: "SCK:CK multiplier",
                    sckSplit0_30: "SCK split 0-30 DIM (%)",
                    sckLoss0_30: "SCK loss 0-30 DIM (kg)",
                    dailyLoss30_90: "SCK daily loss 30-90 (kg/day)",
                    days30_90: "Days in 30-90 phase",
                    ckLoss305d: "CK loss/case (305d, kg)",
                    sckLoss305d: "SCK loss/case (305d, kg)",
                    sckPgDose: "SCK PG dose (g/day)",
                    sckPgDays: "SCK treatment days",
                    pgPrice: "PG price (EUR/kg)",
                    laborCost: "Labor cost (EUR/hour)",
                    sckLaborMin: "SCK labor (min/day)",
                    ckPgDose: "CK PG dose (g/day)",
                    ckPgDays: "CK treatment days",
                    vetCost: "Vet cost (EUR/hour)",
                    ckVetMin: "CK vet time (min/case)",
                    ckLaborMin: "CK labor (min/day)",
                    sckReduction: "SCK reduction %",
                    ckReduction: "CK reduction %",
                    saraLow: "Prevalence Low (%)",
                    saraMedium: "Prevalence Medium (%)",
                    saraHigh: "Prevalence High (%)",
                    milkLossPerCow: "Milk loss/cow/day (kg)",
                    lactationDays: "Lactation length (days)",
                    saraReduction: "Prevalence reduction %",
                    deviceCost: "Device cost (EUR)",
                    depreciation: "Depreciation (years)",
                    subBase1: "Subscription 1 device (EUR)",
                    subBase2: "Subscription 2 devices (EUR)",
                    subBase3: "Subscription 3 devices (EUR)",
                    subAdditional: "Per additional device (EUR)"
                }
            }
        }
    },
    fr: {
        languageSelectorLabel: "Sélecteur de langue",
        pageTitle: "Calculateur ROI MilkGenius - BouMatic",
        pageMainTitle: "Calculateur ROI MilkGenius",
        pageSubtitle: "Détection de la cétose et de l'acidose",
        calculatorTitle: "Calculez vos gains potentiels",
        calculatorSubtitle: "Estimez votre ROI grâce à la détection précoce de la cétose et de l'acidose",
        heroPill: "BouMatic",
        heroSubtitle: "Détection précoce, meilleurs résultats.",
        newCalculation: "Nouveau calcul",
        requestQuote: "Demander une offre",
        footerCopyright: "© 2026 BouMatic LLC. Tous droits reserves.",
        footerDisclaimer: "Ce calculateur fournit des estimations basées sur des paramètres moyens. Un audit personnalisé est recommandé pour un dimensionnement précis.",
        units: {
            kg: "kg",
            months: "mois"
        },
        inputs: {
            title: "Informations de la ferme",
            cowCount: "Nombre de vaches en lactation",
            cowCountHelp: "Nombre total de vaches actuellement en lactation",
            robotBoxes: "Nombre de boxes robot",
            robotBoxesHelp: "Nombre de stations de robot de traite",
            annualCkCases: "Cas cliniques de cétose par an (CK)",
            annualCkCasesHelp: "Cas de cétose clinique diagnostiqués par an",
            milkPrice: "Prix du lait (EUR/kg)",
            milkPriceHelp: "Prix moyen reçu par kg de lait",
            avgMilkProduction: "Production laitière moyenne (kg/vache/jour)",
            avgMilkProductionHelp: "Production moyenne quotidienne par vache",
            optionalPremiums: "Optionnel : prime matière grasse et protéine",
            fatPremium: "Prime matière grasse (EUR/kg de graisse)",
            fatPremiumHelp: "Paiement additionnel par kg de graisse",
            proteinPremium: "Prime protéine (EUR/kg de protéine)",
            proteinPremiumHelp: "Paiement additionnel par kg de protéine",
            premiumNote: "Ces primes seront ajoutées au prix du lait lors de l'estimation des pertes et des gains.",
            saraSectionTitle: "Prévalence SARA",
            saraSectionHelp: "Sélectionnez le niveau estimé de prévalence de l'acidose ruminale subaiguë dans votre troupeau",
            overridePrevalence: "Ou entrez une prévalence personnalisée %",
            overridePrevalenceHelp: "Laissez vide pour utiliser le niveau sélectionné ci-dessus",
            calculate: "Calculer mes gains potentiels",
            prevalence: {
                low: "Faible",
                lowDesc: "Ration bien maîtrisée",
                medium: "Moyenne",
                mediumDesc: "Troupeau laitier type",
                high: "Élevée",
                highDesc: "Troupeau à risque"
            }
        },
        results: {
            title: "Vos résultats",
            todayLosses: "Pertes annuelles actuelles",
            lossesDetail: "Pertes de lait + coûts de traitement",
            potentialGains: "Gains annuels potentiels",
            gainsDetail: "Avec l'action MilkGenius",
            ctaTitle: "Vous voulez la vue complète ?",
            ctaText: "Obtenez votre ROI exact, votre délai de retour et le détail complet.",
            ctaButton: "Demander le calcul ROI complet"
        },
        dsm: {
            results: {
                title: "Analyse détaillée"
            },
            sections: {
                ketosisLosses: "Pertes actuelles - Cétose",
                ketosisImpact: "Impact avec action - Cétose",
                saraLosses: "Pertes actuelles - SARA",
                saraImpact: "Impact avec action - SARA"
            },
            fields: {
                annualCkCases: "Cas CK annuels (saisie)",
                annualSckCases: "Cas SCK annuels (calculés)",
                sckCases0_30: "↳ Cas SCK 0-30 DIM (80 %)",
                sckCases30_90: "↳ Cas SCK 30-90 DIM (20 %)",
                milkLoss0_30: "Perte de lait 0-30 DIM",
                milkLoss30_90: "Perte de lait 30-90 DIM",
                fullLactationMilkLoss: "Perte de lait sur lactation complète (305 j)",
                sckTreatmentCost: "Coût de traitement SCK",
                ckTreatmentCost: "Coût de traitement CK",
                totalKetosisLosses: "Pertes totales cétose",
                avoidedSckCases: "Cas SCK évités",
                avoidedCkCases: "Cas CK évités",
                milkGainsKg: "Gain de lait (kg)",
                milkGainsValue: "Valeur du gain de lait",
                treatmentSavings: "Économies de traitement",
                annualKetosisBenefit: "Bénéfice annuel cétose",
                effectivePrevalence: "Prévalence effective",
                affectedCows: "Vaches affectées/jour",
                dailyMilkLossKg: "Perte de lait journalière (kg)",
                dailyMilkLossValue: "Valeur de la perte de lait journalière",
                lactationMilkLoss: "Perte de lait sur lactation",
                avoidedAffectedCows: "Vaches affectées évitées/jour",
                newPrevalence: "Nouvelle prévalence après action",
                milkRecoveredDayKg: "Lait récupéré/jour (kg)",
                milkRecoveredLactationKg: "Lait récupéré/lactation (kg)",
                annualSaraBenefit: "Bénéfice annuel SARA",
                deviceCount: "Nombre d'appareils",
                totalCapex: "CAPEX total",
                annualizedCapex: "CAPEX annualisé",
                annualSubscription: "Abonnement annuel",
                totalAnnualCost: "Coût annuel total",
                totalAnnualBenefit: "Bénéfice annuel total",
                netAnnualBenefit: "Bénéfice net annuel",
                roi: "ROI"
            },
            roi: {
                title: "ROI et retour",
                payback: "Délai de retour",
                notAvailable: "Non disponible"
            },
            settings: {
                title: "Configuration DSM",
                note: "Ajustez les paramètres selon l'économie locale",
                ketosisEpi: "Cétose - Épidémiologie et modèle de pertes",
                ketosisTreat: "Cétose - Économie des traitements",
                ketosisAction: "Cétose - Impact de l'équipement",
                sara: "Paramètres SARA",
                commercial: "Paramètres commerciaux",
                reset: "Réinitialiser par défaut",
                fields: {
                    sckCkMultiplier: "Multiplicateur SCK:CK",
                    sckSplit0_30: "Répartition SCK 0-30 DIM (%)",
                    sckLoss0_30: "Perte SCK 0-30 DIM (kg)",
                    dailyLoss30_90: "Perte journalière SCK 30-90 (kg/jour)",
                    days30_90: "Nombre de jours dans la phase 30-90",
                    ckLoss305d: "Perte CK/cas (305 j, kg)",
                    sckLoss305d: "Perte SCK/cas (305 j, kg)",
                    sckPgDose: "Dose PG SCK (g/jour)",
                    sckPgDays: "Jours de traitement SCK",
                    pgPrice: "Prix du PG (EUR/kg)",
                    laborCost: "Coût de main-d'oeuvre (EUR/heure)",
                    sckLaborMin: "Main-d'oeuvre SCK (min/jour)",
                    ckPgDose: "Dose PG CK (g/jour)",
                    ckPgDays: "Jours de traitement CK",
                    vetCost: "Coût vétérinaire (EUR/heure)",
                    ckVetMin: "Temps vétérinaire CK (min/cas)",
                    ckLaborMin: "Main-d'oeuvre CK (min/jour)",
                    sckReduction: "Réduction SCK %",
                    ckReduction: "Réduction CK %",
                    saraLow: "Prévalence faible (%)",
                    saraMedium: "Prévalence moyenne (%)",
                    saraHigh: "Prévalence élevée (%)",
                    milkLossPerCow: "Perte de lait/vache/jour (kg)",
                    lactationDays: "Durée de lactation (jours)",
                    saraReduction: "Réduction de prévalence %",
                    deviceCost: "Coût de l'appareil (EUR)",
                    depreciation: "Amortissement (années)",
                    subBase1: "Abonnement 1 appareil (EUR)",
                    subBase2: "Abonnement 2 appareils (EUR)",
                    subBase3: "Abonnement 3 appareils (EUR)",
                    subAdditional: "Par appareil supplémentaire (EUR)"
                }
            }
        }
    },
    de: {
        languageSelectorLabel: "Sprachauswahl",
        pageTitle: "MilkGenius ROI-Rechner - BouMatic",
        pageMainTitle: "MilkGenius ROI-Rechner",
        pageSubtitle: "Ketose- und Azidose-Erkennung",
        calculatorTitle: "Berechnen Sie Ihr Einsparpotenzial",
        calculatorSubtitle: "Schatzen Sie Ihren ROI durch die Fruherkennung von Ketose und Azidose",
        heroPill: "BouMatic",
        heroSubtitle: "Fruhe Erkennung, bessere Ergebnisse.",
        newCalculation: "Neue Berechnung",
        requestQuote: "Angebot anfordern",
        footerCopyright: "© 2026 BouMatic LLC. Alle Rechte vorbehalten.",
        footerDisclaimer: "Dieser Rechner liefert Schatzwerte auf Basis durchschnittlicher Parameter. Fur eine genaue Auslegung wird eine personliche Analyse empfohlen.",
        units: {
            kg: "kg",
            months: "Monate"
        },
        inputs: {
            title: "Betriebsdaten",
            cowCount: "Anzahl laktierender Kuhe",
            cowCountHelp: "Gesamtzahl der aktuell laktierenden Kuhe",
            robotBoxes: "Anzahl Roboterboxen",
            robotBoxesHelp: "Anzahl der Melkroboter-Stationen",
            annualCkCases: "Klinische Ketosefalle pro Jahr (CK)",
            annualCkCasesHelp: "Diagnostizierte klinische Ketosefalle pro Jahr",
            milkPrice: "Milchpreis (EUR/kg)",
            milkPriceHelp: "Durchschnittlicher Preis pro kg Milch",
            avgMilkProduction: "Durchschnittliche Milchleistung (kg/Kuh/Tag)",
            avgMilkProductionHelp: "Tagliche Durchschnittsleistung pro Kuh",
            optionalPremiums: "Optional: Fett- und Proteinzuschlage",
            fatPremium: "Fettzuschlag (EUR/kg Fett)",
            fatPremiumHelp: "Zusatzlicher Erlos pro kg Fett",
            proteinPremium: "Proteinzuschlag (EUR/kg Protein)",
            proteinPremiumHelp: "Zusatzlicher Erlos pro kg Protein",
            premiumNote: "Diese Zuschlage werden bei der Schatzung von Verlusten und Gewinnen zum Milchpreis addiert.",
            saraSectionTitle: "SARA-Pravalenz",
            saraSectionHelp: "Wahlen Sie das geschatzte Pravalenzniveau der subakuten Pansenazidose in Ihrer Herde",
            overridePrevalence: "Oder benutzerdefinierte Pravalenz eingeben %",
            overridePrevalenceHelp: "Leer lassen, um das oben gewahlte Niveau zu verwenden",
            calculate: "Mein Einsparpotenzial berechnen",
            prevalence: {
                low: "Niedrig",
                lowDesc: "Gut gefuhrte Ration",
                medium: "Mittel",
                mediumDesc: "Typische Milchviehherde",
                high: "Hoch",
                highDesc: "Risikobetrieb"
            }
        },
        results: {
            title: "Ihre Ergebnisse",
            todayLosses: "Aktuelle Jahresverluste",
            lossesDetail: "Milchverlust + Behandlungskosten",
            potentialGains: "Potenzielle Jahresgewinne",
            gainsDetail: "Mit MilkGenius-Massnahme",
            ctaTitle: "Sie mochten das Gesamtbild sehen?",
            ctaText: "Erhalten Sie Ihren genauen ROI, die Amortisationszeit und die detaillierte Auswertung.",
            ctaButton: "Vollstandige ROI-Berechnung anfordern"
        },
        dsm: {
            results: {
                title: "Detaillierte Analyse"
            },
            sections: {
                ketosisLosses: "Heutige Verluste - Ketose",
                ketosisImpact: "Wirkung mit Massnahme - Ketose",
                saraLosses: "Heutige Verluste - SARA",
                saraImpact: "Wirkung mit Massnahme - SARA"
            },
            fields: {
                annualCkCases: "Jahrliche CK-Falle (Eingabe)",
                annualSckCases: "Jahrliche SCK-Falle (abgeleitet)",
                sckCases0_30: "↳ SCK-Falle 0-30 DIM (80 %)",
                sckCases30_90: "↳ SCK-Falle 30-90 DIM (20 %)",
                milkLoss0_30: "Milchverlust 0-30 DIM",
                milkLoss30_90: "Milchverlust 30-90 DIM",
                fullLactationMilkLoss: "Milchverlust uber die volle Laktation (305 T)",
                sckTreatmentCost: "SCK-Behandlungskosten",
                ckTreatmentCost: "CK-Behandlungskosten",
                totalKetosisLosses: "Gesamte Ketoseverluste",
                avoidedSckCases: "Vermeidete SCK-Falle",
                avoidedCkCases: "Vermeidete CK-Falle",
                milkGainsKg: "Milchgewinn (kg)",
                milkGainsValue: "Wert des Milchgewinns",
                treatmentSavings: "Einsparungen bei Behandlungen",
                annualKetosisBenefit: "Jahrlicher Nutzen durch Ketose",
                effectivePrevalence: "Effektive Pravalenz",
                affectedCows: "Betroffene Kuhe/Tag",
                dailyMilkLossKg: "Taglicher Milchverlust (kg)",
                dailyMilkLossValue: "Wert des taglichen Milchverlusts",
                lactationMilkLoss: "Milchverlust pro Laktation",
                avoidedAffectedCows: "Vermeidete betroffene Kuhe/Tag",
                newPrevalence: "Neue Pravalenz nach Massnahme",
                milkRecoveredDayKg: "Zuruckgewonnene Milch/Tag (kg)",
                milkRecoveredLactationKg: "Zuruckgewonnene Milch/Laktation (kg)",
                annualSaraBenefit: "Jahrlicher SARA-Nutzen",
                deviceCount: "Anzahl der Gerate",
                totalCapex: "Gesamtes CAPEX",
                annualizedCapex: "Jahrlich umgelegtes CAPEX",
                annualSubscription: "Jahresabonnement",
                totalAnnualCost: "Gesamte Jahreskosten",
                totalAnnualBenefit: "Gesamter Jahresnutzen",
                netAnnualBenefit: "Netto-Jahresnutzen",
                roi: "ROI"
            },
            roi: {
                title: "ROI und Amortisation",
                payback: "Amortisationszeit",
                notAvailable: "Nicht verfugbar"
            },
            settings: {
                title: "DSM-Konfiguration",
                note: "Passen Sie die Parameter an die lokale Wirtschaft an",
                ketosisEpi: "Ketose - Epidemiologie und Verlustmodell",
                ketosisTreat: "Ketose - Behandlungskosten",
                ketosisAction: "Ketose - Wirkung des Systems",
                sara: "SARA-Parameter",
                commercial: "Kommerzielle Parameter",
                reset: "Auf Standard zurucksetzen",
                fields: {
                    sckCkMultiplier: "SCK:CK-Multiplikator",
                    sckSplit0_30: "SCK-Aufteilung 0-30 DIM (%)",
                    sckLoss0_30: "SCK-Verlust 0-30 DIM (kg)",
                    dailyLoss30_90: "Taglicher SCK-Verlust 30-90 (kg/Tag)",
                    days30_90: "Tage in der 30-90-Phase",
                    ckLoss305d: "CK-Verlust/Fall (305 T, kg)",
                    sckLoss305d: "SCK-Verlust/Fall (305 T, kg)",
                    sckPgDose: "SCK-PG-Dosis (g/Tag)",
                    sckPgDays: "SCK-Behandlungstage",
                    pgPrice: "PG-Preis (EUR/kg)",
                    laborCost: "Arbeitskosten (EUR/Stunde)",
                    sckLaborMin: "SCK-Arbeit (Min./Tag)",
                    ckPgDose: "CK-PG-Dosis (g/Tag)",
                    ckPgDays: "CK-Behandlungstage",
                    vetCost: "Tierarztkosten (EUR/Stunde)",
                    ckVetMin: "Tierarztzeit CK (Min./Fall)",
                    ckLaborMin: "CK-Arbeit (Min./Tag)",
                    sckReduction: "SCK-Reduktion %",
                    ckReduction: "CK-Reduktion %",
                    saraLow: "Pravalenz niedrig (%)",
                    saraMedium: "Pravalenz mittel (%)",
                    saraHigh: "Pravalenz hoch (%)",
                    milkLossPerCow: "Milchverlust/Kuh/Tag (kg)",
                    lactationDays: "Laktationsdauer (Tage)",
                    saraReduction: "Pravalenzreduktion %",
                    deviceCost: "Geratekosten (EUR)",
                    depreciation: "Abschreibung (Jahre)",
                    subBase1: "Abonnement 1 Gerat (EUR)",
                    subBase2: "Abonnement 2 Gerate (EUR)",
                    subBase3: "Abonnement 3 Gerate (EUR)",
                    subAdditional: "Je zusatzlichem Gerat (EUR)"
                }
            }
        }
    },
    nl: {
        languageSelectorLabel: "Taalkiezer",
        pageTitle: "MilkGenius ROI Calculator - BouMatic",
        pageMainTitle: "MilkGenius ROI Calculator",
        pageSubtitle: "Detectie van ketose en acidose",
        calculatorTitle: "Bereken uw potentiele besparingen",
        calculatorSubtitle: "Schat uw ROI via vroegtijdige detectie van ketose en acidose",
        heroPill: "BouMatic",
        heroSubtitle: "Vroege detectie, betere resultaten.",
        newCalculation: "Nieuwe berekening",
        requestQuote: "Offerte aanvragen",
        footerCopyright: "© 2026 BouMatic LLC. Alle rechten voorbehouden.",
        footerDisclaimer: "Deze calculator geeft schattingen op basis van gemiddelde parameters. Een persoonlijke audit wordt aanbevolen voor een nauwkeurige dimensionering.",
        units: {
            kg: "kg",
            months: "maanden"
        },
        inputs: {
            title: "Bedrijfsinformatie",
            cowCount: "Aantal lacterende koeien",
            cowCountHelp: "Totaal aantal koeien dat momenteel in lactatie is",
            robotBoxes: "Aantal robotboxen",
            robotBoxesHelp: "Aantal melkrobotstations",
            annualCkCases: "Jaarlijkse klinische ketosegevallen (CK)",
            annualCkCasesHelp: "Gediagnosticeerde klinische ketosegevallen per jaar",
            milkPrice: "Melkprijs (EUR/kg)",
            milkPriceHelp: "Gemiddelde prijs per kg melk",
            avgMilkProduction: "Gemiddelde melkproductie (kg/koe/dag)",
            avgMilkProductionHelp: "Dagelijkse gemiddelde productie per koe",
            optionalPremiums: "Optioneel: vet- en eiwitpremie",
            fatPremium: "Vetpremie (EUR/kg vet)",
            fatPremiumHelp: "Extra betaling per kg vet",
            proteinPremium: "Eiwitpremie (EUR/kg eiwit)",
            proteinPremiumHelp: "Extra betaling per kg eiwit",
            premiumNote: "Deze premies worden toegevoegd aan de melkprijs bij de schatting van verliezen en winsten.",
            saraSectionTitle: "SARA-prevalentie",
            saraSectionHelp: "Selecteer het geschatte prevalenieniveau van subacute pensverzuring in uw kudde",
            overridePrevalence: "Of voer een aangepaste prevalentie in %",
            overridePrevalenceHelp: "Laat leeg om het hierboven geselecteerde niveau te gebruiken",
            calculate: "Bereken mijn potentiele besparingen",
            prevalence: {
                low: "Laag",
                lowDesc: "Goed beheerd rantsoen",
                medium: "Gemiddeld",
                mediumDesc: "Typische melkveekudde",
                high: "Hoog",
                highDesc: "Risicokudde"
            }
        },
        results: {
            title: "Uw resultaten",
            todayLosses: "Huidige jaarlijkse verliezen",
            lossesDetail: "Melkverlies + behandelkosten",
            potentialGains: "Potentiele jaarlijkse winst",
            gainsDetail: "Met MilkGenius-actie",
            ctaTitle: "Wilt u het volledige beeld?",
            ctaText: "Ontvang uw exacte ROI, terugverdientijd en de volledige detailanalyse.",
            ctaButton: "Volledige ROI-berekening aanvragen"
        },
        dsm: {
            results: {
                title: "Gedetailleerde analyse"
            },
            sections: {
                ketosisLosses: "Huidige verliezen - Ketose",
                ketosisImpact: "Impact met actie - Ketose",
                saraLosses: "Huidige verliezen - SARA",
                saraImpact: "Impact met actie - SARA"
            },
            fields: {
                annualCkCases: "Jaarlijkse CK-gevallen (invoer)",
                annualSckCases: "Jaarlijkse SCK-gevallen (afgeleid)",
                sckCases0_30: "↳ SCK-gevallen 0-30 DIM (80%)",
                sckCases30_90: "↳ SCK-gevallen 30-90 DIM (20%)",
                milkLoss0_30: "Melkverlies 0-30 DIM",
                milkLoss30_90: "Melkverlies 30-90 DIM",
                fullLactationMilkLoss: "Melkverlies over volledige lactatie (305 d)",
                sckTreatmentCost: "SCK-behandelingskosten",
                ckTreatmentCost: "CK-behandelingskosten",
                totalKetosisLosses: "Totale ketoseverliezen",
                avoidedSckCases: "Vermeden SCK-gevallen",
                avoidedCkCases: "Vermeden CK-gevallen",
                milkGainsKg: "Melkwinst (kg)",
                milkGainsValue: "Waarde van melkwinst",
                treatmentSavings: "Besparing op behandeling",
                annualKetosisBenefit: "Jaarlijks voordeel ketose",
                effectivePrevalence: "Effectieve prevalentie",
                affectedCows: "Getroffen koeien/dag",
                dailyMilkLossKg: "Dagelijks melkverlies (kg)",
                dailyMilkLossValue: "Waarde van dagelijks melkverlies",
                lactationMilkLoss: "Melkverlies per lactatie",
                avoidedAffectedCows: "Vermeden getroffen koeien/dag",
                newPrevalence: "Nieuwe prevalentie na actie",
                milkRecoveredDayKg: "Teruggewonnen melk/dag (kg)",
                milkRecoveredLactationKg: "Teruggewonnen melk/lactatie (kg)",
                annualSaraBenefit: "Jaarlijks SARA-voordeel",
                deviceCount: "Aantal apparaten",
                totalCapex: "Totale CAPEX",
                annualizedCapex: "Geannualiseerde CAPEX",
                annualSubscription: "Jaarabonnement",
                totalAnnualCost: "Totale jaarlijkse kosten",
                totalAnnualBenefit: "Totaal jaarlijks voordeel",
                netAnnualBenefit: "Netto jaarlijks voordeel",
                roi: "ROI"
            },
            roi: {
                title: "ROI en terugverdientijd",
                payback: "Terugverdientijd",
                notAvailable: "Niet beschikbaar"
            },
            settings: {
                title: "DSM-configuratie",
                note: "Pas de parameters aan op basis van de lokale economie",
                ketosisEpi: "Ketose - Epidemiologie en verliesmodel",
                ketosisTreat: "Ketose - Behandelingseconomie",
                ketosisAction: "Ketose - Impact van het systeem",
                sara: "SARA-parameters",
                commercial: "Commerciele parameters",
                reset: "Standaardwaarden herstellen",
                fields: {
                    sckCkMultiplier: "SCK:CK-vermenigvuldiger",
                    sckSplit0_30: "SCK-verdeling 0-30 DIM (%)",
                    sckLoss0_30: "SCK-verlies 0-30 DIM (kg)",
                    dailyLoss30_90: "Dagelijks SCK-verlies 30-90 (kg/dag)",
                    days30_90: "Dagen in de fase 30-90",
                    ckLoss305d: "CK-verlies/geval (305 d, kg)",
                    sckLoss305d: "SCK-verlies/geval (305 d, kg)",
                    sckPgDose: "SCK PG-dosis (g/dag)",
                    sckPgDays: "SCK-behandelingsdagen",
                    pgPrice: "PG-prijs (EUR/kg)",
                    laborCost: "Arbeidskosten (EUR/uur)",
                    sckLaborMin: "SCK-arbeid (min/dag)",
                    ckPgDose: "CK PG-dosis (g/dag)",
                    ckPgDays: "CK-behandelingsdagen",
                    vetCost: "Dierenartskosten (EUR/uur)",
                    ckVetMin: "Dierenartstijd CK (min/geval)",
                    ckLaborMin: "CK-arbeid (min/dag)",
                    sckReduction: "SCK-reductie %",
                    ckReduction: "CK-reductie %",
                    saraLow: "Prevalentie laag (%)",
                    saraMedium: "Prevalentie gemiddeld (%)",
                    saraHigh: "Prevalentie hoog (%)",
                    milkLossPerCow: "Melkverlies/koe/dag (kg)",
                    lactationDays: "Lactatieduur (dagen)",
                    saraReduction: "Prevalentiereductie %",
                    deviceCost: "Apparaatkosten (EUR)",
                    depreciation: "Afschrijving (jaren)",
                    subBase1: "Abonnement 1 apparaat (EUR)",
                    subBase2: "Abonnement 2 apparaten (EUR)",
                    subBase3: "Abonnement 3 apparaten (EUR)",
                    subAdditional: "Per extra apparaat (EUR)"
                }
            }
        }
    }
};

const i18n = {
    currentLanguage: 'en',

    setLanguage(lang) {
        if (!translations[lang]) {
            return;
        }

        this.currentLanguage = lang;
        localStorage.setItem('milkgenius_language', lang);
        this.applyTranslations();
    },

    applyTranslations() {
        document.documentElement.lang = this.currentLanguage;

        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach((el) => {
            const key = el.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            if (translation === null) {
                return;
            }

            el.textContent = translation;
        });

        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        placeholderElements.forEach((el) => {
            const key = el.getAttribute('data-i18n-placeholder');
            const translation = this.getTranslation(key);
            if (translation !== null) {
                el.setAttribute('placeholder', translation);
            }
        });

        const ariaLabelElements = document.querySelectorAll('[data-i18n-aria-label]');
        ariaLabelElements.forEach((el) => {
            const key = el.getAttribute('data-i18n-aria-label');
            const translation = this.getTranslation(key);
            if (translation !== null) {
                el.setAttribute('aria-label', translation);
            }
        });
    },

    getTranslation(key) {
        const keys = key.split('.');
        let value = translations[this.currentLanguage];

        for (const part of keys) {
            if (value && value[part] !== undefined) {
                value = value[part];
            } else {
                value = translations.en;
                for (const fallbackPart of keys) {
                    value = value?.[fallbackPart];
                }
                break;
            }
        }

        return typeof value === 'string' ? value : null;
    },

    t(key) {
        return this.getTranslation(key) || key;
    }
};

if (typeof window !== 'undefined') {
    window.i18n = i18n;
    window.translations = translations;
}
