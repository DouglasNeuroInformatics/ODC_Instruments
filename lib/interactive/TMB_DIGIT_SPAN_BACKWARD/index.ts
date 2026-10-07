import { defineInstrument } from '/runtime/v1/@opendatacapture/runtime-core';
import { z } from '/runtime/v1/zod@3.x/v4';

import backwardDigitsSeqImage from './_backwardDigitsSeq.webp';
import beginImage from './_begin.webp';
import html from './fragment.html';
import { render } from './render.js';

import './TestMyBrain.12.18.min.js?legacy';
import './chooseInput.v1.Apr23.js?legacy';
import './TestHelper.v1.May23.js?legacy';
import './styles.css';

const staticAssets = {
  '/images/begin.webp': beginImage,
  // in the source, digitsStream.gif is byte-identical to begin.gif
  '/images/digitsStream.webp': beginImage,
  '/images/backwardDigitsSeq.webp': backwardDigitsSeqImage
};

export default defineInstrument({
  kind: 'INTERACTIVE',
  language: ['en', 'fr'],
  tags: {
    en: ['TestMyBrain'],
    fr: ['TestMyBrain']
  },
  internal: {
    edition: 1,
    name: 'TMB_DIGIT_SPAN_BACKWARD'
  },
  content: {
    meta: {
      charset: 'UTF-8',
      description: 'TMB Digit Span',
      copyright: '2023 The Many Brains Project, Inc. and McLean Hospital LGPLv3',
      keywords: 'cognitive test, brain test, digit memory span',
      viewport: 'width=device-width, initial-scale=1',
      'apple-mobile-web-app-capable': 'yes',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-title': 'TMB DigitSpan',
      'theme-color': 'white'
    },
    html,
    render: (done) => render(done, 'backward'),
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
      en: 'A working memory test in which participants see sequences of digits, presented one at a time, and report them in reverse order. Sequences grow from 2 to 11 digits, and the score is the longest sequence length recalled correctly at least once.',
      fr: "Un test de mémoire de travail dans lequel les participants voient des séquences de chiffres, présentés un à la fois, et les rappellent dans l'ordre inverse. Les séquences passent de 2 à 11 chiffres, et le score correspond à la plus longue séquence rappelée correctement au moins une fois."
    },
    license: 'LGPL-3.0',
    title: {
      en: 'TMB Digit Span (Backward)',
      fr: 'TMB Empan de chiffres (ordre inverse)'
    }
  },
  measures: {
    span: {
      kind: 'computed',
      label: { en: 'Span', fr: 'Empan' },
      value: (data) => data.outcomes.span
    },
    numCorrect: {
      kind: 'computed',
      label: { en: 'Number of Correct Trials', fr: "Nombre d'essais réussis" },
      value: (data) => data.outcomes.numCorrect
    },
    responseDevice: {
      kind: 'computed',
      label: { en: 'Response Device', fr: 'Dispositif de réponse' },
      value: (data) => data.outcomes.responseDevice
    }
  },
  validationSchema: z.object({
    outcomes: z.object({
      score: z.number(),
      numCorrect: z.number(),
      span: z.number(),
      reportOrder: z.literal('backward'),
      responseDevice: z.string(),
      testVersion: z.string(),
      type: z.string()
    }),
    results: z.array(
      z.object({
        type: z.string(),
        digits: z.string(),
        response: z.string(),
        correct: z.number(),
        rt: z.number(),
        state: z.string()
      })
    )
  })
});
