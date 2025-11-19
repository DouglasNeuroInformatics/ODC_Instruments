import { defineInstrument } from '/runtime/v1/@opendatacapture/runtime-core';
import { z } from '/runtime/v1/zod@3.x/v4';

import bar1Img from './_bar1.webp';
import bar2Img from './_bar2.webp';
import bar3Img from './_bar3.webp';
import bar4Img from './_bar4.webp';
import bar5Img from './_bar5.webp';
import bar6Img from './_bar6.webp';
import bar7Img from './_bar7.webp';
import bar8Img from './_bar8.webp';
import barn1Img from './_barn1.webp';
import barn2Img from './_barn2.webp';
import barn3Img from './_barn3.webp';
import barn4Img from './_barn4.webp';
import barn5Img from './_barn5.webp';
import barn6Img from './_barn6.webp';
import barn7Img from './_barn7.webp';
import barn8Img from './_barn8.webp';
import barn9Img from './_barn9.webp';
import bath1Img from './_bath1.webp';
import bath2Img from './_bath2.webp';
import bath3Img from './_bath3.webp';
import bath4Img from './_bath4.webp';
import bath5Img from './_bath5.webp';
import bath6Img from './_bath6.webp';
import bath7Img from './_bath7.webp';
import bath8Img from './_bath8.webp';
import beach1Img from './_beach1.webp';
import beach2Img from './_beach2.webp';
import beach3Img from './_beach3.webp';
import beach4Img from './_beach4.webp';
import beach5Img from './_beach5.webp';
import beach6Img from './_beach6.webp';
import beach7Img from './_beach7.webp';
import beach8Img from './_beach8.webp';
import bed1Img from './_bed1.webp';
import bed2Img from './_bed2.webp';
import bed3Img from './_bed3.webp';
import bed4Img from './_bed4.webp';
import bed5Img from './_bed5.webp';
import bed6Img from './_bed6.webp';
import bed7Img from './_bed7.webp';
import bed8Img from './_bed8.webp';
import boat1Img from './_boat1.webp';
import boat2Img from './_boat2.webp';
import boat3Img from './_boat3.webp';
import boat4Img from './_boat4.webp';
import boat5Img from './_boat5.webp';
import boat6Img from './_boat6.webp';
import boat7Img from './_boat7.webp';
import boat8Img from './_boat8.webp';
import buffet1Img from './_buffet1.webp';
import buffet2Img from './_buffet2.webp';
import buffet3Img from './_buffet3.webp';
import buffet4Img from './_buffet4.webp';
import buffet5Img from './_buffet5.webp';
import buffet6Img from './_buffet6.webp';
import buffet7Img from './_buffet7.webp';
import buffet8Img from './_buffet8.webp';
import closet1Img from './_closet1.webp';
import closet2Img from './_closet2.webp';
import closet3Img from './_closet3.webp';
import closet4Img from './_closet4.webp';
import closet5Img from './_closet5.webp';
import closet6Img from './_closet6.webp';
import closet7Img from './_closet7.webp';
import closet8Img from './_closet8.webp';
import door1Img from './_door1.webp';
import door2Img from './_door2.webp';
import door3Img from './_door3.webp';
import door4Img from './_door4.webp';
import door5Img from './_door5.webp';
import door6Img from './_door6.webp';
import door7Img from './_door7.webp';
import door8Img from './_door8.webp';
import entry1Img from './_entry1.webp';
import entry2Img from './_entry2.webp';
import entry3Img from './_entry3.webp';
import entry4Img from './_entry4.webp';
import entry5Img from './_entry5.webp';
import entry6Img from './_entry6.webp';
import entry7Img from './_entry7.webp';
import entry8Img from './_entry8.webp';
import example1Img from './_example1.webp';
import example2Img from './_example2.webp';
import example3Img from './_example3.webp';
import example4Img from './_example4.webp';
import example5Img from './_example5.webp';
import example6Img from './_example6.webp';
import field1Img from './_field1.webp';
import field2Img from './_field2.webp';
import field3Img from './_field3.webp';
import field4Img from './_field4.webp';
import field5Img from './_field5.webp';
import field6Img from './_field6.webp';
import field7Img from './_field7.webp';
import field8Img from './_field8.webp';
import kitchen1Img from './_kitchen1.webp';
import kitchen2Img from './_kitchen2.webp';
import kitchen3Img from './_kitchen3.webp';
import kitchen4Img from './_kitchen4.webp';
import kitchen5Img from './_kitchen5.webp';
import kitchen6Img from './_kitchen6.webp';
import kitchen7Img from './_kitchen7.webp';
import kitchen8Img from './_kitchen8.webp';
import lobby1Img from './_lobby1.webp';
import lobby2Img from './_lobby2.webp';
import lobby3Img from './_lobby3.webp';
import lobby4Img from './_lobby4.webp';
import lobby5Img from './_lobby5.webp';
import lobby6Img from './_lobby6.webp';
import lobby7Img from './_lobby7.webp';
import lobby8Img from './_lobby8.webp';
import playground1Img from './_playground1.webp';
import playground2Img from './_playground2.webp';
import playground3Img from './_playground3.webp';
import playground4Img from './_playground4.webp';
import playground5Img from './_playground5.webp';
import playground6Img from './_playground6.webp';
import playground7Img from './_playground7.webp';
import playground8Img from './_playground8.webp';
import temple1Img from './_temple1.webp';
import temple2Img from './_temple2.webp';
import temple3Img from './_temple3.webp';
import temple4Img from './_temple4.webp';
import temple5Img from './_temple5.webp';
import temple6Img from './_temple6.webp';
import temple7Img from './_temple7.webp';
import temple8Img from './_temple8.webp';
import underwater1Img from './_underwater1.webp';
import underwater2Img from './_underwater2.webp';
import underwater3Img from './_underwater3.webp';
import underwater4Img from './_underwater4.webp';
import underwater5Img from './_underwater5.webp';
import underwater6Img from './_underwater6.webp';
import underwater7Img from './_underwater7.webp';
import underwater8Img from './_underwater8.webp';
import html from './fragment.html';
import { render } from './render.js';

