import { defineInstrument } from '/runtime/v1/@opendatacapture/runtime-core';
import { z } from '/runtime/v1/zod@3.x/v4';

import simpleRTGif from './_SimpleRT.webp';
import html from './fragment.html';
import { render } from './render.js';

import './TestMyBrain.12.18.min.js?legacy';
import './chooseInput.v1.Apr23.js?legacy';
import './TestHelper.v1.May23.js?legacy';
import './styles.css';

const staticAssets = {
  '/SimpleRT.gif': simpleRTGif
};

export default defineInstrument({
  kind: 'INTERACTIVE',
  language: 'en',
  tags: ['TestMyBrain'],
  internal: {
    edition: 1,
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
    staticAssets
  },
  clientDetails: {
    estimatedDuration: 1,
    instructions: ['Instructions will be presented on screen in the task.']
  },
  details: {
    description: '',
    license: 'LGPL-3.0',
    title: 'Fast Reactions'
  },
  measures: {
    responseDevice: {
      kind: 'computed',
      label: 'Response Device',
      value: (data) => data.outcomes.responseDevice
    },
    score: {
      kind: 'computed',
      label: 'Score',
      value: (data) => data.outcomes.score
    },
    meanRT: {
      kind: 'computed',
      label: 'Reaction Time (Mean)',
      value: (data) => data.outcomes.meanRT
    },
    medianRT: {
      kind: 'computed',
      label: 'Reaction Time (Median)',
      value: (data) => data.outcomes.medianRT
    },
    sdRT: {
      kind: 'computed',
      label: 'Reaction Time (SD)',
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
