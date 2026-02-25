import { defineInstrument } from '/runtime/v1/@opendatacapture/runtime-core';
import { sum } from '/runtime/v1/lodash-es@4.x';
import { z } from '/runtime/v1/zod@3.x';

const $Response = z.number().int().min(0).max(10);
const $OptionalResponse = $Response.optional();

export default defineInstrument({
  kind: 'FORM',
  language: ['en', 'fr'],
  tags: {
    en: ['Suicide', 'Mental Health', 'Risk'],
    fr: ['Suicide', 'Santé mentale', 'Risque']
  },
  internal: {
    edition: 1,
    name: 'SIDAS'
  },
  clientDetails: {
    estimatedDuration: 2,
    instructions: {
      en: ['Please answer each question by selecting a number from 0 to 10.'],
      fr: ['Veuillez répondre à chaque question en sélectionnant un chiffre de 0 à 10.']
    },
    title: {
      en: 'Suicidal Ideation Attributes Scale',
      fr: 'Suicidal Ideation Attributes Scale'
    }
  },
  details: {
    title: {
      en: 'Suicidal Ideation Attributes Scale',
      fr: 'Suicidal Ideation Attributes Scale'
    },
    description: {
      en: 'A 5-item scale designed to screen individuals for the presence of suicidal thoughts and assess their severity, measuring frequency, controllability, closeness to attempt, distress, and impact on daily functioning.',
      fr: "Une échelle en 5 items conçue pour dépister les pensées suicidaires et en évaluer la sévérité, mesurant la fréquence, la maîtrise, la proximité d'une tentative, la détresse et l'impact sur le fonctionnement quotidien."
    },
    license: 'FREE-NOS',
    referenceUrl: 'https://nceph.anu.edu.au/research/tools-resources/suicidal-ideation-attributes-scale-sidas',
    authors: ['Van Spijker BAJ', 'Batterham PJ', 'Calear AL', 'Farrer L', 'Christensen H', 'Reynolds J', 'Kerkhof AJFM']
  },
  content: {
    frequencyThoughts: {
      kind: 'number',
      label: {
        en: '1. In the past month, how often have you had thoughts about suicide?',
        fr: '1. Au cours du mois écoulé, à quelle fréquence avez-vous eu des pensées suicidaires ?'
      },
      description: {
        en: '0 = Never, 10 = Always',
        fr: '0 = Jamais, 10 = Toujours'
      },
      variant: 'slider',
      min: 0,
      max: 10
    },
    controlThoughts: {
      kind: 'dynamic',
      deps: ['frequencyThoughts'],
      render(data) {
        if (!data.frequencyThoughts) {
          return null;
        }
        return {
          kind: 'number',
          label: {
            en: '2. In the past month, how much control have you had over these thoughts?',
            fr: '2. Au cours du mois écoulé, dans quelle mesure avez-vous pu contrôler ces pensées ?'
          },
          description: {
            en: '0 = No control, 10 = Full control',
            fr: '0 = Aucun contrôle, 10 = Contrôle total'
          },
          variant: 'slider',
          min: 0,
          max: 10
        };
      }
    },
    attemptCloseness: {
      kind: 'dynamic',
      deps: ['frequencyThoughts'],
      render(data) {
        if (!data.frequencyThoughts) {
          return null;
        }
        return {
          kind: 'number',
          label: {
            en: '3. In the past month, how close have you come to making a suicide attempt?',
            fr: '3. Au cours du mois écoulé, à quel point vous êtes-vous rapproché(e) de faire une tentative de suicide ?'
          },
          description: {
            en: '0 = Not close at all, 10 = Made an attempt',
            fr: "0 = Pas du tout proche, 10 = J'ai fait une tentative"
          },
          variant: 'slider',
          min: 0,
          max: 10
        };
      }
    },
    tormentExtent: {
      kind: 'dynamic',
      deps: ['frequencyThoughts'],
      render(data) {
        if (!data.frequencyThoughts) {
          return null;
        }
        return {
          kind: 'number',
          label: {
            en: '4. In the past month, to what extent have you felt tormented by thoughts about suicide?',
            fr: '4. Au cours du mois écoulé, dans quelle mesure vous êtes-vous senti(e) tourmenté(e) par des pensées suicidaires ?'
          },
          description: {
            en: '0 = Not at all, 10 = Extremely',
            fr: '0 = Pas du tout, 10 = Extrêmement'
          },
          variant: 'slider',
          min: 0,
          max: 10
        };
      }
    },
    interference: {
      kind: 'dynamic',
      deps: ['frequencyThoughts'],
      render(data) {
        if (!data.frequencyThoughts) {
          return null;
        }
        return {
          kind: 'number',
          label: {
            en: '5. In the past month, how much have thoughts about suicide interfered with your ability to carry out daily activities, such as work, household tasks or social activities?',
            fr: '5. Au cours du mois écoulé, dans quelle mesure les pensées suicidaires ont-elles nui à votre capacité à mener vos activités quotidiennes, telles que le travail, les tâches ménagères ou les activités sociales ?'
          },
          description: {
            en: '0 = Not at all, 10 = Extremely',
            fr: '0 = Pas du tout, 10 = Extrêmement'
          },
          variant: 'slider',
          min: 0,
          max: 10
        };
      }
    }
  },
  measures: {
    frequencyThoughts: {
      kind: 'const',
      ref: 'frequencyThoughts',
      label: {
        en: 'Frequency of suicidal thoughts',
        fr: 'Fréquence des pensées suicidaires'
      }
    },
    controlThoughts: {
      kind: 'computed',
      label: {
        en: 'Control over thoughts (raw)',
        fr: 'Contrôle des pensées (brut)'
      },
      value: ({ controlThoughts }) => controlThoughts ?? 0
    },
    attemptCloseness: {
      kind: 'computed',
      label: {
        en: 'Closeness to attempt',
        fr: "Proximité d'une tentative"
      },
      value: ({ attemptCloseness }) => attemptCloseness ?? 0
    },
    tormentExtent: {
      kind: 'computed',
      label: {
        en: 'Torment by thoughts',
        fr: 'Tourment par les pensées'
      },
      value: ({ tormentExtent }) => tormentExtent ?? 0
    },
    interference: {
      kind: 'computed',
      label: {
        en: 'Interference with daily activities',
        fr: 'Perturbation des activités quotidiennes'
      },
      value: ({ interference }) => interference ?? 0
    },
    totalScore: {
      kind: 'computed',
      label: {
        en: 'Total Score',
        fr: 'Score total'
      },
      value: ({ controlThoughts, frequencyThoughts, ...data }) => {
        if (frequencyThoughts === 0) {
          return 0;
        }
        return sum([frequencyThoughts, controlThoughts! - 10, ...Object.values(data)]);
      }
    }
  },
  validationSchema: z
    .object({
      frequencyThoughts: $Response,
      controlThoughts: $OptionalResponse,
      attemptCloseness: $OptionalResponse,
      tormentExtent: $OptionalResponse,
      interference: $OptionalResponse
    })
    .superRefine((data, ctx) => {
      if (data.frequencyThoughts > 0) {
        const conditionalFields = ['controlThoughts', 'attemptCloseness', 'tormentExtent', 'interference'] as const;
        for (const field of conditionalFields) {
          if (data[field] === undefined) {
            ctx.addIssue({
              code: 'custom',
              path: [field],
              message: 'This field is required. / Ce champ est obligatoire.'
            });
          }
        }
      }
    })
});