import './TestMyBrain.12.18.min.js?legacy';
import './TestHelper.v1.May23.js?legacy';
import './styles.css';

const studyInput = `
* This is an input file to the TEST component of the Visual Pair Associates Test
* In this version of the input file, barn4.jpg (American flag barn) is replaced by barn9.jpg.
* Each line must contain a probe image, its associated target and 5 choice images
* The word separator is 'whitespace'
* Lines beginning with '*' are ignored
* PROBE TARGET CHOICE-1 CHOICE-2 CHOICE-3 CHOICE-4 CHOICE-5
barn1.jpg barn9.jpg barn6.jpg barn7.jpg barn9.jpg barn5.jpg barn8.jpg
lobby1.jpg lobby4.jpg lobby7.jpg lobby8.jpg lobby5.jpg lobby6.jpg lobby4.jpg
bath1.jpg bath4.jpg bath5.jpg bath8.jpg bath4.jpg bath6.jpg bath7.jpg
temple1.jpg temple4.jpg temple8.jpg temple6.jpg temple5.jpg temple4.jpg temple7.jpg
playground1.jpg playground4.jpg playground5.jpg playground4.jpg playground8.jpg playground7.jpg playground6.jpg
entry1.jpg entry4.jpg entry8.jpg entry5.jpg entry6.jpg entry4.jpg entry7.jpg
field1.jpg field4.jpg field6.jpg field8.jpg field5.jpg field7.jpg field4.jpg
underwater1.jpg underwater4.jpg underwater5.jpg underwater4.jpg underwater7.jpg underwater6.jpg underwater8.jpg
barn2.jpg barn5.jpg barn6.jpg barn7.jpg barn9.jpg barn5.jpg barn8.jpg
lobby2.jpg lobby5.jpg lobby7.jpg lobby8.jpg lobby5.jpg lobby6.jpg lobby4.jpg
bath2.jpg bath5.jpg bath5.jpg bath8.jpg bath4.jpg bath6.jpg bath7.jpg
temple2.jpg temple5.jpg temple8.jpg temple6.jpg temple5.jpg temple4.jpg temple7.jpg
playground2.jpg playground5.jpg playground5.jpg playground4.jpg playground8.jpg playground7.jpg playground6.jpg
entry2.jpg entry5.jpg entry8.jpg entry5.jpg entry6.jpg entry4.jpg entry7.jpg
field2.jpg field5.jpg field6.jpg field8.jpg field5.jpg field7.jpg field4.jpg
underwater2.jpg underwater5.jpg underwater5.jpg underwater4.jpg underwater7.jpg underwater6.jpg underwater8.jpg
barn3.jpg barn6.jpg barn6.jpg barn7.jpg barn9.jpg barn5.jpg barn8.jpg
lobby3.jpg lobby6.jpg lobby7.jpg lobby8.jpg lobby5.jpg lobby6.jpg lobby4.jpg
bath3.jpg bath6.jpg bath5.jpg bath8.jpg bath4.jpg bath6.jpg bath7.jpg
temple3.jpg temple6.jpg temple8.jpg temple6.jpg temple5.jpg temple4.jpg temple7.jpg
playground3.jpg playground6.jpg playground5.jpg playground4.jpg playground8.jpg playground7.jpg playground6.jpg
entry3.jpg entry6.jpg entry8.jpg entry5.jpg entry6.jpg entry4.jpg entry7.jpg
field3.jpg field6.jpg field6.jpg field8.jpg field5.jpg field7.jpg field4.jpg
underwater3.jpg underwater6.jpg underwater5.jpg underwater4.jpg underwater7.jpg underwater6.jpg underwater8.jpg
`;

