import { defineInstrument } from '/runtime/v1/@opendatacapture/runtime-core';
import { z } from '/runtime/v1/zod@3.x/v4';

import img1_1 from './_1-1.webp';
import img1_2 from './_1-2.webp';
import img1_3 from './_1-3.webp';
import img1_4 from './_1-4.webp';
import img1_5 from './_1-5.webp';
import img1 from './_1.webp';
import img2_1 from './_2-1.webp';
import img2_2 from './_2-2.webp';
import img2_3 from './_2-3.webp';
import img2_4 from './_2-4.webp';
import img2_5 from './_2-5.webp';
import img2 from './_2.webp';
import img3_1 from './_3-1.webp';
import img3_2 from './_3-2.webp';
import img3_3 from './_3-3.webp';
import img3_4 from './_3-4.webp';
import img3_5 from './_3-5.webp';
import img3 from './_3.webp';
import img4_1 from './_4-1.webp';
import img4_2 from './_4-2.webp';
import img4_3 from './_4-3.webp';
import img4_4 from './_4-4.webp';
import img4_5 from './_4-5.webp';
import img4 from './_4.webp';
import img5_1 from './_5-1.webp';
import img5_2 from './_5-2.webp';
import img5_3 from './_5-3.webp';
import img5_4 from './_5-4.webp';
import img5_5 from './_5-5.webp';
import img5 from './_5.webp';
import img6_1 from './_6-1.webp';
import img6_2 from './_6-2.webp';
import img6_3 from './_6-3.webp';
import img6_4 from './_6-4.webp';
import img6_5 from './_6-5.webp';
import img6 from './_6.webp';
import img7_1 from './_7-1.webp';
import img7_2 from './_7-2.webp';
import img7_3 from './_7-3.webp';
import img7_4 from './_7-4.webp';
import img7_5 from './_7-5.webp';
import img7 from './_7.webp';
import img8_1 from './_8-1.webp';
import img8_2 from './_8-2.webp';
import img8_3 from './_8-3.webp';
import img8_4 from './_8-4.webp';
import img8_5 from './_8-5.webp';
import img8 from './_8.webp';
import img9_1 from './_9-1.webp';
import img9_2 from './_9-2.webp';
import img9_3 from './_9-3.webp';
import img9_4 from './_9-4.webp';
import img9_5 from './_9-5.webp';
import img9 from './_9.webp';
import img10_1 from './_10-1.webp';
import img10_2 from './_10-2.webp';
import img10_3 from './_10-3.webp';
import img10_4 from './_10-4.webp';
import img10_5 from './_10-5.webp';
import img10 from './_10.webp';
import img11_1 from './_11-1.webp';
import img11_2 from './_11-2.webp';
import img11_3 from './_11-3.webp';
import img11_4 from './_11-4.webp';
import img11_5 from './_11-5.webp';
import img11 from './_11.webp';
import img12_1 from './_12-1.webp';
import img12_2 from './_12-2.webp';
import img12_3 from './_12-3.webp';
import img12_4 from './_12-4.webp';
import img12_5 from './_12-5.webp';
import img12 from './_12.webp';
import img13_1 from './_13-1.webp';
import img13_2 from './_13-2.webp';
import img13_3 from './_13-3.webp';
import img13_4 from './_13-4.webp';
import img13_5 from './_13-5.webp';
import img13 from './_13.webp';
import img14_1 from './_14-1.webp';
import img14_2 from './_14-2.webp';
import img14_3 from './_14-3.webp';
import img14_4 from './_14-4.webp';
import img14_5 from './_14-5.webp';
import img14 from './_14.webp';
import img15_1 from './_15-1.webp';
import img15_2 from './_15-2.webp';
import img15_3 from './_15-3.webp';
import img15_4 from './_15-4.webp';
import img15_5 from './_15-5.webp';
import img15 from './_15.webp';
import img16_1 from './_16-1.webp';
import img16_2 from './_16-2.webp';
import img16_3 from './_16-3.webp';
import img16_4 from './_16-4.webp';
import img16_5 from './_16-5.webp';
import img16 from './_16.webp';
import img17_1 from './_17-1.webp';
import img17_2 from './_17-2.webp';
import img17_3 from './_17-3.webp';
import img17_4 from './_17-4.webp';
import img17_5 from './_17-5.webp';
import img17 from './_17.webp';
import img18_1 from './_18-1.webp';
import img18_2 from './_18-2.webp';
import img18_3 from './_18-3.webp';
import img18_4 from './_18-4.webp';
import img18_5 from './_18-5.webp';
import img18 from './_18.webp';
import img19_1 from './_19-1.webp';
import img19_2 from './_19-2.webp';
import img19_3 from './_19-3.webp';
import img19_4 from './_19-4.webp';
import img19_5 from './_19-5.webp';
import img19 from './_19.webp';
import img20_1 from './_20-1.webp';
import img20_2 from './_20-2.webp';
import img20_3 from './_20-3.webp';
import img20_4 from './_20-4.webp';
import img20_5 from './_20-5.webp';
import img20 from './_20.webp';
import img21_1 from './_21-1.webp';
import img21_2 from './_21-2.webp';
import img21_3 from './_21-3.webp';
import img21_4 from './_21-4.webp';
import img21_5 from './_21-5.webp';
import img21 from './_21.webp';
import img22_1 from './_22-1.webp';
import img22_2 from './_22-2.webp';
import img22_3 from './_22-3.webp';
import img22_4 from './_22-4.webp';
import img22_5 from './_22-5.webp';
import img22 from './_22.webp';
import img23_1 from './_23-1.webp';
import img23_2 from './_23-2.webp';
import img23_3 from './_23-3.webp';
import img23_4 from './_23-4.webp';
import img23_5 from './_23-5.webp';
import img23 from './_23.webp';
import img24_1 from './_24-1.webp';
import img24_2 from './_24-2.webp';
import img24_3 from './_24-3.webp';
import img24_4 from './_24-4.webp';
import img24_5 from './_24-5.webp';
import img24 from './_24.webp';
import img25_1 from './_25-1.webp';
import img25_2 from './_25-2.webp';
import img25_3 from './_25-3.webp';
import img25_4 from './_25-4.webp';
import img25_5 from './_25-5.webp';
import img25 from './_25.webp';
import img26_1 from './_26-1.webp';
import img26_2 from './_26-2.webp';
import img26_3 from './_26-3.webp';
import img26_4 from './_26-4.webp';
import img26_5 from './_26-5.webp';
import img26 from './_26.webp';
import img27_1 from './_27-1.webp';
import img27_2 from './_27-2.webp';
import img27_3 from './_27-3.webp';
import img27_4 from './_27-4.webp';
import img27_5 from './_27-5.webp';
import img27 from './_27.webp';
import img28_1 from './_28-1.webp';
import img28_2 from './_28-2.webp';
import img28_3 from './_28-3.webp';
import img28_4 from './_28-4.webp';
import img28_5 from './_28-5.webp';
import img28 from './_28.webp';
import img29_1 from './_29-1.webp';
import img29_2 from './_29-2.webp';
import img29_3 from './_29-3.webp';
import img29_4 from './_29-4.webp';
import img29_5 from './_29-5.webp';
import img29 from './_29.webp';
import img30_1 from './_30-1.webp';
import img30_2 from './_30-2.webp';
import img30_3 from './_30-3.webp';
import img30_4 from './_30-4.webp';
import img30_5 from './_30-5.webp';
import img30 from './_30.webp';
import img31_1 from './_31-1.webp';
import img31_2 from './_31-2.webp';
import img31_3 from './_31-3.webp';
import img31_4 from './_31-4.webp';
import img31_5 from './_31-5.webp';
import img31 from './_31.webp';
import img32_1 from './_32-1.webp';
import img32_2 from './_32-2.webp';
import img32_3 from './_32-3.webp';
import img32_4 from './_32-4.webp';
import img32_5 from './_32-5.webp';
import img32 from './_32.webp';
import img33_1 from './_33-1.webp';
import img33_2 from './_33-2.webp';
import img33_3 from './_33-3.webp';
import img33_4 from './_33-4.webp';
import img33_5 from './_33-5.webp';
import img33 from './_33.webp';
import img34_1 from './_34-1.webp';
import img34_2 from './_34-2.webp';
import img34_3 from './_34-3.webp';
import img34_4 from './_34-4.webp';
import img34_5 from './_34-5.webp';
import img34 from './_34.webp';
import img35_1 from './_35-1.webp';
import img35_2 from './_35-2.webp';
import img35_3 from './_35-3.webp';
import img35_4 from './_35-4.webp';
import img35_5 from './_35-5.webp';
import img35 from './_35.webp';
import img36_1 from './_36-1.webp';
import img36_2 from './_36-2.webp';
import img36_3 from './_36-3.webp';
import img36_4 from './_36-4.webp';
import img36_5 from './_36-5.webp';
import img36 from './_36.webp';
import img37_1 from './_37-1.webp';
import img37_2 from './_37-2.webp';
import img37_3 from './_37-3.webp';
import img37_4 from './_37-4.webp';
import img37_5 from './_37-5.webp';
import img37 from './_37.webp';
import imgexample1 from './_example1.webp';
import imgexample2 from './_example2.webp';
import imgexample3 from './_example3.webp';
import html from './fragment.html';
import { render } from './render.js';

