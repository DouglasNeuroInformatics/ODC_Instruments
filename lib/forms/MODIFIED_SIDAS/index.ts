import { defineInstrument } from '/runtime/v1/@opendatacapture/runtime-core';
import { sum } from '/runtime/v1/lodash-es@4.x';
import { z } from '/runtime/v1/zod@3.x';

const $Response = z.number().int().min(0).max(4);

export default defineInstrument({
  kind: 'FORM',
  language: ['en', 'fr'],
  tags: {
    en: ['Suicide', 'Mental Health', 'Risk'],
    fr: ['Suicide', 'Santé mentale', 'Risque']
  },
  internal: {
    edition: 1,
    name: 'MODIFIED_SIDAS'
  },
  clientDetails: {
    estimatedDuration: 2,
    instructions: {
      en: [
        'The following items ask about suicidal thoughts and behaviors. For each item, circle the number for the answer that best describes your experience over the past week.'
      ],
      fr: [
        'Les questions suivantes portent sur les pensées et les comportements suicidaires. Pour chaque question, entourez le chiffre correspondant à la réponse qui décrit le mieux votre expérience au cours de la semaine écoulée.'
      ]
    },
    title: {
      en: 'Suicidal Ideation Attributes Scale (Adapted)',
      fr: 'Suicidal Ideation Attributes Scale (Adaptée)'
    }
  },
  details: {
    title: {
      en: 'Suicidal Ideation Attributes Scale (Adapted)',
      fr: 'Suicidal Ideation Attributes Scale (Adaptée)'
    },
    description: {
      en: 'A 5-item scale assessing suicidal ideation attributes over the past week.',
      fr: 'Une échelle en 5 items évaluant les attributs de l’idéation suicidaire au cours de la semaine écoulée.'
    },
    license: 'FREE-NOS',
    referenceUrl: 'https://nceph.anu.edu.au/research/tools-resources/suicidal-ideation-attributes-scale-sidas'
  },
  content: {
    frequencyThoughts: {
      kind: 'number',
      label: {
        en: '1. In the past week, how often have you had thoughts about suicide?',
        fr: '1. Au cours de la semaine écoulée, à quelle fréquence avez-vous eu des pensées suicidaires ?'
      },
      options: {
        en: {
          0: 'None',
          1: 'Infrequent',
          2: 'Occasional',
          3: 'Frequent',
          4: 'All the time'
        },
        fr: {
          0: 'Aucune',
          1: 'Rarement',
          2: 'Occasionnellement',
          3: 'Fréquemment',
          4: 'Tout le temps'
        }
      },
      variant: 'radio'
    },
    controlThoughts: {
      kind: 'number',
      label: {
        en: '2. In the past week, how much control have you had over these thoughts?',
        fr: '2. Au cours de la semaine écoulée, dans quelle mesure avez-vous pu contrôler ces pensées ?'
      },
      options: {
        en: {
          0: 'Full control over these thoughts',
          1: 'Mostly I could control these thoughts',
          2: 'I could control these thoughts only sometimes',
          3: 'I could rarely control these thoughts',
          4: 'No or little control on these thoughts'
        },
        fr: {
          0: 'Contrôle total de ces pensées',
          1: 'J’ai pu contrôler ces pensées la plupart du temps',
          2: 'Je n’ai pu contrôler ces pensées que parfois',
          3: 'Je pouvais rarement contrôler ces pensées',
          4: 'Je ne contrôlais pas ou peu ces pensées'
        }
      },
      variant: 'radio'
    },
    attemptCloseness: {
      kind: 'number',
      label: {
        en: '3. In the past week, how close have you come to making a suicide attempt?',
        fr: "3. Au cours de la semaine écoulée, à quel point avez-vous été proche de passer à l'acte ?"
      },
      options: {
        en: {
          0: 'Not close at all',
          1: 'Crossed my mind',
          2: 'Consider it',
          3: 'Seriously consider it',
          4: 'I made a suicide attempt'
        },
        fr: {
          0: 'Pas du tout',
          1: 'J’y ai pensé',
          2: 'J’y ai réfléchi',
          3: 'J’y ai sérieusement réfléchi',
          4: 'J’ai fait une tentative de suicide'
        }
      },
      variant: 'radio'
    },
    tormentExtent: {
      kind: 'number',
      label: {
        en: '4. In the past week, to what extent have you felt tormented by thoughts about suicide?',
        fr: '4. Au cours de la semaine écoulée, dans quelle mesure avez-vous été tourmenté(e) par des pensées suicidaires ?'
      },
      options: {
        en: {
          0: 'Not at all',
          1: 'A little bit',
          2: 'Moderately',
          3: 'A lot',
          4: 'Extremely'
        },
        fr: {
          0: 'Pas du tout',
          1: 'Un peu',
          2: 'Modérément',
          3: 'Beaucoup',
          4: 'Extrêmement'
        }
      },
      variant: 'radio'
    },
    interference: {
      kind: 'number',
      label: {
        en: '5. In the past week, how much have thoughts about suicide interfered with your ability to carry out daily activities, such as work, household tasks or social activities?',
        fr: '5. Au cours de la semaine dernière, dans quelle mesure les pensées suicidaires ont-elles perturbé votre capacité à mener à bien vos activités quotidiennes, telles que le travail, les tâches ménagères ou les activités sociales ?'
      },
      options: {
        en: {
          0: 'Not at all',
          1: 'A little bit',
          2: 'Moderately',
          3: 'A lot',
          4: 'Extremely'
        },
        fr: {
          0: 'Pas du tout',
          1: 'Un peu',
          2: 'Modérément',
          3: 'Beaucoup',
          4: 'Extrêmement'
        }
      },
      variant: 'radio'
    }
  },
  measures: {
    frequencyThoughts: {
      kind: 'computed',
      label: {
        en: 'Frequency of suicidal thoughts',
        fr: 'Fréquence des pensées suicidaires'
      },
      value: ({ frequencyThoughts }) => frequencyThoughts
    },
    controlThoughts: {
      kind: 'computed',
      label: {
        en: 'Control over thoughts',
        fr: 'Contrôle des pensées'
      },
      value: ({ controlThoughts }) => controlThoughts
    },
    attemptCloseness: {
      kind: 'computed',
      label: {
        en: 'Closeness to attempt',
        fr: 'Proximité d’un passage à l’acte'
      },
      value: ({ attemptCloseness }) => attemptCloseness
    },
    tormentExtent: {
      kind: 'computed',
      label: {
        en: 'Torment by thoughts',
        fr: 'Tourmenté par les pensées'
      },
      value: ({ tormentExtent }) => tormentExtent
    },
    interference: {
      kind: 'computed',
      label: {
        en: 'Interference with activities',
        fr: 'Perturbation des activités'
      },
      value: ({ interference }) => interference
    },
    totalScore: {
      kind: 'computed',
      label: {
        en: 'Total score',
        fr: 'Score total'
      },
      value: (data) => sum(Object.values(data))
    }
  },
  validationSchema: z.object({
    frequencyThoughts: $Response,
    controlThoughts: $Response,
    attemptCloseness: $Response,
    tormentExtent: $Response,
    interference: $Response
  })
});