export default defineInstrument({
  kind: 'INTERACTIVE',
  language: 'en',
  tags: ['TestMyBrain'],
  internal: {
    edition: 1,
    name: 'TMB_VISUAL_PA_TEST'
  },
  content: {
    meta: {
      charset: 'UTF-8',
      description: 'TMB Visual Paired Associates Memory',
      copyright: '2024 The Many Brains Project, Inc. and McLean Hospital LGPLv3',
      keywords: 'cognitive test, brain test',
      viewport: 'width=device-width, initial-scale=1',
      'apple-mobile-web-app-capable': 'yes',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-title': 'TMB VisualPA Recall',
      'theme-color': 'white'
    },
    html,
    render,
    staticAssets: {
      '/images/bar1.jpg': bar1Img,
      '/images/bar2.jpg': bar2Img,
      '/images/bar3.jpg': bar3Img,
      '/images/bar4.jpg': bar4Img,
      '/images/bar5.jpg': bar5Img,
      '/images/bar6.jpg': bar6Img,
      '/images/bar7.jpg': bar7Img,
      '/images/bar8.jpg': bar8Img,
      '/images/barn1.jpg': barn1Img,
      '/images/barn2.jpg': barn2Img,
      '/images/barn3.jpg': barn3Img,
      '/images/barn4.jpg': barn4Img,
      '/images/barn5.jpg': barn5Img,
      '/images/barn6.jpg': barn6Img,
      '/images/barn7.jpg': barn7Img,
      '/images/barn8.jpg': barn8Img,
      '/images/barn9.jpg': barn9Img,
      '/images/bath1.jpg': bath1Img,
      '/images/bath2.jpg': bath2Img,
      '/images/bath3.jpg': bath3Img,
      '/images/bath4.jpg': bath4Img,
      '/images/bath5.jpg': bath5Img,
      '/images/bath6.jpg': bath6Img,
      '/images/bath7.jpg': bath7Img,
      '/images/bath8.jpg': bath8Img,
      '/images/beach1.jpg': beach1Img,
      '/images/beach2.jpg': beach2Img,
      '/images/beach3.jpg': beach3Img,
      '/images/beach4.jpg': beach4Img,
      '/images/beach5.jpg': beach5Img,
      '/images/beach6.jpg': beach6Img,
      '/images/beach7.jpg': beach7Img,
      '/images/beach8.jpg': beach8Img,
      '/images/bed1.jpg': bed1Img,
      '/images/bed2.jpg': bed2Img,
      '/images/bed3.jpg': bed3Img,
      '/images/bed4.jpg': bed4Img,
      '/images/bed5.jpg': bed5Img,
      '/images/bed6.jpg': bed6Img,
      '/images/bed7.jpg': bed7Img,
      '/images/bed8.jpg': bed8Img,
      '/images/boat1.jpg': boat1Img,
      '/images/boat2.jpg': boat2Img,
      '/images/boat3.jpg': boat3Img,
      '/images/boat4.jpg': boat4Img,
      '/images/boat5.jpg': boat5Img,
      '/images/boat6.jpg': boat6Img,
      '/images/boat7.jpg': boat7Img,
      '/images/boat8.jpg': boat8Img,
      '/images/buffet1.jpg': buffet1Img,
      '/images/buffet2.jpg': buffet2Img,
      '/images/buffet3.jpg': buffet3Img,
      '/images/buffet4.jpg': buffet4Img,
      '/images/buffet5.jpg': buffet5Img,
      '/images/buffet6.jpg': buffet6Img,
      '/images/buffet7.jpg': buffet7Img,
      '/images/buffet8.jpg': buffet8Img,
      '/images/closet1.jpg': closet1Img,
      '/images/closet2.jpg': closet2Img,
      '/images/closet3.jpg': closet3Img,
      '/images/closet4.jpg': closet4Img,
      '/images/closet5.jpg': closet5Img,
      '/images/closet6.jpg': closet6Img,
      '/images/closet7.jpg': closet7Img,
      '/images/closet8.jpg': closet8Img,
      '/images/door1.jpg': door1Img,
      '/images/door2.jpg': door2Img,
      '/images/door3.jpg': door3Img,
      '/images/door4.jpg': door4Img,
      '/images/door5.jpg': door5Img,
      '/images/door6.jpg': door6Img,
      '/images/door7.jpg': door7Img,
      '/images/door8.jpg': door8Img,
      '/images/entry1.jpg': entry1Img,
      '/images/entry2.jpg': entry2Img,
      '/images/entry3.jpg': entry3Img,
      '/images/entry4.jpg': entry4Img,
      '/images/entry5.jpg': entry5Img,
      '/images/entry6.jpg': entry6Img,
      '/images/entry7.jpg': entry7Img,
      '/images/entry8.jpg': entry8Img,
      '/images/example1.jpg': example1Img,
      '/images/example2.jpg': example2Img,
      '/images/example3.jpg': example3Img,
      '/images/example4.jpg': example4Img,
      '/images/example5.jpg': example5Img,
      '/images/example6.jpg': example6Img,
      '/images/field1.jpg': field1Img,
      '/images/field2.jpg': field2Img,
      '/images/field3.jpg': field3Img,
      '/images/field4.jpg': field4Img,
      '/images/field5.jpg': field5Img,
      '/images/field6.jpg': field6Img,
      '/images/field7.jpg': field7Img,
      '/images/field8.jpg': field8Img,
      '/images/kitchen1.jpg': kitchen1Img,
      '/images/kitchen2.jpg': kitchen2Img,
      '/images/kitchen3.jpg': kitchen3Img,
      '/images/kitchen4.jpg': kitchen4Img,
      '/images/kitchen5.jpg': kitchen5Img,
      '/images/kitchen6.jpg': kitchen6Img,
      '/images/kitchen7.jpg': kitchen7Img,
      '/images/kitchen8.jpg': kitchen8Img,
      '/images/lobby1.jpg': lobby1Img,
      '/images/lobby2.jpg': lobby2Img,
      '/images/lobby3.jpg': lobby3Img,
      '/images/lobby4.jpg': lobby4Img,
      '/images/lobby5.jpg': lobby5Img,
      '/images/lobby6.jpg': lobby6Img,
      '/images/lobby7.jpg': lobby7Img,
      '/images/lobby8.jpg': lobby8Img,
      '/images/playground1.jpg': playground1Img,
      '/images/playground2.jpg': playground2Img,
      '/images/playground3.jpg': playground3Img,
      '/images/playground4.jpg': playground4Img,
      '/images/playground5.jpg': playground5Img,
      '/images/playground6.jpg': playground6Img,
      '/images/playground7.jpg': playground7Img,
      '/images/playground8.jpg': playground8Img,
      '/images/temple1.jpg': temple1Img,
      '/images/temple2.jpg': temple2Img,
      '/images/temple3.jpg': temple3Img,
      '/images/temple4.jpg': temple4Img,
      '/images/temple5.jpg': temple5Img,
      '/images/temple6.jpg': temple6Img,
      '/images/temple7.jpg': temple7Img,
      '/images/temple8.jpg': temple8Img,
      '/images/underwater1.jpg': underwater1Img,
      '/images/underwater2.jpg': underwater2Img,
      '/images/underwater3.jpg': underwater3Img,
      '/images/underwater4.jpg': underwater4Img,
      '/images/underwater5.jpg': underwater5Img,
      '/images/underwater6.jpg': underwater6Img,
      '/images/underwater7.jpg': underwater7Img,
      '/images/underwater8.jpg': underwater8Img,
      '/VisualPAtestInput.txt': `data:text/plain,${encodeURIComponent(studyInput)}`
    }
  },
  clientDetails: {
    estimatedDuration: 1,
    instructions: ['Instructions will be presented on screen in the task.']
  },
  details: {
    description: '',
    license: 'LGPL-3.0',
    title: 'Visual Paired Associates - Test'
  },
  measures: {},
  validationSchema: z.array(z.any())
});
