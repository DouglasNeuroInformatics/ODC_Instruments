import { defineInstrument } from '/runtime/v1/@opendatacapture/runtime-core';
import { z } from '/runtime/v1/zod@3.x/v4';

import angry1 from './_angry1.webp';
import angry2 from './_angry2.webp';
import angry3 from './_angry3.webp';
import angry4 from './_angry4.webp';
import angry5 from './_angry5.webp';
import angry6 from './_angry6.webp';
import angry7 from './_angry7.webp';
import angry8 from './_angry8.webp';
import angry9 from './_angry9.webp';
import angry10 from './_angry10.webp';
import angry11 from './_angry11.webp';
import angry12 from './_angry12.webp';
import emotions from './_emotions.webp';
import fearful1 from './_fearful1.webp';
import fearful2 from './_fearful2.webp';
import fearful3 from './_fearful3.webp';
import fearful4 from './_fearful4.webp';
import fearful5 from './_fearful5.webp';
import fearful6 from './_fearful6.webp';
import fearful7 from './_fearful7.webp';
import fearful8 from './_fearful8.webp';
import fearful9 from './_fearful9.webp';
import fearful10 from './_fearful10.webp';
import fearful11 from './_fearful11.webp';
import fearful12 from './_fearful12.webp';
import happy1 from './_happy1.webp';
import happy2 from './_happy2.webp';
import happy3 from './_happy3.webp';
import happy4 from './_happy4.webp';
import happy5 from './_happy5.webp';
import happy6 from './_happy6.webp';
import happy7 from './_happy7.webp';
import happy8 from './_happy8.webp';
import happy9 from './_happy9.webp';
import happy10 from './_happy10.webp';
import happy11 from './_happy11.webp';
import happy12 from './_happy12.webp';
import sad1 from './_sad1.webp';
import sad2 from './_sad2.webp';
import sad3 from './_sad3.webp';
import sad4 from './_sad4.webp';
import sad5 from './_sad5.webp';
import sad6 from './_sad6.webp';
import sad7 from './_sad7.webp';
import sad8 from './_sad8.webp';
import sad9 from './_sad9.webp';
import sad10 from './_sad10.webp';
import sad11 from './_sad11.webp';
import sad12 from './_sad12.webp';
import testBlack from './_testBlack.webp';
import html from './fragment.html';
import { render } from './render.js';

import './TestMyBrain.12.18.min.js?legacy';
import './TestHelper.v1.May23.js?legacy';
import './styles.css';

const picsInput = `
* This is an input file to the Emotion Recognition Test.
* Each line must contain the file path of an emotion picture,
* relative to the directory containing the test's script.
* Lines beginning with '*' are ignored.
* FILEPATH
images/fearful1.jpg
images/angry1.jpg
images/angry2.jpg
images/fearful2.jpg
images/sad1.jpg
images/sad2.jpg
images/sad3.jpg
images/angry3.jpg
images/sad4.jpg
images/sad5.jpg
images/happy1.jpg
images/happy2.jpg
images/sad6.jpg
images/angry4.jpg
images/happy3.jpg
images/happy4.jpg
images/fearful3.jpg
images/happy5.jpg
images/sad7.jpg
images/fearful4.jpg
images/fearful5.jpg
images/sad8.jpg
images/sad9.jpg
images/angry5.jpg
images/angry6.jpg
images/fearful6.jpg
images/happy6.jpg
images/fearful7.jpg
images/happy7.jpg
images/happy8.jpg
images/angry7.jpg
images/happy9.jpg
images/fearful8.jpg
images/fearful9.jpg
images/fearful10.jpg
images/fearful11.jpg
images/angry8.jpg
images/fearful12.jpg
images/angry9.jpg
images/sad10.jpg
images/angry10.jpg
images/sad11.jpg
images/sad12.jpg
images/angry11.jpg
images/happy10.jpg
images/angry12.jpg
images/happy11.jpg
images/happy12.jpg
`;

