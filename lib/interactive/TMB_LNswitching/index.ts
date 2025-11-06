import { defineInstrument } from '/runtime/v1/@opendatacapture/runtime-core';
import { z } from '/runtime/v1/zod@3.x/v4';

import fingerImg from './_finger.webp';
import inst0Img from './_Inst0.webp';
import inst1Img from './_Inst1.webp';
import inst2Img from './_Inst2.webp';
import inst3Img from './_Inst3.webp';
import inst4Img from './_Inst4.webp';
import letterInstImg from './_letterInst.webp';
import letterInstClickImg from './_letterInst_click.webp';
import numberInstImg from './_numberInst.webp';
import numberInstClickImg from './_numberInst_click.webp';
import html from './fragment.html';
import { render } from './render.js';

import './TestMyBrain.12.18.min.js?legacy';
import './TestHelper.v1.May23.js?legacy';
import './styles.css';

const staticAssets = {
  '/images/Inst0.jpg': inst0Img,
  '/images/Inst1.jpg': inst1Img,
  '/images/Inst2.jpg': inst2Img,
  '/images/Inst3.jpg': inst3Img,
  '/images/Inst4.jpg': inst4Img,
  '/images/finger.png': fingerImg,
  '/images/numberInst.jpg': numberInstImg,
  '/images/numberInst_click.jpg': numberInstClickImg,
  '/images/letterInst.jpg': letterInstImg,
  '/images/letterInst_click.jpg': letterInstClickImg
};

export default defineInstrument({
  kind: 'INTERACTIVE',
  language: 'en',
  tags: ['TestMyBrain'],
  internal: {
    edition: 1,
    name: 'TMB_LNswitching'
  },
  content: {
    meta: {
      charset: 'UTF-8',
      description: 'TMB Letter/Number Switching',
      copyright: '2023 The Many Brains Project, Inc. and McLean Hospital LGPLv3',
      keywords: 'cognitive test, brain test, task switching',
      viewport: 'width=device-width, initial-scale=1',
      'apple-mobile-web-app-capable': 'yes',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-title': 'TMB LN-Switching',
      'theme-color': 'white'
    },
    html,
    render,
    staticAssets
  },
  clientDetails: {
    estimatedDuration: 1,
    instructions: ['<PLACEHOLDER>']
  },
  details: {
    description: '',
    license: 'LGPL-3.0',
    title: 'Letter/Number Switching'
  },
  measures: {},
  validationSchema: z
    .object({
      accuracy: z.number(),
      meanRTc: z.number(),
      medianRTc: z.number(),
      sdRTc: z.number(),
      responseDevice: z.string(),
      testVersion: z.string(),
      conflictAccuracy: z.number(),
      conflictMeanRTc: z.number(),
      conflictMedianRTc: z.number(),
      conflictSDRTc: z.number(),
      noConflictAccuracy: z.number(),
      noConflictMeanRTc: z.number(),
      noConflictMedianRTc: z.number(),
      noConflictSDRTc: z.number(),
      conflictAccuracyCost: z.number(),
      conflictRtCost: z.number(),
      score: z.number(),
      type: z.string()
    })
    .partial()
});
