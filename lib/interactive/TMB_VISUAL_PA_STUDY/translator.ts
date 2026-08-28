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
      }
    },
    counter: {
      of: {
        en: 'of',
        fr: 'sur'
      }
    },
    study: {
      beginTitle: {
        en: 'TMB Visual Paired Associates Memory - Study',
        fr: 'Mémoire des paires associées visuelles — Étude'
      },
      instructionsHeading: {
        en: 'Instructions:',
        fr: 'Instructions :'
      },
      youWillSee: {
        en: 'You will see {count} image pairs, like above.',
        fr: 'Vous verrez {count} paires d’images, comme ci-dessus.'
      },
      learnTogether: {
        en: 'Learn which images go together.',
        fr: 'Apprenez quelles images vont ensemble.'
      },
      laterTested: {
        en: 'Later you will be tested on that!',
        fr: 'Vous serez testé(e) sur ces paires plus tard !'
      },
      end: {
        en: "You will be tested<br>on these image pairs shortly.<br>But first, let's do some other tests!",
        fr: 'Vous serez testé(e)<br>sur ces paires d’images bientôt.<br>Mais d’abord, faisons d’autres tests !'
      }
    }
  }
});
