// @ts-nocheck
/* eslint-disable */

import { translator } from './translator.ts';

// reportOrder replaces the source's 'order' URL parameter: how to report
// digits ['forward','backward'], fixed by the instrument
export function render(done, reportOrder) {
  translator.init();

  // substitute {name} placeholders in a translated string
  function tFormat(key, vars) {
    var s = translator.t(key);
    for (var k in vars) s = s.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]);
    return s;
  }

  var testVersion = 'DigitSpan_Main.v1.May23'; // version identifier for this test
  var chosenInput; // input type (taps or keys)
  var previous = true; // true => previous correct, false => wrong
  var response = ''; // the user's response
  var testStart = 0; // start timestamp of the test
  var chainSeq = []; // array of stimulus events to schedule
  var frameSequence = []; // object containing the sequence of frames and their properties
  var frame; // single frame object
  var results = []; // array to store trials details and responses
  var outcomes = {}; // object containing outcome variables
  var score = 0; // score variable
  var seed; // URL parameter: random generator seed
  var debug; // URL parameter: output to console
  var demo; // URL parameter: run in demo mode
  var usage = ''; // URL parameter: show usage

  // specify actions to take on user input
  tmbUI.onreadyUI = function () {
    // if we are debugging and there was an error, log the message
    if (debug === 'true' && tmbUI.message) console.log(tmbUI.message);

    // deal with timeout
    if (tmbUI.status === 'timeout') {
      // see how many digits remain to be entered
      var digits = frame.digits.length - response.length;

      // warn the user
      getID('feedback').innerHTML = tFormat(
        digits === 1 ? 'trial.pressOneMore' : response.length === 0 ? 'trial.pressAll' : 'trial.pressMore',
        { count: digits }
      );
      // keep getting input
      tmbUI.getInput();
    }
    // manage the response
    else {
      // if they pressed 'backspace', then delete previous response
      if (tmbUI.response === 'backspace') {
        getID('digits').innerHTML = getID('digits').innerHTML.slice(0, -1);
        response = response.slice(0, -1);
      }
      // else show the number pressed
      else {
        // for backward report, make a dereferenced copy of the digits
        // array, then reverse it
        if (reportOrder === 'backward') {
          var corr = frame.digits.slice();
          corr = corr.reverse();
        }

        // show the number pressed
        getID('digits').innerHTML += tmbUI.response.slice(-1);
        response += tmbUI.response.slice(-1);
      }

      // if not done, keep getting input
      if (response.length < frame.digits.length) {
        if (frame.type === 'test') getID('feedback').innerHTML = '';
        tmbUI.getInput();
      }
      // they got all correct
      else if (
        (reportOrder === 'forward' && response === frame.digits.join('')) ||
        (reportOrder === 'backward' && response === corr.join(''))
      ) {
        // save the results
        results.push({
          type: frame.type, // one of practice or test
          digits: frame.digits.join(''), // the digits
          response: response, // the response
          correct: 1, // boolean correct
          rt: (now() - testStart).round(2), // rt
          state: tmbUI.status // state of the response handler
        });

        // if we are debugging, log the results
        if (debug === 'true') logResults(results, 'inc');

        // clear the response and remember they were correct
        response = '';
        previous = true;

        // give feedback during practice
        if (frame.type === 'practice') getID('feedback').innerHTML = translator.t('trial.correct');
        else getID('feedback').innerHTML = '';

        // if it's the last frame, set the score
        if (!frameSequence.length) score = frame.digits.length;

        setTimeout(function () {
          showFrame(null);
          nextTrial();
        }, 1000);
      }
      // they made errors: the score is the highest capacity level
      // at which they made zero or one error
      else {
        // save the results
        results.push({
          type: frame.type, // one of practice or test
          digits: frame.digits.join(''), // the digits
          response: response, // the response
          correct: 0, // boolean correct
          rt: (now() - testStart).round(2), // rt
          state: tmbUI.status // state of the response handler
        });

        // if we are debugging, log the results
        if (debug === 'true') logResults(results, 'inc');

        // clear the response
        response = '';

        // during practice give feedback and rewind
        if (frame.type === 'practice') {
          getID('feedback').innerHTML = tFormat('trial.tryAgain', {
            digits: reportOrder === 'forward' ? frame.digits.join('') : corr.join('')
          });

          // rewind the frame sequence by one frame,
          // so that the same frame is displayed again
          frameSequence.unshift(frame);
        }
        // they made an error on the last frame of the sequence
        else if (!frameSequence.length) {
          // two errors at the last capacity level
          if (previous === false) score = frame.digits.length - 1;
          // only one error at the last level
          else score = frame.digits.length;
        }
        // they made two errors at the same capacity level
        else if (frame.digits.length < frameSequence[0].digits.length && previous === false) {
          score = frame.digits.length - 1;
          frameSequence = [];
        }
        // remember the error
        else previous = false;

        setTimeout(
          function () {
            showFrame(null);
            nextTrial();
          },
          frame.type === 'practice' ? 2000 : 1000
        );
      }
    }
  };

  // iterate through the frameSequence object,
  // implementing stimulus presentation,
  // response collection and data management
  function nextTrial() {
    // read the frame sequence one frame at a time
    frame = frameSequence.shift();
    if (frame) {
      // check if it's the startup frame
      if (frame.type === 'begin')
        showAlert(
          frame.message,
          translator.t('buttons.clickInstructions'),
          function () {
            showFrame(null);
            nextTrial();
          },
          '20pt'
        );
      // else if it's a message frame, show it
      else if (frame.type === 'message')
        showAlert(
          frame.message,
          translator.t('buttons.clickContinue'),
          function () {
            showFrame(null);
            nextTrial();
          },
          '20pt'
        );
      // deal with practice and test frames
      else {
        // build the stimulus chain

        // clear the chain
        chainSeq = [];

        // this is for closure
        function setDigit(i) {
          chainSeq.push(1000, function () {
            getID('digits').innerHTML = frame.digits[i];
          });
        }

        chainSeq.push(
          function () {
            // give instructions only on practice trials
            if (frame.type === 'practice') getID('feedback').innerHTML = translator.t('trial.memorize');
            else getID('feedback').innerHTML = '';

            // erase the digits
            getID('digits').innerHTML = '';
          },
          1000,
          function () {
            if (chosenInput === 'taps') showFrame('container', 'responseContainer', 'feedback', 'digits');
            else showFrame('container', 'feedback', 'digits');
          }
        );

        for (var i = 0; i < frame.digits.length; i++) setDigit(i);

        chainSeq.push(1000, function () {
          getID('digits').innerHTML = '';
          getID('feedback').innerHTML = translator.t('trial.nowPress');
          testStart = now();
          tmbUI.getInput();
        });

        tmbUI.timeout = 3000;

        requestAnimationFrame(function () {
          chainTimeouts(chainSeq);
        });
      }
    }
    // else the sequence is empty, we are done!
    else {
      // all test trials (excluding practice and timeouts)
      var tmp1 = results.filter(function (obj) {
        return obj.type !== 'practice' && obj.state !== 'timeout';
      });

      // response device
      var tmp2 = tmp1[0] ? tmp1[0].state : null;
      tmp2 = /key/i.test(tmp2)
        ? 'keyboard'
        : /touch/i.test(tmp2)
          ? 'touch'
          : /mouse/i.test(tmp2)
            ? 'mouse'
            : /pen/i.test(tmp2)
              ? 'pen'
              : 'unknown';

      // compute score and outcome variables
      outcomes.score = score;
      outcomes.numCorrect = tmp1.length ? tmp1.pluck('correct').sum() : 0;
      outcomes.span = score;
      outcomes.reportOrder = reportOrder;
      outcomes.responseDevice = tmp2;
      outcomes.testVersion = testVersion;

      // if debugging, output to console
      if (debug === 'true') logResults([outcomes], 'cum');

      outcomes.type = 'summaryScores';
      done({ results, outcomes });
    }
  }

  // generate the frameSequence object,
  // where each object's element codes the parameters
  // for a single trial/frame
  function setFrameSequence() {
    var testMessage;

    // messages
    testMessage = {
      begin:
        '<h2>' +
        translator.t('instructions.title') +
        '</h2>' +
        (reportOrder === 'forward'
          ? translator.t('instructions.versionForward')
          : translator.t('instructions.versionBackward')) +
        '<br>' +
        "<img src='images/begin.webp' alt='Title'><br><br>",
      practice: [
        '<h3>' +
          translator.t('instructions.heading') +
          '</h3>' +
          "<img src='images/digitsStream.webp' alt='Instructions'><br>" +
          translator.t('instructions.tryToRemember') +
          '<br><br>',
        '<h3>' +
          translator.t('instructions.heading') +
          '</h3>' +
          "<img src='images/" +
          reportOrder +
          "DigitsSeq.webp' alt='Instructions'><br>" +
          (chosenInput === 'taps' ? translator.t('instructions.thenTap') : translator.t('instructions.thenKeys')) +
          '<br>' +
          (reportOrder === 'forward'
            ? translator.t('instructions.inOrderSeen')
            : translator.t('instructions.inReverseOrder')) +
          '<br>' +
          translator.t('instructions.letsPractice') +
          '<br><br>'
      ],
      test:
        translator.t('instructions.excellent') + '<br><br>' + translator.t('instructions.correctMistakes') + '<br><br>'
    };

    // type of frame to display
    var frameType = [
      'begin',
      'message',
      'message',
      'practice',
      'practice',
      'message',
      'test',
      'test',
      'test',
      'test',
      'test',
      'test',
      'test',
      'test',
      'test',
      'test',
      'test',
      'test',
      'test',
      'test',
      'test',
      'test',
      'test',
      'test',
      'test',
      'test'
    ];

    // message to display
    var frameMessage = [
      testMessage.begin,
      testMessage.practice[0],
      testMessage.practice[1],
      '',
      '',
      testMessage.test,
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ];

    var sequence = [];
    for (var i = 0; i < 8; i++) {
      sequence[i * 2] = range(1, 9)
        .shuffle()
        .slice(0, i + 2);
      sequence[i * 2 + 1] = range(1, 9)
        .shuffle()
        .slice(0, i + 2);
    }
    sequence[16] = range(1, 9).shuffle().concat(randInt(1, 9));
    sequence[17] = range(1, 9).shuffle().concat(randInt(1, 9));
    sequence[18] = range(1, 9).shuffle().concat(range(1, 9).shuffle().slice(0, 2));
    sequence[19] = range(1, 9).shuffle().concat(range(1, 9).shuffle().slice(0, 2));

    var frameDigits = [[], [], [], [1, 2], [1, 2, 3], []];
    frameDigits = frameDigits.concat(sequence);

    // push all components into the frames chain
    for (i = 0; demo === 'true' ? i < 10 : i < frameType.length; i++) {
      frameSequence.push({
        type: frameType[i],
        message: frameMessage[i],
        digits: frameDigits[i]
      });
    }
  }

  function setup(input) {
    // determine events to listen to and
    // customize response elements
    chosenInput = input;
    if (chosenInput === 'taps') {
      tmbUI.UIevents = 'taps';
      tmbUI.UIelements = [
        'response1',
        'response2',
        'response3',
        'response4',
        'response5',
        'response6',
        'response7',
        'response8',
        'response9',
        'backspace'
      ];
      tmbUI.highlight = 'responseHighlight';
    } else {
      tmbUI.UIevents = ['keys'];
      tmbUI.UIkeys = [
        keyToCode('1'),
        keyToCode('2'),
        keyToCode('3'),
        keyToCode('4'),
        keyToCode('5'),
        keyToCode('6'),
        keyToCode('7'),
        keyToCode('8'),
        keyToCode('9'),
        keyToCode('numpad1'),
        keyToCode('numpad2'),
        keyToCode('numpad3'),
        keyToCode('numpad4'),
        keyToCode('numpad5'),
        keyToCode('numpad6'),
        keyToCode('numpad7'),
        keyToCode('numpad8'),
        keyToCode('numpad9'),
        keyToCode('backspace')
      ];
      getID('container').style.height = '600px';
      getID('container').style.marginTop = '-300px';
    }
    tmbUI.timeout = 4000;

    // create the trials chain
    setFrameSequence();

    // preload images and start the testing sequence
    imagePreLoad(['images/begin.webp', 'images/digitsStream.webp', 'images/' + reportOrder + 'DigitsSeq.webp'], {
      callBack: nextTrial
    });
  }

  // set up initial parameters,
  // call the frameSequence generator
  // and start the trials sequence
  (function () {
    var copyright = 'Copyright ' + document.querySelector('meta[name="copyright"]').content;
    var scriptName = window.location.pathname.split('/').pop();

    // see if they are just asking for help
    if ((usage = getUrlParameters('help', '', true))) {
      showAlert(
        "<p id='helpSpan'>" +
          '<b>' +
          document.title +
          '</b><br>' +
          '<i>' +
          copyright +
          '</i><br><br>' +
          '<b>Usage:</b>' +
          '<br>' +
          scriptName +
          '?urlParam1=1&urlParam2=0<br><br>' +
          '<b>URL Parameters</b>:<br>' +
          '<i>seed=123</i> -- random number generator seed<br>' +
          '<i>demo=true</i> -- runs in demo mode, only a few test trials<br>' +
          '<i>debug=true</i> -- outputs trial by trial info to the console<br>' +
          '<i>help</i> -- print this message'
      );
      document.getElementById('helpSpan').style.textAlign = 'left';
      document.getElementById('helpSpan').style.margin = '50px';
      return;
    }

    // check if this is a debug session
    debug = getUrlParameters('debug', '', true);

    // check if they want a demo run
    demo = getUrlParameters('demo', '', true);

    // set the random generator's seed
    seed = getUrlParameters('seed', '', true);
    if (!(seed = parseInt(seed))) {
      seed = reportOrder + 'Span';
    } else {
      seed = reportOrder + parseInt(seed);
    }
    Math.seedrandom(seed);

    // disable spurious user interactions
    disableSelect();
    disableRightClick();
    disableDrag();
    disableDoubleTapZoom();

    // add appropriate meta viewport for scaling
    setBodyScale(620, 900);

    if (!hasTouch) setup('keys');
    else chooseInput({ keyboard: true, touch: true }, setup);
  })();
}
