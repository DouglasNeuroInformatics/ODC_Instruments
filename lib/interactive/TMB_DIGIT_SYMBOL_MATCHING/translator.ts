import { Translator } from '/runtime/v1/@opendatacapture/runtime-core';

export const translator = new Translator({
  translations: {
    optionalPractice: {
      heading: {
        en: 'TMB Digit Symbol Matching',
        fr: 'TMB Appariement Chiffres-Symboles'
      },
      prompt: {
        en: 'Please choose whether to:',
        fr: 'Veuillez choisir :'
      },
      skip: {
        en: 'Skip practice trials',
        fr: "Sauter les essais d'entraînement"
      },
      view: {
        en: 'View practice trials',
        fr: "Voir les essais d'entraînement"
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
    practiceFeedback: {
      rememberTaps: {
        en: 'Remember:<br><b>touch the screen</b> to respond.',
        fr: 'Rappel :<br><b>touchez l’écran</b> pour répondre.'
      },
      rememberKeys: {
        en: 'Remember:<br><b>use the keyboard</b> to respond.',
        fr: 'Rappel :<br><b>utilisez le clavier</b> pour répondre.'
      },
      youShouldTap: {
        en: 'You should <b>touch {digit}</b>',
        fr: 'Vous devez <b>toucher le {digit}</b>'
      },
      youShouldKey: {
        en: 'You should <b>press {digit}</b> on the <b>keyboard</b>',
        fr: 'Vous devez <b>appuyer sur {digit}</b> au <b>clavier</b>'
      },
      whenYouSee: {
        en: 'when you see this symbol.',
        fr: 'lorsque vous voyez ce symbole.'
      }
    },
    instructions: {
      title: {
        en: 'Matching Shapes And Numbers',
        fr: 'Appariement de formes et de chiffres'
      },
      heading: {
        en: 'Instructions:',
        fr: 'Instructions :'
      },
      eachSymbol: {
        en: 'Each <b>symbol</b> has a <b>number</b>.',
        fr: 'Chaque <b>symbole</b> est associé à un <b>chiffre</b>.'
      },
      whenSymbolTaps: {
        en: 'When a symbol appears at the top,<br><b>touch</b> its number <b>on the screen</b>',
        fr: "Lorsqu'un symbole apparaît en haut,<br><b>touchez</b> le <b>chiffre</b> qui correspond<br>à ce <b>symbole</b>"
      },
      whenSymbolKeys: {
        en: 'When a symbol appears at the top,<br>press its number on the <b>keyboard</b>',
        fr: "Lorsqu'un symbole apparaît en haut,<br>appuyez sur le <b>chiffre</b> qui correspond<br>à ce <b>symbole</b>"
      },
      hereItIs: {
        en: '(here it is 1).',
        fr: '(ici, la réponse est 1).'
      },
      letsPractice: {
        en: "Let's practice a few symbols.",
        fr: 'Entraînons-nous avec quelques symboles.'
      },
      excellent: {
        en: 'Excellent!<br>You have completed the practice.<br>Now let’s do more.',
        fr: 'Excellent !<br>Vous avez terminé l’entraînement.<br>Passons à la suite.'
      },
      scoreInfo: {
        en: 'Your score will be<br>how many correct responses<br>you make in {duration} seconds,<br>so try to be <b>ACCURATE</b> and <b>QUICK</b>!',
        fr: 'Rappel !<br>Regardez le symbole en haut<br>et appuyez sur le chiffre qui correspond à ce symbole.<br>Essayez d’être <b>RAPIDE</b>, mais aussi <b>PRÉCIS</b>.'
      }
    }
  }
});
