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
  language: 'en',
  tags: ['TestMyBrain'],
  internal: {
    edition: 1,
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
    staticAssets
  },
  clientDetails: {
    estimatedDuration: 1,
    instructions: ['Instructions will be presented on screen in the task.']
  },
  details: {
    description: 'An attention task that measures the ability to track multiple moving objects simultaneously.',
    license: 'LGPL-3.0',
    title: 'TMB Multiple Object Tracking'
  },
  measures: {},
  validationSchema: z.any()
});
