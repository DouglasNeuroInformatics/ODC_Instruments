import { Translator } from '/runtime/v1/@opendatacapture/runtime-core';

export const translator = new Translator({
  translations: {
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
      },
      spaceContinue: {
        en: 'Press the SPACEBAR to continue',
        fr: "Appuyez sur la BARRE D'ESPACE pour continuer"
      },
      spaceInstructions: {
        en: 'Press the SPACEBAR for instructions',
        fr: "Appuyez sur la BARRE D'ESPACE pour les instructions"
      },
      spaceRetry: {
        en: 'Press the SPACEBAR to retry',
        fr: "Appuyez sur la BARRE D'ESPACE pour réessayer"
      }
    },
    stimulus: {
      wait: {
        en: 'WAIT',
        fr: 'ATTENDEZ'
      },
      go: {
        en: 'GO!',
        fr: 'ALLEZ !'
      }
    },
    timeout: {
      respondWithin: {
        en: 'Please respond within 2 seconds.',
        fr: 'Veuillez répondre dans les 2 secondes.'
      },
      whenYouSeeGo: {
        en: 'When you see <b>GO!</b>,',
        fr: 'Lorsque vous voyez <b>ALLEZ !</b>,'
      }
    },
    instructions: {
      title: {
        en: 'Fast Reactions',
        fr: 'Réactions rapides'
      },
      howFast: {
        en: 'How fast can you react?',
        fr: 'À quelle vitesse pouvez-vous réagir ?'
      },
      heading: {
        en: 'Instructions:',
        fr: 'Instructions :'
      },
      whenYouSeeGo: {
        en: 'When you see <b>GO!</b>',
        fr: 'Lorsque vous voyez <b>ALLEZ !</b>'
      },
      goTaps: {
        en: '<b>TAP</b> as quickly as you can.',
        fr: '<b>TOUCHEZ</b> aussi vite que possible.'
      },
      goKeys: {
        en: 'press the <b>SPACE BAR</b><br>as quickly as you can.',
        fr: "appuyez sur la <b>BARRE D'ESPACE</b><br>aussi vite que possible."
      },
      useFinger: {
        en: 'Use a finger on your writing hand.',
        fr: 'Appuyez avec un doigt de votre main dominante.'
      },
      excellent: {
        en: "Excellent!<br>You have completed the practice.<br><br>Now let's do more.",
        fr: 'Excellent !<br>Vous avez terminé l’entraînement.<br><br>Passons à la suite.'
      }
    }
  }
});
