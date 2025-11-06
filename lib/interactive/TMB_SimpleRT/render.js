// @ts-nocheck
/* eslint-disable */

export function render(done) {
  var testVersion; // version identifier for this test
  var chosenInput; // input type (taps or keys)
  var score = 0; // score variable
  var outcomes = {}; // object containing outcome variables
  var results = []; // array to store trials details and responses
  var frameSequence = []; // object containing the sequence of frames and their properties
  var ch; // chain of timeouts for stimulus presentation
  var frame; // single frame object
  var seed; // URL parameter: random generator seed
  var ntrials; // URL parameter: number of test trials
  var nopractice; // URL parameter: no practice trials
  var useChooseInput; // URL parameter: whether to use chooseInput
  var debug; // URL parameter: output to console
  var demo; // URL parameter: run in demo mode
  var showresults; // URL parameter: if they want to show results in a popup window
  var autosave; // URL parameter: if they want to save data in a file automatically
  var filename; // URL parameter: filename for data
  var usage = ''; // URL parameter: show usage

  // specify actions to take on user input
  tmbUI.onreadyUI = function () {
    // clear the stimulus chain, in case it's still running
    clearChainTimeouts(ch);

    // if we are debugging and there was an error, log the message
    if (debug === 'true' && tmbUI.message) console.log(tmbUI.message);

    // store the results
    results.push({
      type: frame.type, // one of practice or test
      foreperiod: frame.delay, // go! foreperiod
      response: tmbUI.response, // the key or button pressed
      rt: tmbUI.rt, // delay b/w onset of go! and response
      dwell: tmbUI.dwell, // keyup - keydown
      state: tmbUI.status // state of the response handler
    });

    // if we are debugging, log the results
    if (debug === 'true') logResults(results, 'inc');

    // if the input event returns a timeout,
    // stop the sequence and advise the participant
    if (tmbUI.status === 'timeout') {
      // rewind the frame sequence by one frame,
      // so that the same frame is displayed again
      frameSequence.unshift(frame);

      showAlert(
        'Please respond within 2 seconds.<br><br>' +
          'When you see <b>GO!</b>,<br>' +
          (chosenInput === 'taps'
            ? '<b>TAP</b> as quickly as you can.<br><br>'
            : 'press the <b>SPACE BAR</b><br>' + 'as quickly as you can.<br><br>'),
        chosenInput === 'taps' ? 'Click here to retry' : '',
        function () {
          hideCursor('document.body');
          showFrame('null');
          setTimeout(function () {
            nextTrial();
          }, 1000);
        },
        '20pt',
        null,
        chosenInput === 'taps' ? null : 'Press the SPACEBAR to retry'
      );
    }
    // else all is good, advance to the next trial
    else {
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
      if (frame.type === 'begin')
        showAlert(
          frame.message,
          chosenInput === 'taps' ? 'Click here for instructions' : '',
          function () {
            nextTrial();
          },
          '20pt',
          null,
          chosenInput === 'taps' ? null : 'Press the SPACEBAR for instructions'
        );
      // if it's a message frame, show it
      else if (frame.type === 'message')
        showAlert(
          frame.message,
          chosenInput === 'taps' ? 'Click here to continue' : '',
          function () {
            hideCursor('document.body');
            showFrame('null');
            setTimeout(function () {
              nextTrial();
            }, 1000);
          },
          '20pt',
          null,
          chosenInput === 'taps' ? null : 'Press the SPACEBAR to continue'
        );
      // else show the go signal
      else {
        hideCursor('document.body');

        // chain the stimulus presentation
        ch = chainTimeouts(
          function () {
            requestAnimationFrame(function () {
              showFrame(null);
              //console.log(frame.delay);
            });
          },
          700,
          function () {
            requestAnimationFrame(function () {
              showFrame('hold');
            });
          },
          frame.delay,
          function () {
            requestAnimationFrame(function () {
              showFrame('go');
              tmbUI.getInput();
            });
          }
        );
      }
    }
    // else the sequence is empty, we are done!
    else {
      showCursor('document.body');

      // all test trials (excluding practice and timeouts)
      var tmp1 = results.filter(function (obj) {
        return obj.type !== 'practice' && obj.state !== 'timeout';
      });

      // all rts
      var tmp2 = tmp1.pluck('rt');

      // response device
      var tmp3 = tmp1[0].state;
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
      if (tmp2.length) {
        // score is 10000/avgRT, capped at 100 for avgRT<=100ms
        score = tmp2.average();
        score = score < 100 ? 100 : 10000 / score;
        score = score.round(2);
      } else score = 0;
      outcomes.score = score;

      outcomes.meanRT = tmp2.length ? tmp2.average().round(2) : 0;
      outcomes.medianRT = tmp2.length ? tmp2.median().round(2) : 0;
      outcomes.sdRT = tmp2.length ? tmp2.sd().round(2) : 0;
      outcomes.responseDevice = tmp3;
      outcomes.testVersion = testVersion;
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
        '<h2>Fast Reactions</h2><br>' +
        "<img src='SimpleRT.gif' alt='Title'><br><br>" +
        'How fast can you react?<br><br>',
      practice: [
        '<h3>Instructions:</h3>' +
          "<img src='SimpleRT.gif' alt='Title'><br><br>" +
          'When you see <b>GO!</b><br>' +
          (chosenInput === 'taps' ? '<b>TAP</b> ' : 'press the <b>SPACE BAR</b><br>') +
          'as quickly as you can.<br><br>' +
          'Use a finger on your writing hand.<br><br>',
        'Excellent!<br>' + 'You have completed the practice.<br><br>' + "Now let's do more.<br><br>"
      ],
      test:
        'When you see <b>GO!</b><br>' +
        (chosenInput === 'taps' ? '<b>TAP</b> ' : 'press the <b>SPACE BAR</b><br>') +
        'as quickly as you can.<br><br>'
    };

    // type of frame to display
    var frameType = ['begin'];

    // message to display
    var frameMessage = [testMessage.begin];

    // Practice sequence

    if (!nopractice || nopractice === 'false') {
      frameType = frameType.concat(['message', 'practice', 'practice', 'practice', 'message']);
      frameMessage = frameMessage.concat([testMessage.practice[0], '', '', '', testMessage.practice[1]]);
    }

    frameType = frameType.concat(['message']);
    frameMessage = frameMessage.concat([testMessage.test]);

    // push all components into the frames chain
    for (var i = 0; i < frameType.length; i++) {
      frameSequence.push({
        type: frameType[i],
        message: frameMessage[i],
        delay: 1000
      });
    }

    // Test sequence

    // We want a constant hazard rate for the go signal across trials,
    // to avoid foreperiod effects.
    // Go signal delay is exponential random between 0-1000 ms
    // (to this we add a fixed 500ms delay).
    // The probability density of the go signal delay
    // is p(t)=1/350*exp(-t/350), its cumulative is P(t)=1-exp(-t/350),
    // its mean and SD are m=s=350 and its hazard rate is H(t)=1/350.
    // The random generator is t=-350*ln(U), U=rand(0,1).
    // Random delays are quantized to 200, 400, 600, 800 and 1000 (add 500).
    var frameDelay = [
      1300, 700, 700, 700, 700, 1100, 700, 1100, 900, 900, 700, 700, 1300, 1100, 1300, 700, 900, 700, 1500, 700, 1500,
      900, 900, 700, 1100, 900, 700, 900, 700, 900, 1300, 700, 700, 700, 700, 1100, 700, 1100, 900, 900, 700, 700, 1300,
      1100, 1300, 700, 900, 700, 1500, 700, 1500, 900, 900, 700, 1100, 900, 700, 900, 700, 900
    ];

    // if we have a seed, shuffle the sequence of delays
    if (seed) frameDelay.shuffle();

    for (i = 0; demo === 'true' ? i < 3 : ntrials <= frameDelay.length ? i < ntrials : i < frameDelay.length; i++) {
      frameSequence.push({
        type: 'test',
        message: '',
        delay: frameDelay[i]
      });
    }
  }

  function setup(input) {
    // determine events to listen to and
    // customize response elements
    chosenInput = input;
    tmbUI.UIevents = [input];

    // set response timeout to 2 seconds
    tmbUI.timeout = 2000;

    // disable spurious user interactions
    disableSelect();
    disableRightClick();
    disableDrag();
    disableDoubleTapZoom();

    // create the trials chain and start the testing sequence
    setFrameSequence();
    nextTrial();
  }

  (function () {
    var copyright = 'Copyright ' + document.querySelector('meta[name="copyright"]').content;
    var scriptName = window.location.pathname.split('/').pop();

    // add appropriate meta viewport for scaling
    setBodyScale(600, 700);

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
          '<i>ntrials=30</i> -- number of trials (max 60)<br>' +
          '<i>nopractice=true</i> -- omits practice trials<br>' +
          '<i>chooseinput=true</i> -- whether we use chooseinput<br>' +
          '<i>demo=true</i> -- runs in demo mode, only a few test trials<br>' +
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

    // check if they want to bypass practice
    nopractice = getUrlParameters('nopractice', '', true);

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

    // set the random generator's seed if a seed has been specified
    seed = getUrlParameters('seed', '', true);

    if (seed) {
      if (parseInt(seed)) {
        seed = parseInt(seed);
      } else if (seed === '0') {
        seed = 0;
      } else {
        //seed is not an integer, leave as text string
      }
      Math.seedrandom(seed);
    }

    // set the number of trials
    // maximum 60
    ntrials = getUrlParameters('ntrials', '', true);
    if (!(ntrials = parseInt(ntrials)) || ntrials > 60 || ntrials < 1) ntrials = 30;

    // set the test version
    testVersion = scriptName.replace(/\.[^/.]+$/, '');

    // determine events to listen to
    if (!hasTouch) setup('keys');
    else {
      if (useChooseInput) chooseInput({ keyboard: true, touch: true }, setup);
      else setup('taps');
    }
  })();
}
