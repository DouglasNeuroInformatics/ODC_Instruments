import { defineInstrument } from '/runtime/v1/@opendatacapture/runtime-core';
import { z } from '/runtime/v1/zod@3.x/v4';

import blackImg from './_black.webp';
import happyGreenImg from './_happy-green-border.webp';
import motGif from './_MOT.webp';
import sadRedImg from './_sad-red-border.webp';
import html from './fragment.html';
import { render } from './render.js';

import './snap.0.5.1.min.js?legacy';
import './TestMyBrain.12.18.min.js?legacy';
import './TestHelper.v1.May23.js?legacy';
import './styles.css';

const staticAssets = {
  '/black.jpg': blackImg,
  '/sad-red-border.jpg': sadRedImg,
  '/happy-green-border.jpg': happyGreenImg,
  '/MOT.gif': motGif
};

export default defineInstrument({
  kind: 'INTERACTIVE',
  language: ['en', 'fr'],
  tags: {
    en: ['TestMyBrain'],
    fr: ['TestMyBrain']
  },
  internal: {
    edition: 4,
    name: 'TMB_MOT'
  },
  content: {
    meta: {
      charset: 'UTF-8',
      description: 'TMB Multiple Object Tracking',
      copyright: '2023 The Many Brains Project, Inc. and McLean Hospital LGPLv3',
      author: 'Paolo Martini, Roger Strong',
      keywords: 'cognitive test, brain test',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=contain',
      'apple-mobile-web-app-capable': 'yes',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-title': 'MOT test',
      'theme-color': 'white'
    },
    render,
    html,
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
      en: 'An attention task that measures the ability to track multiple moving objects simultaneously.',
      fr: 'Une tâche attentionnelle qui mesure la capacité à suivre simultanément plusieurs objets en mouvement.'
    },
    license: 'LGPL-3.0',
    title: {
      en: 'TMB Multiple Object Tracking',
      fr: 'TMB Suivi d’objets multiples'
    }
  },
  measures: {},
  // `done` receives the trials followed by one summary entry. A trial that times out is still
  // recorded, with a state of 'timeout' and zero hits, and is then repeated.
  validationSchema: z
    .array(
      z.discriminatedUnion('type', [
        z.object({
          type: z.enum(['practice', 'test']),
          hits: z.number(),
          rt: z.number(),
          numTargets: z.number(),
          numdots: z.number(),
          speed: z.number(),
          noise: z.number(),
          duration: z.number(),
          frametime: z.number(),
          state: z.string(),
          seed: z.string()
        }),
        z.object({
          type: z.literal('summaryScores'),
          score: z.number(),
          correct: z.number(),
          rtTotal: z.number(),
          medianFrametime: z.number(),
          medianDuration: z.number()
        })
      ])
    )
    .refine(
      (results) =>
        results.filter((result) => result.type === 'summaryScores').length === 1 &&
        results[results.length - 1]?.type === 'summaryScores',
      { message: 'The results must end with exactly one summary entry' }
    )
});
