import { defineInstrument } from '/runtime/v1/@opendatacapture/runtime-core';
import { z } from '/runtime/v1/zod@3.x/v4';

import img1 from './_1.webp';
import img2 from './_2.webp';
import img3 from './_3.webp';
import img4 from './_4.webp';
import img5 from './_5.webp';
import img6 from './_6.webp';
import img7 from './_7.webp';
import img8 from './_8.webp';
import img9 from './_9.webp';
import resp1 from './_resp1.webp';
import resp2 from './_resp2.webp';
import resp3 from './_resp3.webp';
import html from './fragment.html';
import { render } from './render.js';

import './styles.css';

const staticAssets = {
  '/images/1.png': img1,
  '/images/2.png': img2,
  '/images/3.png': img3,
  '/images/4.png': img4,
  '/images/5.png': img5,
  '/images/6.png': img6,
  '/images/7.png': img7,
  '/images/8.png': img8,
  '/images/9.png': img9,
  '/images/resp1.png': resp1,
  '/images/resp2.png': resp2,
  '/images/resp3.png': resp3
};

import './TestMyBrain.12.18.min.js?legacy';
import './chooseInput.v1.Feb24.js?legacy';
import './TestHelper.v1.Oct23.js?legacy';

export default defineInstrument({
  kind: 'INTERACTIVE',
  language: ['en', 'fr'],
  tags: {
    en: ['TestMyBrain'],
    fr: ['TestMyBrain']
  },
  internal: {
    edition: 1,
    name: 'TMB_DIGIT_SYMBOL_CODING'
  },
  content: {
    meta: {
      charset: 'UTF-8',
      'apple-mobile-web-app-capable': 'yes',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-title': 'TMB DSC',
      'theme-color': 'white',
      description: 'TMB Digit Symbol Coding',
      keywords: 'cognitive test, brain test, digit-symbol coding',
      copyright: '2023 The Many Brains Project, Inc. and McLean Hospital LGPLv3',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=contain'
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
      en: 'A cognitive test that assesses processing speed and attention by coding symbols as digits according to a nine-symbol key.',
      fr: "Un test cognitif qui évalue la vitesse de traitement et l'attention en codant des symboles en chiffres selon une grille de correspondance de neuf symboles."
    },
    license: 'LGPL-3.0',
    title: {
      en: 'TMB Digit Symbol Coding',
      fr: 'TMB Codage Chiffres-Symboles'
    }
  },
  measures: {},
  validationSchema: z.any()
});