import './TestMyBrain.12.18.min.js?legacy';
import './TestHelper.v1.Oct23.js?legacy';
import './styles.css';

const input = `
* This is an input file to the Matrix Test
* Each line must contain a matrix image.png its associated target and 5 choice images
* The word separator is 'whitespace'
* Lines beginning with '*' are ignored
* MATRIX TARGET CHOICE-1 CHOICE-2 CHOICE-3 CHOICE-4 CHOICE-5
2.png 2-1.png 2-1.png 2-2.png 2-3.png 2-4.png 2-5.png
5.png 5-2.png 5-1.png 5-2.png 5-3.png 5-4.png 5-5.png
15.png 15-1.png 15-1.png 15-2.png 15-3.png 15-4.png 15-5.png
6.png 6-4.png 6-1.png 6-2.png 6-3.png 6-4.png 6-5.png
3.png 3-3.png 3-1.png 3-2.png 3-3.png 3-4.png 3-5.png
8.png 8-1.png 8-1.png 8-2.png 8-3.png 8-4.png 8-5.png
7.png 7-3.png 7-1.png 7-2.png 7-3.png 7-4.png 7-5.png
19.png 19-3.png 19-1.png 19-2.png 19-3.png 19-4.png 19-5.png
18.png 18-4.png 18-1.png 18-2.png 18-3.png 18-4.png 18-5.png
4.png 4-4.png 4-1.png 4-2.png 4-3.png 4-4.png 4-5.png
9.png 9-1.png 9-1.png 9-2.png 9-3.png 9-4.png 9-5.png
13.png 13-5.png 13-1.png 13-2.png 13-3.png 13-4.png 13-5.png
21.png 21-1.png 21-1.png 21-2.png 21-3.png 21-4.png 21-5.png
25.png 25-2.png 25-1.png 25-2.png 25-3.png 25-4.png 25-5.png
10.png 10-3.png 10-1.png 10-2.png 10-3.png 10-4.png 10-5.png
17.png 17-2.png 17-1.png 17-2.png 17-3.png 17-4.png 17-5.png
12.png 12-5.png 12-1.png 12-2.png 12-3.png 12-4.png 12-5.png
22.png 22-4.png 22-1.png 22-2.png 22-3.png 22-4.png 22-5.png
14.png 14-2.png 14-1.png 14-2.png 14-3.png 14-4.png 14-5.png
16.png 16-1.png 16-1.png 16-2.png 16-3.png 16-4.png 16-5.png
26.png 26-2.png 26-1.png 26-2.png 26-3.png 26-4.png 26-5.png
24.png 24-5.png 24-1.png 24-2.png 24-3.png 24-4.png 24-5.png
29.png 29-3.png 29-1.png 29-2.png 29-3.png 29-4.png 29-5.png
20.png 20-1.png 20-1.png 20-2.png 20-3.png 20-4.png 20-5.png
30.png 30-3.png 30-1.png 30-2.png 30-3.png 30-4.png 30-5.png
11.png 11-4.png 11-1.png 11-2.png 11-3.png 11-4.png 11-5.png
31.png 31-3.png 31-1.png 31-2.png 31-3.png 31-4.png 31-5.png
28.png 28-5.png 28-1.png 28-2.png 28-3.png 28-4.png 28-5.png
32.png 32-4.png 32-1.png 32-2.png 32-3.png 32-4.png 32-5.png
23.png 23-5.png 23-1.png 23-2.png 23-3.png 23-4.png 23-5.png
34.png 34-4.png 34-1.png 34-2.png 34-3.png 34-4.png 34-5.png
27.png 27-1.png 27-1.png 27-2.png 27-3.png 27-4.png 27-5.png
37.png 37-5.png 37-1.png 37-2.png 37-3.png 37-4.png 37-5.png
35.png 35-3.png 35-1.png 35-2.png 35-3.png 35-4.png 35-5.png
36.png 36-3.png 36-1.png 36-2.png 36-3.png 36-4.png 36-5.png
33.png 33-1.png 33-1.png 33-2.png 33-3.png 33-4.png 33-5.png
`;

