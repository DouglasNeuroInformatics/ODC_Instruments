import { defineInstrument } from '/runtime/v1/@opendatacapture/runtime-core';
import { z } from '/runtime/v1/zod@3.x/v4';

import fingerLeft from './fingerLeft.png';
import fingerRight from './fingerRight.png';
import fingerUp from './fingerUp.png';
import html from './fragment.html';
import leftButton from './leftButton.png';
import pressMIcon from './pressM_icon.png';
import pressXIcon from './pressX_icon.png';
import { render } from './render.js';
import rightButton from './rightButton.png';

import './TestMyBrain.12.18.min.js?legacy';
import './chooseInput.v1.Feb24.js?legacy';
import './TestHelper.v1.Oct23.js?legacy';
import './styles.css';

const staticAssets = {
  '/fingerUp.png': fingerUp,
  '/fingerLeft.png': fingerLeft,
  '/fingerRight.png': fingerRight,
  '/leftButton.png': leftButton,
  '/rightButton.png': rightButton,
  '/pressM_icon.png': pressMIcon,
  '/pressX_icon.png': pressXIcon
};

export default defineInstrument({
  kind: 'INTERACTIVE',
  language: ['en', 'fr'],
  tags: {
    en: ['TestMyBrain'],
    fr: ['TestMyBrain']
  },
  internal: {
    edition: 2,
    name: 'TMB_FLANKER_ATTENTION'
  },
  content: {
    meta: {
      charset: 'UTF-8',
      description: 'TMB Flanker Attention',
      copyright: '2024 The Many Brains Project, Inc. and McLean Hospital LGPLv3',
      keywords: 'cognitive test, brain test, flanker, attention',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=contain',
      'apple-mobile-web-app-capable': 'yes',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-title': 'TMB Flanker',
      'theme-color': 'white'
    },
    html,
    render,
    staticAssets,
    defaultFullscreen: true,
    enableLanguageLock: true,
    enableLanguageSelect: true
  },
  clientDetails: {
    estimatedDuration: 5,
    instructions: {
      en: ['Instructions will be presented on screen in the task.'],
      fr: ["Les instructions seront présentées à l'écran pendant la tâche."]
    }
  },
  details: {
    description: {
      en: 'A cognitive test that measures selective attention and response inhibition by requiring the participant to indicate the direction of a central arrow while ignoring flanking arrows.',
      fr: "Un test cognitif qui évalue l'attention sélective et l'inhibition de la réponse en demandant au participant d'indiquer la direction d'une flèche centrale tout en ignorant les flèches qui l'entourent."
    },
    license: 'LGPL-3.0',
    title: {
      en: 'TMB Flanker Attention',
      fr: 'TMB Attention Flanker'
    }
  },
  measures: {
    score: {
      kind: 'computed',
      label: { en: 'Score', fr: 'Score' },
      value: (data) => data.outcomes.score
    },
    accuracy: {
      kind: 'computed',
      label: { en: 'Accuracy', fr: 'Précision' },
      value: (data) => data.outcomes.accuracy
    },
    medianRTc: {
      kind: 'computed',
      label: { en: 'Reaction Time (Median, Correct)', fr: 'Temps de réaction (médiane, correct)' },
      value: (data) => data.outcomes.medianRTc ?? undefined
    },
    medianRT_interference: {
      kind: 'computed',
      label: { en: 'Interference (Median RT)', fr: 'Interférence (temps de réaction médian)' },
      value: (data) => data.outcomes.medianRT_interference
    },
    accuracy_interference: {
      kind: 'computed',
      label: { en: 'Interference (Accuracy)', fr: 'Interférence (précision)' },
      value: (data) => data.outcomes.accuracy_interference
    },
    rcs_interference: {
      kind: 'computed',
      label: { en: 'Interference (Rate Correct Score)', fr: 'Interférence (score de taux correct)' },
      value: (data) => data.outcomes.rcs_interference
    },
    responseDevice: {
      kind: 'computed',
      label: { en: 'Response Device', fr: 'Dispositif de réponse' },
      value: (data) => data.outcomes.responseDevice
    }
  },
  validationSchema: z.object({
    results: z.array(
      z.object({
        trialId: z.string().nullable(),
        trialType: z.string(),
        trialBlock: z.string(),
        target: z.string(),
        flankers: z.string(),
        congruent: z.number(),
        response: z.string().nullable(),
        correct: z.number().nullable(),
        rt: z.number().nullable(),
        flagged: z.number().nullable(),
        repeated: z.number(),
        state: z.string(),
        timestamp: z.number()
      })
    ),
    outcomes: z.object({
      accuracy: z.number(),
      meanRTc: z.number().nullable(),
      medianRTc: z.number().nullable(),
      sdRTc: z.number().nullable(),
      medianRT_congruent: z.number(),
      medianRT_incongruent: z.number(),
      accuracy_congruent: z.number(),
      accuracy_incongruent: z.number(),
      rcs_congruent: z.number(),
      rcs_incongruent: z.number(),
      accuracy_interference: z.number(),
      medianRT_interference: z.number(),
      rcs_interference: z.number(),
      flag_medianRTc: z.number(),
      flag_accuracy: z.number(),
      flag_trialFlags: z.number(),
      flag_any: z.number(),
      didPracticeTrials: z.number(),
      score: z.number(),
      responseDevice: z.string(),
      testVersion: z.string(),
      type: z.string()
    })
  })
});
