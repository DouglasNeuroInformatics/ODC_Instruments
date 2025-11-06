import { defineInstrument } from '/runtime/v1/@opendatacapture/runtime-core';
import { z } from '/runtime/v1/zod@3.23.x';

const $Item = z.number().int().min(0).max(3);

export default defineInstrument({
  kind: 'FORM',
  language: ['en', 'fr'],
  tags: {
    en: ['Insomnia', 'Sleep'],
    fr: ['Insomnie', 'Sommeil']
  },
  internal: {
    edition: 1,
    name: 'ATHENS_INSOMNIA_SCALE'
  },
  clientDetails: {
    estimatedDuration: 10
  },
  content: [
    {
      description: {
        en: 'This scale is intended to record your own assessment of any sleep difficulty you might have experienced.',
        fr: 'Cette échelle est destinée à noter votre propre évaluation des difficultés de sommeil que vous auriez pu avoir éprouvé.'
      },
      fields: {
        sleepInduction: {
          kind: 'number',
          label: {
            en: 'Sleep induction (time it takes you to fall asleep after turning-off the lights)',
            fr: "L'induction du sommeil (le temps nécessaire pour vous endormir après avoir éteint la lumière)"
          },
          options: {
            en: {
              0: 'No problems',
              1: 'Slightly delayed',
              2: 'Marked delayed',
              3: 'Very delayed or did not sleep at all'
            },
            fr: {
              0: 'Pas de problème',
              1: 'Un peu retardée',
              2: 'Considérablement retardée',
              3: 'Très retardée ou ne pas avoir dormi du tout'
            }
          },
          variant: 'radio'
        },
        awakeningsDuringNight: {
          kind: 'number',
          label: {
            en: 'Awakenings during the night',
            fr: 'Le réveil au milieu de la nuit'
          },
          options: {
            en: {
              0: 'No problem',
              1: 'Minor problem',
              2: 'Considerable problem',
              3: 'Serious problem or did not sleep at all'
            },
            fr: {
              0: 'Pas de problème',
              1: 'Un problème mineur',
              2: 'Un problème considérable',
              3: 'Un problème sérieux ou ne pas avoir dormi du tout'
            }
          },
          variant: 'radio'
        },
        finalAwakeningEarlierThanDesired: {
          kind: 'number',
          label: {
            en: 'Final awakening earlier than desired',
            fr: 'Le réveil final vient plus tôt que vous le souhaitez'
          },
          options: {
            en: {
              0: 'Not earlier',
              1: 'A little earlier',
              2: 'Markedly earlier',
              3: 'Much earlier or did not sleep at all'
            },
            fr: {
              0: 'Pas plus tôt',
              1: 'Un peu plus tôt',
              2: 'Considérablement plus tôt',
              3: 'Beaucoup plus tôt ou ne pas avoir dormi du tout'
            }
          },
          variant: 'radio'
        },
        sleepDuration: {
          kind: 'number',
          label: {
            en: 'Total sleep duration',
            fr: 'La durée totale du sommeil'
          },
          options: {
            en: {
              0: 'Sufficient',
              1: 'Slightly insufficient',
              2: 'Markedly insufficient',
              3: 'Very insufficient or did not sleep at all'
            },
            fr: {
              0: 'Suffisante',
              1: 'Un peu insuffisante',
              2: 'Considérablement insuffisante',
              3: 'Très insuffisante ou ne pas avoir dormi du tout'
            }
          },
          variant: 'radio'
        },
        sleepQuality: {
          kind: 'number',
          label: {
            en: 'Overall quality of sleep (no matter how long you slept)',
            fr: 'La qualité du sommeil (peu importe combien de temps vous avez dormi)'
          },
          options: {
            en: {
              0: 'Satisfactory',
              1: 'Slightly unsatisfactory',
              2: 'Markedly unsatisfactory',
              3: 'Very unsatisfactory or did not sleep at all'
            },
            fr: {
              0: 'Satisfaisante',
              1: 'Un peu insatisfaisante',
              2: 'Considérablement insatisfaisante',
              3: 'Très insatisfaisante ou ne pas avoir dormi du tout'
            }
          },
          variant: 'radio'
        },
        daytimeWellbeing: {
          kind: 'number',
          label: {
            en: 'Sense of well-being during the day',
            fr: 'Votre bien-être au cours de la journée'
          },
          options: {
            en: {
              0: 'Normal',
              1: 'Slightly decreased',
              2: 'Marked decreased',
              3: 'Very decreased'
            },
            fr: {
              0: 'Normal',
              1: 'A diminué un peu',
              2: 'A considérablement diminué',
              3: 'A beaucoup diminué'
            }
          },
          variant: 'radio'
        },
        daytimeFunctioning: {
          kind: 'number',
          label: {
            en: 'Functioning (physical and mental) during the day',
            fr: 'Le fonctionnement (physique et psychique) au cours de la journée'
          },
          options: {
            en: {
              0: 'Normal',
              1: 'Slightly decreased',
              2: 'Markedly decreased',
              3: 'Very decreased'
            },
            fr: {
              0: 'Normal',
              1: 'A diminué un peu',
              2: 'A considérablement diminué',
              3: 'A beaucoup diminué'
            }
          },
          variant: 'radio'
        },
        daytimeSleepiness: {
          kind: 'number',
          label: {
            en: 'Sleepiness during the day',
            fr: "L'envie de dormir pendant la journée"
          },
          options: {
            en: {
              0: 'None',
              1: 'Mild',
              2: 'Considerable',
              3: 'Intense'
            },
            fr: {
              0: 'Pas du tout',
              1: 'Un peu',
              2: 'Considérable',
              3: 'Forte'
            }
          },
          variant: 'radio'
        }
      }
    }
  ],
  details: {
    description: {
      en: 'This scale is intended to record your own assessment of any sleep difficulty you might have experienced. Please, check (by clicking the appropriate number) the items below to indicate your estimate of any difficulty, provided that it occurred at least three times per week during the last month.',
      fr: "Cette échelle est destinée à noter votre propre évaluation des difficultés de sommeil que vous auriez pu avoir éprouvé. Veuillez choisir (en encerclant le numéro approprié) un des énoncés ci-dessous qui décrit le mieux votre évaluation de chaque difficulté, pourvu que vous l'aviez épouvé au moins trois fois par semaine au cours du mois passé."
    },
    license: 'CC-BY-NC-4.0',
    title: {
      en: 'Athens Insomnia Scale',
      fr: "Échelle d'insomnie d'Athènes"
    }
  },
  measures: {},
  validationSchema: z.object({
    sleepInduction: $Item,
    awakeningsDuringNight: $Item,
    finalAwakeningEarlierThanDesired: $Item,
    sleepDuration: $Item,
    sleepQuality: $Item,
    daytimeWellbeing: $Item,
    daytimeFunctioning: $Item,
    daytimeSleepiness: $Item
  })
});