const staticAssets = {
  '/images/1-1.png': img1_1,
  '/images/1-2.png': img1_2,
  '/images/1-3.png': img1_3,
  '/images/1-4.png': img1_4,
  '/images/1-5.png': img1_5,
  '/images/1.png': img1,
  '/images/10-1.png': img10_1,
  '/images/10-2.png': img10_2,
  '/images/10-3.png': img10_3,
  '/images/10-4.png': img10_4,
  '/images/10-5.png': img10_5,
  '/images/10.png': img10,
  '/images/11-1.png': img11_1,
  '/images/11-2.png': img11_2,
  '/images/11-3.png': img11_3,
  '/images/11-4.png': img11_4,
  '/images/11-5.png': img11_5,
  '/images/11.png': img11,
  '/images/12-1.png': img12_1,
  '/images/12-2.png': img12_2,
  '/images/12-3.png': img12_3,
  '/images/12-4.png': img12_4,
  '/images/12-5.png': img12_5,
  '/images/12.png': img12,
  '/images/13-1.png': img13_1,
  '/images/13-2.png': img13_2,
  '/images/13-3.png': img13_3,
  '/images/13-4.png': img13_4,
  '/images/13-5.png': img13_5,
  '/images/13.png': img13,
  '/images/14-1.png': img14_1,
  '/images/14-2.png': img14_2,
  '/images/14-3.png': img14_3,
  '/images/14-4.png': img14_4,
  '/images/14-5.png': img14_5,
  '/images/14.png': img14,
  '/images/15-1.png': img15_1,
  '/images/15-2.png': img15_2,
  '/images/15-3.png': img15_3,
  '/images/15-4.png': img15_4,
  '/images/15-5.png': img15_5,
  '/images/15.png': img15,
  '/images/16-1.png': img16_1,
  '/images/16-2.png': img16_2,
  '/images/16-3.png': img16_3,
  '/images/16-4.png': img16_4,
  '/images/16-5.png': img16_5,
  '/images/16.png': img16,
  '/images/17-1.png': img17_1,
  '/images/17-2.png': img17_2,
  '/images/17-3.png': img17_3,
  '/images/17-4.png': img17_4,
  '/images/17-5.png': img17_5,
  '/images/17.png': img17,
  '/images/18-1.png': img18_1,
  '/images/18-2.png': img18_2,
  '/images/18-3.png': img18_3,
  '/images/18-4.png': img18_4,
  '/images/18-5.png': img18_5,
  '/images/18.png': img18,
  '/images/19-1.png': img19_1,
  '/images/19-2.png': img19_2,
  '/images/19-3.png': img19_3,
  '/images/19-4.png': img19_4,
  '/images/19-5.png': img19_5,
  '/images/19.png': img19,
  '/images/2-1.png': img2_1,
  '/images/2-2.png': img2_2,
  '/images/2-3.png': img2_3,
  '/images/2-4.png': img2_4,
  '/images/2-5.png': img2_5,
  '/images/2.png': img2,
  '/images/20-1.png': img20_1,
  '/images/20-2.png': img20_2,
  '/images/20-3.png': img20_3,
  '/images/20-4.png': img20_4,
  '/images/20-5.png': img20_5,
  '/images/20.png': img20,
  '/images/21-1.png': img21_1,
  '/images/21-2.png': img21_2,
  '/images/21-3.png': img21_3,
  '/images/21-4.png': img21_4,
  '/images/21-5.png': img21_5,
  '/images/21.png': img21,
  '/images/22-1.png': img22_1,
  '/images/22-2.png': img22_2,
  '/images/22-3.png': img22_3,
  '/images/22-4.png': img22_4,
  '/images/22-5.png': img22_5,
  '/images/22.png': img22,
  '/images/23-1.png': img23_1,
  '/images/23-2.png': img23_2,
  '/images/23-3.png': img23_3,
  '/images/23-4.png': img23_4,
  '/images/23-5.png': img23_5,
  '/images/23.png': img23,
  '/images/24-1.png': img24_1,
  '/images/24-2.png': img24_2,
  '/images/24-3.png': img24_3,
  '/images/24-4.png': img24_4,
  '/images/24-5.png': img24_5,
  '/images/24.png': img24,
  '/images/25-1.png': img25_1,
  '/images/25-2.png': img25_2,
  '/images/25-3.png': img25_3,
  '/images/25-4.png': img25_4,
  '/images/25-5.png': img25_5,
  '/images/25.png': img25,
  '/images/26-1.png': img26_1,
  '/images/26-2.png': img26_2,
  '/images/26-3.png': img26_3,
  '/images/26-4.png': img26_4,
  '/images/26-5.png': img26_5,
  '/images/26.png': img26,
  '/images/27-1.png': img27_1,
  '/images/27-2.png': img27_2,
  '/images/27-3.png': img27_3,
  '/images/27-4.png': img27_4,
  '/images/27-5.png': img27_5,
  '/images/27.png': img27,
  '/images/28-1.png': img28_1,
  '/images/28-2.png': img28_2,
  '/images/28-3.png': img28_3,
  '/images/28-4.png': img28_4,
  '/images/28-5.png': img28_5,
  '/images/28.png': img28,
  '/images/29-1.png': img29_1,
  '/images/29-2.png': img29_2,
  '/images/29-3.png': img29_3,
  '/images/29-4.png': img29_4,
  '/images/29-5.png': img29_5,
  '/images/29.png': img29,
  '/images/3-1.png': img3_1,
  '/images/3-2.png': img3_2,
  '/images/3-3.png': img3_3,
  '/images/3-4.png': img3_4,
  '/images/3-5.png': img3_5,
  '/images/3.png': img3,
  '/images/30-1.png': img30_1,
  '/images/30-2.png': img30_2,
  '/images/30-3.png': img30_3,
  '/images/30-4.png': img30_4,
  '/images/30-5.png': img30_5,
  '/images/30.png': img30,
  '/images/31-1.png': img31_1,
  '/images/31-2.png': img31_2,
  '/images/31-3.png': img31_3,
  '/images/31-4.png': img31_4,
  '/images/31-5.png': img31_5,
  '/images/31.png': img31,
  '/images/32-1.png': img32_1,
  '/images/32-2.png': img32_2,
  '/images/32-3.png': img32_3,
  '/images/32-4.png': img32_4,
  '/images/32-5.png': img32_5,
  '/images/32.png': img32,
  '/images/33-1.png': img33_1,
  '/images/33-2.png': img33_2,
  '/images/33-3.png': img33_3,
  '/images/33-4.png': img33_4,
  '/images/33-5.png': img33_5,
  '/images/33.png': img33,
  '/images/34-1.png': img34_1,
  '/images/34-2.png': img34_2,
  '/images/34-3.png': img34_3,
  '/images/34-4.png': img34_4,
  '/images/34-5.png': img34_5,
  '/images/34.png': img34,
  '/images/35-1.png': img35_1,
  '/images/35-2.png': img35_2,
  '/images/35-3.png': img35_3,
  '/images/35-4.png': img35_4,
  '/images/35-5.png': img35_5,
  '/images/35.png': img35,
  '/images/36-1.png': img36_1,
  '/images/36-2.png': img36_2,
  '/images/36-3.png': img36_3,
  '/images/36-4.png': img36_4,
  '/images/36-5.png': img36_5,
  '/images/36.png': img36,
  '/images/37-1.png': img37_1,
  '/images/37-2.png': img37_2,
  '/images/37-3.png': img37_3,
  '/images/37-4.png': img37_4,
  '/images/37-5.png': img37_5,
  '/images/37.png': img37,
  '/images/4-1.png': img4_1,
  '/images/4-2.png': img4_2,
  '/images/4-3.png': img4_3,
  '/images/4-4.png': img4_4,
  '/images/4-5.png': img4_5,
  '/images/4.png': img4,
  '/images/5-1.png': img5_1,
  '/images/5-2.png': img5_2,
  '/images/5-3.png': img5_3,
  '/images/5-4.png': img5_4,
  '/images/5-5.png': img5_5,
  '/images/5.png': img5,
  '/images/6-1.png': img6_1,
  '/images/6-2.png': img6_2,
  '/images/6-3.png': img6_3,
  '/images/6-4.png': img6_4,
  '/images/6-5.png': img6_5,
  '/images/6.png': img6,
  '/images/7-1.png': img7_1,
  '/images/7-2.png': img7_2,
  '/images/7-3.png': img7_3,
  '/images/7-4.png': img7_4,
  '/images/7-5.png': img7_5,
  '/images/7.png': img7,
  '/images/8-1.png': img8_1,
  '/images/8-2.png': img8_2,
  '/images/8-3.png': img8_3,
  '/images/8-4.png': img8_4,
  '/images/8-5.png': img8_5,
  '/images/8.png': img8,
  '/images/9-1.png': img9_1,
  '/images/9-2.png': img9_2,
  '/images/9-3.png': img9_3,
  '/images/9-4.png': img9_4,
  '/images/9-5.png': img9_5,
  '/images/9.png': img9,
  '/images/example1.png': imgexample1,
  '/images/example2.png': imgexample2,
  '/images/example3.png': imgexample3,
  '/MatrixInput_36items.txt': `data:text/plain,${encodeURIComponent(input)}`
};

export default defineInstrument({
  kind: 'INTERACTIVE',
  language: 'en',
  tags: ['TestMyBrain'],
  internal: {
    edition: 1,
    name: 'TMB_MATRIX_REASONING'
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
    title: 'TMB Matrix Reasoning'
  },
  measures: {},
  validationSchema: z.object({
    results: z.array(
      z.object({
        type: z.string().nullish(),
        matrix: z.string().nullish(),
        target: z.string().nullish(),
        response: z.string().nullish(),
        responseTimestamp: z.number().nullish(),
        correct: z.number().nullish(),
        rt: z.number().nullish(),
        repeated: z.number().nullish(),
        state: z.string().nullish()
      })
    ),
    outcomes: z.object({
      score: z.number().nullish(),
      accuracy: z.number().nullish(),
      meanRTc: z.number().nullish(),
      medianRTc: z.number().nullish(),
      sdRTc: z.number().nullish(),
      flag_medianRTc: z.number().nullish(),
      flag_any: z.number().nullish(),
      responseDevice: z.string().nullish(),
      testVersion: z.string().nullish()
    })
  })
});
