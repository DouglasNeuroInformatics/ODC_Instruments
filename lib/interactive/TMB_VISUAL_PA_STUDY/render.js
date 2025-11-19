// @ts-nocheck
/* eslint-disable */

export function render(done) {
  var imagePairs = []; // array of probe-target image pairs
  var images = []; // array of all images
  var pairsCount = 0; // count of already seen word pairs
  var studyTime = 5000; // probe-target study time
  var ISI = 1500; // inter-stimulus interval
  var frameSequence = []; // object containing the sequence of frames and their properties
  var frame; // single frame object
  var inputFile; // url parameter: file containing probe-target image pairs
  var usage = ''; // URL parameter: show usage
  var results = []; // variable for storing results

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
          'Click here for instructions',
          function () {
            showFrame('null');
            nextTrial();
          },
          '20pt'
        );
      // else if it's a message frame, show it
      else if (frame.type === 'message')
        showAlert(
          frame.message,
          'Click here to continue',
          function () {
            showFrame('null');
            nextTrial();
          },
          '20pt'
        );
      // deal with test frames
      else {
        // log picture pair and timing in 'results' variable
        results.push({
          probe: frame.probe, // probe (left) image
          target: frame.target // target (right) image
        });

        // show images
        chainTimeouts(
          function () {
            pairsCount++;
            getID('counter').innerHTML = '<b>' + pairsCount + ' of ' + imagePairs.length + '</b>';
            showFrame('counter');
          },
          ISI,
          function () {
            getID('probe').decoding = 'sync';
            getID('target').decoding = 'sync';

            getID('probe').src = 'images/' + frame.probe;
            getID('target').src = 'images/' + frame.target;
            showFrame('counter', 'test');
          },
          studyTime,
          function () {
            showFrame('null');
            nextTrial();
          }
        );
      }
    }
    // else the sequence is empty, we are done!
    else {
      done(results);
    }
  }

  // generate the frameSequence object,
  // where each object's element codes the parameters
  // for a single trial/frame
  function setFrameSequence() {
    var testMessage, i;

    // messages
    testMessage = {
      begin:
        '<h2>TMB Visual Paired Associates Memory - Study</h2>' +
        "<img src='images/example1.jpg'> " +
        "<img src='images/example2.jpg'><br><br>",
      instructions:
        '<h3>Instructions:</h3>' +
        "<img src='images/example1.jpg'> " +
        "<img src='images/example2.jpg'><br><br>" +
        'You will see ' +
        imagePairs.length +
        ' image pairs, like above.<br>' +
        'Learn which images go together.<br>' +
        'Later you will be tested on that!<br><br>',
      end:
        'You will be tested<br>' + 'on these image pairs shortly.<br>' + "But first, let's do some other tests!<br><br>"
    };

    // type of frame to display
    var frameType = ['begin', 'message'];

    // message to display
    var frameMessage = [testMessage.begin, testMessage.instructions];

    // words to display
    var frameProbe = ['', ''];
    var frameTarget = ['', ''];

    for (i = 0; i < imagePairs.length; i++) {
      frameType.push('test');
      frameMessage.push('');
      frameProbe.push(imagePairs[i].probe);
      frameTarget.push(imagePairs[i].target);
    }

    frameType.push('message');
    frameMessage.push(testMessage.end);
    frameProbe.push('');
    frameTarget.push('');

    // push all components into the frames chain
    for (i = 0; i < frameType.length; i++) {
      frameSequence.push({
        type: frameType[i],
        message: frameMessage[i],
        probe: frameProbe[i],
        target: frameTarget[i]
      });
    }

    // start the trial sequence
    nextTrial();
  }

  // this is the input file's parser: it builds a JSON object
  // from the instructions and material in the file
  function parseFile(text) {
    // parse the input file
    if (text) {
      var lines,
        words = [],
        errors = 0;

      // Parse the file's text into lines by splitting on 'newline'.
      // (do not use regexp, e.g. /\r?\n/, because ie8 throws up)
      lines = text.split('\n').filter((line) => !!line.trim());

      // parse each line into words by splitting on 'whitespace'
      for (var i = 0; i < lines.length; i++) {
        // first check if this line is a comment (starts with '*'?)
        if (lines[i].charAt(0) === '*') continue;

        // split on 'whitespace'
        words = lines[i].split(' ');

        // sanitize the words, so there are no linefeeds at the end
        words = words.map(function (s) {
          return s.trim();
        });

        // save probe and target words, or stop and report an error
        if (words.length === 2) imagePairs.push({ probe: words[0], target: words[1] });
        else {
          console.error(`Malformed words: ${words}`);
          errors++;
          break;
        }
      }

      if (errors) {
        showAlert('parseFile: Incorrect formatting of line ' + (i + 1) + '.<br><br>', '', null, '20pt');
      } else if (imagePairs.length === 0) {
        showAlert("parseFile: Error parsing input file's content.<br><br>", '', null, '20pt');
      } else {
        images = imagePairs.pluck('probe').concat(imagePairs.pluck('target'));
        images = images.map(function (a) {
          return 'images/' + a;
        });
        imagePreLoad(images, { pipeline: false, callBack: setFrameSequence });
      }
    } else showAlert('ajaxRequest: Error reading input file.<br><br>', '', null, '20pt');
  }

  // on page load completion, set up initial parameters,
  // call the frameSequence generator
  // and start the trials sequence
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
          '<i>input=testInput.txt</i> -- image pairs input file<br>' +
          '<i>help</i> -- print this message'
      );
      document.getElementById('helpSpan').style.textAlign = 'left';
      document.getElementById('helpSpan').style.margin = '50px';
      return;
    }

    // specify the input file
    inputFile = getUrlParameters('input', '', true);
    if (!inputFile) inputFile = 'VisualPAstudyInput.txt';

    // disable spurious user interaction
    disableSelect();
    disableRightClick();
    disableDrag();
    disableDoubleTapZoom();

    // read the input file and call the parser
    ajaxRequest({ url: inputFile, async: true, callback: parseFile });
  })();
}
