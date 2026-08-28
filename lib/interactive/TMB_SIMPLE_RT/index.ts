import { defineInstrument } from '/runtime/v1/@opendatacapture/runtime-core';
import { z } from '/runtime/v1/zod@3.x/v4';

import simpleRTGifEn from './_SimpleRT_EN.webp';
import simpleRTGifFr from './_SimpleRT_FR.webp';
import html from './fragment.html';
import { render } from './render.js';

import './TestMyBrain.12.18.min.js?legacy';
import './chooseInput.v1.Apr23.js?legacy';
import './TestHelper.v1.May23.js?legacy';
import './styles.css';

const staticAssets = {
  '/SimpleRT_EN.gif': simpleRTGifEn,
  '/SimpleRT_FR.gif': simpleRTGifFr
};

export default defineInstrument({
  kind: 'INTERACTIVE',
  language: ['en', 'fr'],
  tags: {
    en: ['TestMyBrain'],
    fr: ['TestMyBrain']
  },
  internal: {
    edition: 3,
    name: 'TMB_SIMPLE_RT'
  },
  content: {
    meta: {
      charset: 'UTF-8',
      description: 'TMB Simple Reaction Time',
      copyright: '2023 The Many Brains Project, Inc. and McLean Hospital LGPLv3',
      keywords: 'cognitive test, brain test, simple reaction time',
      viewport: 'width=device-width, initial-scale=1',
      'apple-mobile-web-app-capable': 'yes',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-title': 'TMB SRT',
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
    estimatedDuration: 1,
    instructions: {
      en: ['Instructions will be presented on screen in the task.'],
      fr: ["Les instructions seront présentées à l'écran pendant la tâche."]
    }
  },
  details: {
    description: {
      en: 'A simple reaction time test that measures how quickly participants respond to visual stimuli.',
      fr: 'Un test de temps de réaction simple qui mesure la rapidité avec laquelle les participants réagissent à un stimulus visuel.'
    },
    license: 'LGPL-3.0',
    title: {
      en: 'Fast Reactions',
      fr: 'Réactions rapides'
    }
  },
  measures: {
    responseDevice: {
      kind: 'computed',
      label: { en: 'Response Device', fr: 'Dispositif de réponse' },
      value: (data) => data.outcomes.responseDevice
    },
    score: {
      kind: 'computed',
      label: { en: 'Score', fr: 'Score' },
      value: (data) => data.outcomes.score
    },
    meanRT: {
      kind: 'computed',
      label: { en: 'Reaction Time (Mean)', fr: 'Temps de réaction (moyenne)' },
      value: (data) => data.outcomes.meanRT
    },
    medianRT: {
      kind: 'computed',
      label: { en: 'Reaction Time (Median)', fr: 'Temps de réaction (médiane)' },
      value: (data) => data.outcomes.medianRT
    },
    sdRT: {
      kind: 'computed',
      label: { en: 'Reaction Time (SD)', fr: 'Temps de réaction (écart-type)' },
      value: (data) => data.outcomes.sdRT
    }
  },
  validationSchema: z.object({
    outcomes: z.object({
      score: z.number(),
      meanRT: z.number(),
      medianRT: z.number(),
      sdRT: z.number(),
      responseDevice: z.string(),
      testVersion: z.string(),
      type: z.string()
    }),
    results: z.array(
      z.object({
        type: z.string(),
        foreperiod: z.number(),
        response: z.string(),
        rt: z.number(),
        dwell: z.number(),
        state: z.string()
      })
    )
  })
});
