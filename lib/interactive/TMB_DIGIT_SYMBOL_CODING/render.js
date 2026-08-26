// @ts-nocheck
/* eslint-disable */

import { translator } from './translator.ts';

export function render(done) {
  translator.init();

  function tFormat(key, vars) {
    var s = translator.t(key);
    if (vars) {
      for (var k in vars) s = s.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]);
    }
    return s;
  }

  var testVersion = 'TMB_DIGIT_SYMBOL_CODING.v1'; // version identifier for this test
  var chosenInput; // input type (taps or keys)
  var symbols = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // symbols used for this test
  var symbol; // the symbol to show (1-9)
  var digit; // the digit corresponding to the symbol
  var correct; // correct=1, wrong=0
  var testStart = 0; // start timestamp of the test
  var score = 0; // accumulated score
  var results = []; // array to store trials details and responses
  var outcomes = {}; // object containing outcome variables
  var frameSequence = []; // object containing the sequence of frames and their properties
  var frame; // single frame object
  var presentationTime; // variable for logging trial presentation time
  var feedbackTimeoutRef = null; // reference to the response feedback timer
  var nopractice; // URL parameter: no practice trials
  var duration; // URL parameter: duration of the test in seconds
  var seed; // URL parameter: random number generator seed
  var debug; // URL parameter: output to console
  var demo; // URL parameter: run in demo mode
  var showresults; // URL parameter: if they want to show results in a popup window
  var autosave; // URL parameter: if they want to save data in a file automatically
  var filename; // URL parameter: filename for data
  var useChooseInput; // URL parameter: whether to use chooseInput
  var usage = ''; // URL parameter: show usage
  var practiceChoice = null; // whether the participant chose to complete optional practice trials

  // how long the chosen digit stays visible under the key, in ms
  var feedbackDuration = 500;

  // the digit that codes a given symbol
  function digitOf(symbol) {
    return symbol % 3 === 0 ? 3 : symbol % 3;
  }

  // markup for the key: nine symbols in a row, each over its digit.
  // built from spans, because showFrame() hides every div in the document,
  // so a div-based key would be invisible on the instruction screens
  function keyMarkup(modifier) {
    var cells = '';
    var i;

    for (i = 0; i < symbols.length; i++)
      cells += "<span class='keyCell'><img src='images/" + symbols[i] + ".png' alt=''></span>";
    for (i = 0; i < symbols.length; i++)
      cells += "<span class='keyCell'><img src='images/resp" + digitOf(symbols[i]) + ".png' alt=''></span>";

    return "<span class='key" + (modifier ? ' ' + modifier : '') + "'>" + cells + '</span>';
  }

  // show the digit the participant chose under the key.
  // the next symbol is presented immediately, so the feedback from the
  // previous trial overlaps the start of the next one
  function showFeedback(responseDigit) {
    var el = getID('feedback');
    if (!el) return;

    if (feedbackTimeoutRef) clearTimeout(feedbackTimeoutRef);

    el.src = 'images/resp' + responseDigit + '.png';
    el.style.visibility = 'visible';

    feedbackTimeoutRef = setTimeout(function () {
      el.style.visibility = 'hidden';
      feedbackTimeoutRef = null;
    }, feedbackDuration);
  }

  // clear the feedback digit before leaving the trial screen
  function clearFeedback() {
    var el = getID('feedback');

    if (feedbackTimeoutRef) {
      clearTimeout(feedbackTimeoutRef);
      feedbackTimeoutRef = null;
    }
    if (el) el.style.visibility = 'hidden';
  }

  // the frames making up the trial screen, minus the response buttons,
  // which are only needed when responding by touch
  function trialFrames() {
    var frames = ['container', 'probeRow', 'keyRow', 'feedbackRow'];
    if (chosenInput === 'taps') frames.push('response');
    return frames;
  }

  // message for optional practice trials
  function showOptionalPractice() {
    setTimeout(function () {
      showAlert(
        '<h3>' +
          translator.t('optionalPractice.heading') +
          '</h3>' +
          translator.t('optionalPractice.prompt') +
          '<br><br><br>' +
          "<label><input class='radioAlign' id='practiceSkip' type='radio' name='practice' value='skip' checked>" +
          translator.t('optionalPractice.skip') +
          '</label><br><br>' +
          "<label><input class='radioAlign' id='practiceNoSkip' type='radio' name='practice' value='noSkip'>" +
          translator.t('optionalPractice.view') +
          '</label><br>' +
          '<br><br>',
        translator.t('buttons.clickContinue'),
        function () {
          practiceChoice = document.getElementById('practiceSkip').checked ? 'skip' : 'noSkip';
          setFrameSequence();
        },
        '20pt'
      );
    }, 50);
  }

  // specify actions to take on user input
  tmbUI.onreadyUI = function () {
    // if we are debugging and there was an error, log the message
    if (debug === 'true' && tmbUI.message) console.log(tmbUI.message);

    // the digit chosen by the participant
    var responseDigit = tmbUI.response ? tmbUI.response.slice(-1) : '';

    // is the response correct?
    correct = parseInt(responseDigit) === frame.digit ? 1 : 0;

    // confirm the response by showing the chosen digit under the key
    if (tmbUI.status !== 'timeout' && /^[123]$/.test(responseDigit)) showFeedback(responseDigit);

    // store the results
    if (frame.type === 'practice' || (frame.type === 'test' && tmbUI.status !== 'timeout')) {
      results.push({
        type: frame.type, // one of practice or test
        symbol: frame.symbol, // symbol index
        digit: frame.digit, // symbol digit
        response: responseDigit, // the key or element chosen
        correct: correct, // boolean correct
        rt: tmbUI.rt, // response time
        stimOnsetTimestamp: presentationTime, // stimulus presentation timestamp
        responseTimestamp: tmbUI.downTimestamp, // response timestamp
        state: tmbUI.status // state of the response handler
      });

      // if we are debugging, log the results
      if (debug === 'true') logResults(results, 'inc');
    }
    // log the final trial, which times out and ends the test
    else if (frame.type === 'test' && tmbUI.status === 'timeout') {
      results.push({
        type: frame.type, // one of practice or test
        symbol: frame.symbol, // symbol index
        digit: frame.digit, // symbol digit
        response: null,
        correct: null,
        rt: null,
        stimOnsetTimestamp: presentationTime, // stimulus presentation timestamp
        responseTimestamp: now(),
        state: 'timeout'
      });
    }

    if (frame.type === 'practice') {
      // on practice trials, if the input event returns a timeout
      // or the response is not correct,
      // stop the sequence and advise the participant
      if (tmbUI.status === 'timeout' || !correct) {
        // rewind the frame sequence by one frame,
        // so that the same frame is displayed again
        frameSequence.unshift(frame);

        clearFeedback();

        showAlert(
          '<img src=' +
            frame.source +
            " alt='Symbol'><br>" +
            '<br>' +
            (chosenInput === 'taps'
              ? translator.t('practiceFeedback.rememberTaps') +
                '<br><br>' +
                tFormat('practiceFeedback.youShouldTap', { digit: frame.digit }) +
                '<br>'
              : translator.t('practiceFeedback.rememberKeys') +
                '<br><br>' +
                tFormat('practiceFeedback.youShouldKey', { digit: frame.digit }) +
                ' <br>') +
            translator.t('practiceFeedback.whenYouSee') +
            '<br><br>',
          chosenInput === 'taps' ? translator.t('buttons.clickRetry') : '',
          function () {
            showFrame('null');
            nextTrial();
          },
          '20pt',
          null,
          chosenInput === 'taps' ? null : translator.t('buttons.spaceRetry')
        );
      } else {
        nextTrial();
      }
    } else if (frame.type === 'test') {
      if (tmbUI.status !== 'timeout') {
        // choose a symbol randomly, but avoid 1-back repetitions
        while (symbols[(symbol = randInt(1, symbols.length)) - 1] === frame.symbol) {}
        digit = digitOf(symbol);

        // set up the next frame
        frameSequence.push({
          type: 'test',
          message: '',
          symbol: symbols[symbol - 1],
          digit: digit,
          source: 'images/' + symbols[symbol - 1] + '.png'
        });
      }

      nextTrial();
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
      if (frame.type === 'begin') {
        clearFeedback();
        showAlert(
          frame.message,
          chosenInput === 'taps' ? translator.t('buttons.clickInstructions') : '',
          function () {
            showFrame('null');
            nextTrial();
          },
          '20pt',
          null,
          chosenInput === 'taps' ? null : translator.t('buttons.spaceInstructions')
        );
      }
      // else if it's a message frame, show it
      else if (frame.type === 'message') {
        clearFeedback();
        showAlert(
          frame.message,
          chosenInput === 'taps' ? translator.t('buttons.clickContinue') : '',
          function () {
            showFrame('null');
            nextTrial();
          },
          '20pt',
          null,
          chosenInput === 'taps' ? null : translator.t('buttons.spaceContinue')
        );
      }
      // deal with practice and test frames
      else {
        // hide the cursor
        hideCursor('document.body');

        // set the image source of the symbol
        getID('probe').src = frame.source;

        // set response timeout:
        // - for practice trials -> a fixed interval
        // - for test trials -> what's left of 'duration' seconds since
        //                      start, with a minimum of 150 ms
        if (frame.type === 'practice') tmbUI.timeout = 5000;
        else {
          if (!testStart) testStart = now();
          if (demo === 'true') tmbUI.timeout = 10000 - (now() - testStart);
          else tmbUI.timeout = duration * 1e3 - (now() - testStart);

          // give participant 150 ms for last trial if time has not expired
          if (tmbUI.timeout < 150 && tmbUI.timeout > 0) {
            tmbUI.timeout = 150;
          }
          // end test immediately if time has expired
          else if (tmbUI.timeout <= 0) {
            nextTrial();
            return;
          }
        }

        requestAnimationFrame(function () {
          showFrame(trialFrames());
          presentationTime = now();
          tmbUI.getInput();
        });
      }
    }
    // else the sequence is empty, we are done!
    else {
      clearFeedback();
      showCursor('document.body');

      // all test trials (excluding practice and timeouts)
      var tmp1 = results.filter(function (obj) {
        return obj.type !== 'practice' && obj.state !== 'timeout';
      });

      // all correct rts
      var tmp2 = tmp1
        .filter(function (obj) {
          return obj.correct === 1;
        })
        .pluck('rt');

      // response device
      var tmp3 = tmp1[0] ? tmp1[0].state : null;
      tmp3 = /key/i.test(tmp3)
        ? 'keyboard'
        : /touch/i.test(tmp3)
          ? 'touch'
          : /mouse/i.test(tmp3)
            ? 'mouse'
            : /pen/i.test(tmp3)
              ? 'pen'
              : 'unknown';

      // compute score and outcome variables
      score = outcomes.score = tmp2.length;
      outcomes.num_correct = tmp2.length;
      outcomes.num_responses = tmp1.length;
      outcomes.meanRTc = tmp2.length ? tmp2.average().round(2) : null;
      outcomes.medianRTc = tmp2.length ? tmp2.median().round(2) : null;
      outcomes.sdRTc = tmp2.length > 1 ? tmp2.sd().round(2) : null;
      outcomes.accuracy = outcomes.num_responses > 0 ? (outcomes.num_correct / outcomes.num_responses).round(4) : null;
      outcomes.cvRTc = tmp2.length > 1 ? (outcomes.sdRTc / outcomes.medianRTc).round(4) : null;
      outcomes.didPracticeTrials = nopractice === 'false' || practiceChoice === 'noSkip' ? 1 : 0;
      outcomes.symbolsUsed = symbols.toString();
      outcomes.responseDevice = tmp3;
      outcomes.testVersion = testVersion;

      outcomes.type = 'summaryScores';
      results.push(outcomes);

      done(results);
    }
  }

  // generate the frameSequence object,
  // where each object's element codes the parameters
  // for a single trial/frame
  function setFrameSequence() {
    var testMessage;

    // messages
    testMessage = {
      begin: '<h2>' + translator.t('instructions.title') + '</h2>' + keyMarkup() + '<br><br>',
      instructions: [
        '<h3>' +
          translator.t('instructions.heading') +
          '</h3>' +
          '<br>' +
          keyMarkup() +
          '<br><br>' +
          translator.t('instructions.eachSymbol') +
          '<br><br>',
        "<img src='images/1.png' alt='Instructions'><br>" +
          keyMarkup('key--small') +
          '<br><br>' +
          (chosenInput === 'taps'
            ? translator.t('instructions.whenSymbolTaps')
            : translator.t('instructions.whenSymbolKeys')) +
          '<br>' +
          translator.t('instructions.hereItIs') +
          '<br><br>'
      ],
      practice: [
        "<img src='images/2.png' alt='Instructions'><br>" +
          keyMarkup('key--small') +
          '<br><br>' +
          translator.t('instructions.letsPractice') +
          '<br><br><br>',
        translator.t('instructions.excellent') + '<br><br>'
      ],
      test: tFormat('instructions.scoreInfo', { duration: duration }) + '<br><br>'
    };

    if (nopractice !== 'optional') {
      // type of frame to display
      var frameType = ['begin', 'message', 'message'];

      // message to display
      var frameMessage = [testMessage.begin, testMessage.instructions[0], testMessage.instructions[1]];

      // symbol to display
      var frameSymbol = [0, 0, 0];

      // corresponding digit
      var frameDigit = [0, 0, 0];
    } else {
      // type of frame to display
      var frameType = ['message', 'message'];

      // message to display
      var frameMessage = [testMessage.instructions[0], testMessage.instructions[1]];

      // symbol to display
      var frameSymbol = [0, 0];

      // corresponding digit
      var frameDigit = [0, 0];
    }

    // add practice trials as needed
    if (practiceChoice === 'noSkip' || nopractice === 'false') {
      frameType = frameType.concat(['message', 'practice', 'practice', 'practice', 'message']);
      frameMessage = frameMessage.concat([testMessage.practice[0], '', '', '', testMessage.practice[1]]);
      frameSymbol = frameSymbol.concat([0, 1, 6, 8, 0]);
      frameDigit = frameDigit.concat([0, 1, 3, 2, 0]);
    }

    // add test trials
    frameType = frameType.concat(['message', 'test']);
    frameMessage = frameMessage.concat([testMessage.test, '']);
    frameSymbol = frameSymbol.concat([0, 4]);
    frameDigit = frameDigit.concat([0, 1]);

    // push all components into the frames chain
    for (var i = 0; i < frameType.length; i++) {
      frameSequence.push({
        type: frameType[i],
        message: frameMessage[i],
        symbol: symbols[frameSymbol[i] - 1],
        digit: frameDigit[i],
        source: 'images/' + symbols[frameSymbol[i] - 1] + '.png'
      });
    }

    // start displaying the frame sequence
    nextTrial();
  }

  function setup(input) {
    // determine events to listen to and
    // customize response elements
    chosenInput = input;
    if (chosenInput === 'taps') {
      tmbUI.UIevents = ['taps'];
      tmbUI.UIelements = ['resp1', 'resp2', 'resp3'];
    } else {
      tmbUI.UIevents = ['keys'];
      tmbUI.UIkeys = [
        keyToCode('1'),
        keyToCode('2'),
        keyToCode('3'),
        keyToCode('numpad1'),
        keyToCode('numpad2'),
        keyToCode('numpad3')
      ];
      tmbUI.UIelements = [];
    }

    // no highlight: the response is confirmed by the digit shown under the
    // key, and highlighting would delay the next symbol by 250 ms
    tmbUI.highlight = '';

    // preload images and start the testing sequence
    var images = [];

    for (var i = 0; i < symbols.length; i++) images[i] = 'images/' + symbols[i] + '.png';
    images.push('images/resp1.png', 'images/resp2.png', 'images/resp3.png');

    imagePreLoad(images, {
      pipeline: false,
      callBack: function () {
        getID('keyRow').innerHTML = keyMarkup();
        // either show optional practice trial screen, or set the frame sequence
        nopractice === 'optional' ? showOptionalPractice() : setFrameSequence();
      }
    });
  }

  // on page load completion, set up initial parameters,
  // call the frameSequence generator
  // and start the trials sequence
  (function () {
    var copyright = 'Copyright ' + document.querySelector('meta[name="copyright"]').content;
    var scriptName = window.location.pathname.split('/').pop();

    // add appropriate meta viewport for scaling
    setBodyScale(760, 620);

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
          '<i>nopractice=false</i> -- omits practice trials [true, false, optional]<br>' +
          '<i>duration=90</i> -- test duration in seconds<br>' +
          '<i>seed=123</i> -- random number generator seed<br>' +
          '<i>demo=true</i> -- runs in demo mode only for 10 seconds<br>' +
          '<i>chooseinput=true</i> -- whether we use chooseInput when touch is detected<br>' +
          '<i>debug=true</i> -- outputs trial by trial info to the console<br>' +
          '<i>showresults=true</i> -- allows to save results locally in a file<br>' +
          '<i>autosave=true</i> -- will attempt to save results automatically to file<br>' +
          '<i>filename=subject1.csv</i> -- the filename to save results to<br>' +
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

    // check if they want to load results in a new page when the test is over,
    // if data is to be saved automatically to a file and the filename
    showresults = getUrlParameters('showresults', '', true);
    autosave = getUrlParameters('autosave', '', true);
    filename = getUrlParameters('filename', '', true);

    // see if they don't want practice or optional practice
    nopractice = getUrlParameters('nopractice', '', true);
    if (!nopractice) nopractice = 'false';
    else if (!(nopractice === 'true' || nopractice === 'false' || nopractice === 'optional')) {
      showAlert(
        "Error: URL parameter 'nopractice' must<br>" + "be set to 'true', 'false', or 'optional'.<br><br>",
        '',
        null,
        '20pt'
      );
      return;
    }

    // check if they want to bypass chooseInput
    useChooseInput = getUrlParameters('chooseinput', '', true);
    if (!useChooseInput || useChooseInput === 'true') {
      useChooseInput = true;
    } else if (useChooseInput === 'false') {
      useChooseInput = false;
    } else {
      showAlert(
        "Error: URL parameter 'chooseinput' must<br>" + "be set to 'true' or 'false'.<br><br>",
        '',
        null,
        '20pt'
      );
      return;
    }

    // set the random generator's seed
    seed = getUrlParameters('seed', '', true);
    if (!(seed = parseInt(seed))) seed = 'DScoding';
    Math.seedrandom(seed);

    // set the duration of the test in seconds
    duration = getUrlParameters('duration', '', true);
    if (!(duration = parseInt(duration))) duration = 90;

    // disable spurious user interactions
    disableSelect();
    disableRightClick();
    disableDrag();
    disableDoubleTapZoom();

    if (!hasTouch) setup('keys');
    else {
      if (useChooseInput) chooseInput({ keyboard: true, touch: true }, setup);
      else setup('taps');
    }
  })();
}
