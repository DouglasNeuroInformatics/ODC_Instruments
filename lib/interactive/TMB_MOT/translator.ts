import { Translator } from '/runtime/v1/@opendatacapture/runtime-core';

export const translator = new Translator({
  translations: {
    optionalPractice: {
      intro: {
        en: 'You are about to take:<br>TMB Multiple Object Tracking.<br><br>If you have taken this test before,<br>please choose whether to:',
        fr: 'Vous êtes sur le point de passer :<br>TMB Suivi d’objets multiples.<br><br>Si vous avez déjà passé ce test,<br>veuillez choisir :'
      },
      skip: {
        en: 'Skip the practice trials',
        fr: 'Sauter les essais d’entraînement'
      },
      retake: {
        en: 'Re-take the practice trials',
        fr: 'Refaire les essais d’entraînement'
      }
    },
    buttons: {
      clickContinue: {
        en: 'Click here to continue',
        fr: 'Cliquez ici pour continuer'
      },
      clickInstructions: {
        en: 'Click here for instructions',
        fr: 'Cliquez ici pour les instructions'
      },
      clickRetry: {
        en: 'Click here to retry',
        fr: 'Cliquez ici pour réessayer'
      }
    },
    trial: {
      score: {
        en: 'Score',
        fr: 'Score'
      },
      trialOf: {
        en: '{n} of 6',
        fr: '{n} sur 6'
      },
      youGot: {
        en: 'You got {hits} of {total} dots correct.',
        fr: 'Vous avez identifié correctement {hits} points sur {total}.'
      },
      tryAgain: {
        en: 'Let’s try again.<br><br>When the movement stops,<br>click the {n} dots that flashed.',
        fr: 'Essayons à nouveau.<br><br>Lorsque le mouvement s’arrête,<br>cliquez sur les {n} points qui ont clignoté.'
      },
      tookTooLong: {
        en: 'You took too long to respond!<br><br>Remember:<br>once the movement stops,<br>click the dots that flashed.',
        fr: 'Vous avez mis trop de temps à répondre !<br><br>Rappel :<br>une fois le mouvement arrêté,<br>cliquez sur les points qui ont clignoté.'
      },
      clickFlashedPractice: {
        en: 'Click the {n} dots that flashed!',
        fr: 'Cliquez sur les {n} points qui ont clignoté !'
      },
      clickDots: {
        en: 'Click {n} dots',
        fr: 'Cliquez sur {n} points'
      }
    },
    instructions: {
      title: {
        en: 'Splitting Your Attention',
        fr: 'Diviser votre attention'
      },
      heading: {
        en: 'Instructions:',
        fr: 'Instructions :'
      },
      keepTrack: {
        en: 'Keep track of the dots that flash,<br>they have green smiles behind them.',
        fr: 'Suivez la position des points<br>avec un sourire vert qui clignotent.'
      },
      practiceClickTwo: {
        en: 'Next time, when the movement stops,<br>click the 2 dots that flashed.<br><br>The other dots have<br>red sad faces behind them.',
        fr: 'La prochaine fois, lorsque le mouvement s’arrête,<br>cliquez sur les 2 points qui ont clignoté.<br><br>Les autres points ont<br>un visage triste rouge derrière eux.'
      },
      tryNotToClick: {
        en: 'Try <b><i>not</i></b> to click on those.',
        fr: 'Essayez de <b><i>ne pas</i></b> cliquer sur ceux-là.'
      },
      good3Dots: {
        en: 'Good!<br><br>Now we’ll do the same thing with<br>3 flashing dots.',
        fr: 'Bien !<br><br>Nous allons maintenant faire la même chose avec<br>3 points clignotants.'
      },
      targets3: {
        en: 'Great!<br><br>Now we’ll do 6 more with 3 dots.<br>Motion is slow at first, then gets faster.<br>This will be the first of 3 parts.<br><br>When you lose track of dots, just guess.<br>Your score will be the total number of<br>green smiles that you click.',
        fr: 'Super !<br><br>Nous allons maintenant en faire 6 autres avec 3 points.<br>Le mouvement est lent au début, puis s’accélère.<br><br>Lorsque vous perdez les points de vue, devinez simplement.'
      },
      targets3NoPrac: {
        en: 'The first part of the test has 3 flashing dots.<br>Motion is slow at first, then gets faster.<br>This will be the first of 3 parts.<br><br>When you lose track of dots, just guess.<br>Your score will be the total number of<br>green smiles that you click.',
        fr: 'La première partie du test comporte 3 points clignotants.<br>Le mouvement est lent au début, puis s’accélère.<br>Ce sera la première des 3 parties.<br><br>Lorsque vous perdez les points de vue, devinez simplement.<br>Votre score sera le nombre total de<br>sourires verts sur lesquels vous cliquez.'
      },
      targets4: {
        en: 'Excellent!<br><br>You have finished the first part of this test.<br>There are two parts left.<br><br>The next part has 4 flashing dots.<br>Motion is slow at first, then gets faster.<br><br>When you lose track of dots, just guess.<br>Every smile you click adds to your score!',
        fr: 'Excellent !<br><br>Vous avez terminé la première partie de ce test.<br>Il reste deux parties.<br><br>La partie suivante comporte 4 points clignotants.<br>Le mouvement est lent au début, puis s’accélère.<br><br>Lorsque vous perdez les points de vue, devinez simplement.<br>Chaque sourire sur lequel vous cliquez augmente votre score !'
      },
      targets5: {
        en: 'Outstanding!<br><br>Now there is only one part left!<br><br>The final part has 5 flashing dots!<br>Motion is slow at first, then gets faster.<br><br>When you lose track of dots, just guess.<br>Every smile you click adds to your score!',
        fr: 'Remarquable !<br><br>Il ne reste plus qu’une partie !<br><br>La dernière partie comporte 5 points clignotants !<br>Le mouvement est lent au début, puis s’accélère.<br><br>Lorsque vous perdez les points de vue, devinez simplement.<br>Chaque sourire sur lequel vous cliquez augmente votre score !'
      },
      emaTargets5: {
        en: 'You will do this task <br>with 5 flashing dots!<br>Motion is slow at first, then gets faster.<br><br>When you lose track of dots, just guess.<br>Every smile you click adds to your score!',
        fr: 'Vous ferez cette tâche <br>avec 5 points clignotants !<br>Le mouvement est lent au début, puis s’accélère.<br><br>Lorsque vous perdez les points de vue, devinez simplement.<br>Chaque sourire sur lequel vous cliquez augmente votre score !'
      },
      noprac: {
        en: 'Remember:<br><br>Click on the dots with the green <br>smiley faces behind them.',
        fr: 'Rappel :<br><br>Cliquez sur les points ayant un <br>visage souriant vert derrière eux.'
      }
    }
  }
});
