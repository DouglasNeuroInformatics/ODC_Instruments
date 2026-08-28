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
        en: 'Remembering Words',
        fr: 'Se souvenir des mots'
      },
      examplePair: {
        en: 'SKY - GREEN',
        fr: 'CIEL - VERT'
      },
      instructionsHeading: {
        en: 'Instructions:',
        fr: 'Instructions :'
      },
      youWillSee: {
        en: 'You will see {count} word pairs, like above.',
        fr: 'Vous verrez {count} paires de mots, comme ci-dessus.'
      },
      learnTogether: {
        en: 'Learn which words go together.',
        fr: 'Apprenez quels mots vont ensemble.'
      },
      laterTested: {
        en: 'Later you will be tested on that!',
        fr: 'Vous serez testé(e) sur ces paires plus tard !'
      },
      end: {
        en: "You will be tested on these word pairs shortly.<br>But first, let's do some other tests!",
        fr: 'Vous serez testé(e) sur ces paires de mots bientôt.<br>Mais d’abord, faisons d’autres tests !'
      }
    }
  }
});