const staticAssets = {
  '/images/angry1.jpg': angry1,
  '/images/angry2.jpg': angry2,
  '/images/angry3.jpg': angry3,
  '/images/angry4.jpg': angry4,
  '/images/angry5.jpg': angry5,
  '/images/angry6.jpg': angry6,
  '/images/angry7.jpg': angry7,
  '/images/angry8.jpg': angry8,
  '/images/angry9.jpg': angry9,
  '/images/angry10.jpg': angry10,
  '/images/angry11.jpg': angry11,
  '/images/angry12.jpg': angry12,
  '/images/fearful1.jpg': fearful1,
  '/images/fearful2.jpg': fearful2,
  '/images/fearful3.jpg': fearful3,
  '/images/fearful4.jpg': fearful4,
  '/images/fearful5.jpg': fearful5,
  '/images/fearful6.jpg': fearful6,
  '/images/fearful7.jpg': fearful7,
  '/images/fearful8.jpg': fearful8,
  '/images/fearful9.jpg': fearful9,
  '/images/fearful10.jpg': fearful10,
  '/images/fearful11.jpg': fearful11,
  '/images/fearful12.jpg': fearful12,
  '/images/happy1.jpg': happy1,
  '/images/happy2.jpg': happy2,
  '/images/happy3.jpg': happy3,
  '/images/happy4.jpg': happy4,
  '/images/happy5.jpg': happy5,
  '/images/happy6.jpg': happy6,
  '/images/happy7.jpg': happy7,
  '/images/happy8.jpg': happy8,
  '/images/happy9.jpg': happy9,
  '/images/happy10.jpg': happy10,
  '/images/happy11.jpg': happy11,
  '/images/happy12.jpg': happy12,
  '/images/sad1.jpg': sad1,
  '/images/sad2.jpg': sad2,
  '/images/sad3.jpg': sad3,
  '/images/sad4.jpg': sad4,
  '/images/sad5.jpg': sad5,
  '/images/sad6.jpg': sad6,
  '/images/sad7.jpg': sad7,
  '/images/sad8.jpg': sad8,
  '/images/sad9.jpg': sad9,
  '/images/sad10.jpg': sad10,
  '/images/sad11.jpg': sad11,
  '/images/sad12.jpg': sad12,
  '/images/emotions.png': emotions,
  '/images/testBlack.jpg': testBlack,
  '/picsInput.txt': `data:text/plain,${encodeURIComponent(picsInput)}`
};

export default defineInstrument({
  kind: 'INTERACTIVE',
  language: 'en',
  tags: ['TestMyBrain'],
  internal: {
    edition: 1,
    name: 'TMB_EMOTION_RECOGNITION'
  },
  content: {
    meta: {
      charset: 'UTF-8',
      copyright: '2023 The Many Brains Project, Inc. and McLean Hospital LGPLv3',
      keywords: 'cognitive test, brain test',
      viewport: 'width=device-width, initial-scale=1',
      'apple-mobile-web-app-capable': 'yes',
      'mobile-web-app-capable': 'yes',
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
    title: 'TMB Emotion Recognition'
  },
  measures: {},
  validationSchema: z.object({
    score: z.number().nullish(),
    accuracy: z.number().nullish(),
    meanRTc: z.number().nullish(),
    medianRTc: z.number().nullish(),
    sdRTc: z.number().nullish(),
    happy_accuracy: z.number().nullish(),
    happy_meanRTc: z.number().nullish(),
    happy_medianRTc: z.number().nullish(),
    happy_sdRTc: z.number().nullish(),
    angry_accuracy: z.number().nullish(),
    angry_meanRTc: z.number().nullish(),
    angry_medianRTc: z.number().nullish(),
    angry_sdRTc: z.number().nullish(),
    fearful_accuracy: z.number().nullish(),
    fearful_meanRTc: z.number().nullish(),
    fearful_medianRTc: z.number().nullish(),
    fearful_sdRTc: z.number().nullish(),
    sad_accuracy: z.number().nullish(),
    sad_meanRTc: z.number().nullish(),
    sad_medianRTc: z.number().nullish(),
    sad_sdRTc: z.number().nullish(),
    any_timeouts: z.number().nullish(),
    flag_medianRTc: z.number().nullish(),
    flag_sameResponse: z.number().nullish(),
    flag_trialFlags: z.number().nullish(),
    responseDevice: z.string().nullish(),
    testVersion: z.string().nullish()
  })
});
