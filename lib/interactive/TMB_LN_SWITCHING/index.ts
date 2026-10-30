import { defineInstrument } from '/runtime/v1/@opendatacapture/runtime-core';
import { z } from '/runtime/v1/zod@3.x/v4';

import fingerImg from './_finger.webp';
import inst0EnImg from './_Inst0_en.webp';
import inst0FrImg from './_Inst0_fr.webp';
import inst1Img from './_Inst1.webp';
import inst2EnImg from './_Inst2_en.webp';
import inst2FrImg from './_Inst2_fr.webp';
import inst3EnImg from './_Inst3_en.webp';
import inst3FrImg from './_Inst3_fr.webp';
import inst4EnImg from './_Inst4_en.webp';
import inst4FrImg from './_Inst4_fr.webp';
import letterInstClickEnImg from './_letterInst_click_en.webp';
import letterInstClickFrImg from './_letterInst_click_fr.webp';
import letterInstEnImg from './_letterInst_en.webp';
import letterInstFrImg from './_letterInst_fr.webp';
import numberInstClickEnImg from './_numberInst_click_en.webp';
import numberInstClickFrImg from './_numberInst_click_fr.webp';
import numberInstEnImg from './_numberInst_en.webp';
import numberInstFrImg from './_numberInst_fr.webp';
import html from './fragment.html';
import { render } from './render.js';

import './TestMyBrain.12.18.min.js?legacy';
import './TestHelper.v1.May23.js?legacy';
import './styles.css';

const staticAssets = {
  '/images/Inst1.jpg': inst1Img,
  '/images/finger.png': fingerImg,
  '/images/Inst0_en.jpg': inst0EnImg,
  '/images/Inst0_fr.jpg': inst0FrImg,
  '/images/Inst2_en.jpg': inst2EnImg,
  '/images/Inst2_fr.jpg': inst2FrImg,
  '/images/Inst3_en.jpg': inst3EnImg,
  '/images/Inst3_fr.jpg': inst3FrImg,
  '/images/Inst4_en.jpg': inst4EnImg,
  '/images/Inst4_fr.jpg': inst4FrImg,
  '/images/numberInst_en.jpg': numberInstEnImg,
  '/images/numberInst_fr.jpg': numberInstFrImg,
  '/images/numberInst_click_en.jpg': numberInstClickEnImg,
  '/images/numberInst_click_fr.jpg': numberInstClickFrImg,
  '/images/letterInst_en.jpg': letterInstEnImg,
  '/images/letterInst_fr.jpg': letterInstFrImg,
  '/images/letterInst_click_en.jpg': letterInstClickEnImg,
  '/images/letterInst_click_fr.jpg': letterInstClickFrImg
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
    name: 'TMB_LN_SWITCHING'
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
      en: 'A task switching test that evaluates cognitive flexibility by alternating between letter and number categorization.',
      fr: 'Un test d’alternance de tâches qui évalue la flexibilité cognitive en alternant entre la catégorisation de lettres et de chiffres.'
    },
    license: 'LGPL-3.0',
    title: {
      en: 'Letter/Number Switching',
      fr: 'Alternance lettres/chiffres'
    }
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
