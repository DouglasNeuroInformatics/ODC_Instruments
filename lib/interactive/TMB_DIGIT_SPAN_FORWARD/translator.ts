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
    instructions: {
      title: {
        en: 'Memorizing Numbers',
        fr: 'Mémorisation de chiffres'
      },
      versionForward: {
        en: '- forward version -',
        fr: '- ordre direct -'
      },
      versionBackward: {
        en: '- backward version -',
        fr: '- ordre inverse -'
      },
      heading: {
        en: 'Instructions:',
        fr: 'Instructions :'
      },
      tryToRemember: {
        en: 'Try to remember these numbers.',
        fr: 'Essayez de retenir ces chiffres.'
      },
      thenTap: {
        en: 'Then tap the numbers',
        fr: 'Ensuite, touchez les chiffres'
      },
      thenKeys: {
        en: 'Then press the numbers on the <b>keyboard</b>',
        fr: 'Ensuite, appuyez sur les chiffres au <b>clavier</b>'
      },
      inOrderSeen: {
        en: 'in the order you saw them.',
        fr: 'dans l’ordre où vous les avez vus.'
      },
      inReverseOrder: {
        en: 'in <b>reverse</b> order.',
        fr: 'dans l’ordre <b>inverse</b>.'
      },
      letsPractice: {
        en: "Let's practice!",
        fr: 'Entraînons-nous !'
      },
      excellent: {
        en: "Excellent!<br>You have completed the practice.<br>Now let's do more.",
        fr: 'Excellent !<br>Vous avez terminé l’entraînement.<br>Passons à la suite.'
      },
      correctMistakes: {
        en: 'To correct mistakes<br>you can press backspace/delete.',
        fr: 'Pour corriger une erreur,<br>vous pouvez appuyer sur retour arrière/supprimer.'
      }
    },
    trial: {
      memorize: {
        en: 'Memorize the numbers!',
        fr: 'Mémorisez les chiffres !'
      },
      nowPress: {
        en: 'Now press the numbers...',
        fr: 'Maintenant, appuyez sur les chiffres...'
      },
      correct: {
        en: 'Correct!',
        fr: 'Bonne réponse !'
      },
      tryAgain: {
        en: 'That was {digits}. Try again!',
        fr: 'La réponse était {digits}. Réessayez !'
      },
      pressOneMore: {
        en: 'Press {count} more number.',
        fr: 'Appuyez sur {count} chiffre de plus.'
      },
      pressAll: {
        en: 'Press {count} numbers.',
        fr: 'Appuyez sur {count} chiffres.'
      },
      pressMore: {
        en: 'Press {count} more numbers.',
        fr: 'Appuyez sur {count} chiffres de plus.'
      }
    }
  }
});
