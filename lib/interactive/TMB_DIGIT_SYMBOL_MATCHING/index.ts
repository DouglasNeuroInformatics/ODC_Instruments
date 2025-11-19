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
import img10 from './_10.webp';
import img11 from './_11.webp';
import img12 from './_12.webp';
import img13 from './_13.webp';
import img14 from './_14.webp';
import img15 from './_15.webp';
import img16 from './_16.webp';
import img17 from './_17.webp';
import img18 from './_18.webp';
import img19 from './_19.webp';
import img20 from './_20.webp';
import img21 from './_21.webp';
import img22 from './_22.webp';
import img23 from './_23.webp';
import img24 from './_24.webp';
import img25 from './_25.webp';
import img26 from './_26.webp';
import img27 from './_27.webp';
import img28 from './_28.webp';
import img29 from './_29.webp';
import img30 from './_30.webp';
import key from './_key.webp';
import keySmall from './_keySmall.webp';
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
  '/images/10.png': img10,
  '/images/11.png': img11,
  '/images/12.png': img12,
  '/images/13.png': img13,
  '/images/14.png': img14,
  '/images/15.png': img15,
  '/images/16.png': img16,
  '/images/17.png': img17,
  '/images/18.png': img18,
  '/images/19.png': img19,
  '/images/20.png': img20,
  '/images/21.png': img21,
  '/images/22.png': img22,
  '/images/23.png': img23,
  '/images/24.png': img24,
  '/images/25.png': img25,
  '/images/26.png': img26,
  '/images/27.png': img27,
  '/images/28.png': img28,
  '/images/29.png': img29,
  '/images/30.png': img30,
  '/images/key.png': key,
  '/images/keySmall.png': keySmall,
  '/images/resp1.png': resp1,
  '/images/resp2.png': resp2,
  '/images/resp3.png': resp3
};

import './TestMyBrain.12.18.min.js?legacy';
import './chooseInput.v1.Feb24.js?legacy';
import './TestHelper.v1.Oct23.js?legacy';

export default defineInstrument({
  kind: 'INTERACTIVE',
  language: 'en',
  tags: ['TestMyBrain'],
  internal: {
    edition: 1,
    name: 'TMB_DIGIT_SYMBOL_MATCHING'
  },
  content: {
    meta: {
      charset: 'UTF-8',
      'apple-mobile-web-app-capable': 'yes',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-title': 'TMB DSC',
      'theme-color': 'white',
      description: 'TMB Digit Symbol Matching',
      keywords: 'cognitive test, brain test, digit-symbol coding',
      copyright: '2023 The Many Brains Project, Inc. and McLean Hospital LGPLv3',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=contain'
    },
    html,
    render,
    staticAssets
  },
  clientDetails: {
    estimatedDuration: 10,
    instructions: ['Instructions will be presented on screen in the task.']
  },
  details: {
    description:
      'A cognitive test that assesses processing speed and attention by matching digit symbols according to a key.',
    license: 'LGPL-3.0',
    title: 'TMB Digit Symbol Matching'
  },
  measures: {},
  validationSchema: z.any()
});
