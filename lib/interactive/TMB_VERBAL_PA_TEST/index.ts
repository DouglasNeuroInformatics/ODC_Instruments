import { defineInstrument } from '/runtime/v1/@opendatacapture/runtime-core';
import { z } from '/runtime/v1/zod@3.x/v4';

import html from './fragment.html';
import { render } from './render.js';

import './TestMyBrain.12.18.min.js?legacy';
import './TestHelper.v1.Oct23.js?legacy';
import './styles.css';

const easy = `
* This is an input file to the TEST component of the Verbal Paired Associates Test
* Each line must contain a probe word, its associated target and 4 choice words
* The word separator is whitespace
* Lines beginning with * are ignored
* PROBE TARGET CHOICE-1 CHOICE-2 CHOICE-3 CHOICE-4
maple cheese apple quarter lemon cheese
library slide graph medicine flower slide
bucket picture frost picture magnet triangle
battle capsule asparagus cucumber capsule college
mixer grave grave slide magnet referee
insect brandy product pillow musician brandy
human mountain straw mountain author asparagus
essay rocket rocket cotton brush picture
guard triangle triangle brandy phone husband
morning skirt chipmunk shell skirt soldier
grass straw spade queen gravy straw
hospital chalk husband medicine chalk shore
garbage harbor chalk harbor ceiling apple
tennis chipmunk onion chipmunk brush rocket
burner diamond diamond product referee cheese
liquid policeman musician policeman onion mountain
cattle garden harbor garden graph audience
pedal college drink queen cotton college
court shore phone sunshine money shore
children drink drink capsule ceiling cloud
balloon gravy garden ceiling gravy soldier
truck lemon frost diamond lemon spade
mouse money policeman sunshine money audience
poster flower skirt flower author shell
house pillow pillow cucumber quarter grave
`.trim();

const hard = `
* This is an input file to the TEST component of the Verbal Paired Associates Test
* Each line must contain a probe word, its associated target and 4 choice words
* The word separator is whitespace
* Lines beginning with * are ignored
* PROBE TARGET CHOICE-1 CHOICE-2 CHOICE-3 CHOICE-4
chance impulse essence intellect distinction impulse
animosity knowledge intellect malice knowledge suppression
ability devotion suppression safety hope devotion
attitude bravery grief confidence bravery malice
violation fate fate bravery knowledge welfare
opinion grief freedom grief safety predicament
interest predicament predicament suppression madness necessity
facility hope passion inducement hope welfare
gratitude distinction devotion necessity distinction knowledge
satire necessity necessity essence safety method
spirit attribute love attribute devotion fate
loyalty inducement inducement fate predicament essence
disposition freedom attribute malice freedom passion
perception malice confidence malice ingratitude distinction
soul confidence knowledge confidence impulse love
immunity love ingratitude freedom fate love
jealousy intellect love inducement intellect madness
thought safety safety necessity attribute method
recognition ingratitude passion hope intellect ingratitude
vanity essence predicament attribute madness essence
discipline madness grief freedom ingratitude madness
pride method welfare inducement bravery method
glory suppression suppression impulse distinction bravery
pleasure welfare method welfare confidence grief
theory passion impulse passion distinction devotion
`.trim();

const defaultInput = `
* This is an input file to the TEST component of the Verbal Pair Associates Test
* Each line must contain a probe word, its associated target and 4 choice words
* The word separator is 'whitespace'
* Lines beginning with '*' are ignored
* PROBE TARGET CHOICE-1 CHOICE-2 CHOICE-3 CHOICE-4
woman potato potato bread spider closet
student couch lake kettle forest couch
beverage laundry glass paint detective laundry
guest bread elbow lemonade bread family
blonde ocean ocean closet dentist lake
soccer dentist lawyer weapon window dentist
cocktail cement floor cement church family
officer kettle lettuce dollar doctor kettle
beach mustard tunnel ticket bubble mustard
piano walrus forest radio walrus ticket
organ lettuce monkey movie couch lettuce
candle umbrella mother envelope sauce umbrella
spoon disease sauce potato tunnel disease
horse choir ocean choir church envelope
torch zipper disease dress zipper material
garlic bubble bubble newspaper doctor dollar
tourist newspaper window banana newspaper choir
nurse radio spider radio lemonade umbrella
column tulip wallet dress tulip helmet
flame mother mother cousin detective zipper
animal glass glass monkey walrus banana
rabbit weapon rubber laundry lettuce weapon
shark floor floor lawyer tulip helmet
mirror wallet cement wallet movie cousin
fruit elbow mustard paint elbow material
`.trim();

const easyFr = `
* Version française de easy (TEST)
* PROBE TARGET CHOICE-1 CHOICE-2 CHOICE-3 CHOICE-4
érable fromage pomme quart citron fromage
bibliothèque diapositive graphique médicament fleur diapositive
seau image givre image aimant triangle
bataille capsule asperge concombre capsule collège
mixeur tombe tombe diapositive aimant arbitre
insecte cognac produit oreiller musicien cognac
humain montagne paille montagne auteur asperge
essai fusée fusée coton brosse image
garde triangle triangle cognac téléphone mari
matin jupe tamia coquille jupe soldat
herbe paille pelle reine sauce paille
hôpital craie mari médicament craie rivage
ordures port craie port plafond pomme
tennis tamia oignon tamia brosse fusée
brûleur diamant diamant produit arbitre fromage
liquide policier musicien policier oignon montagne
bétail jardin port jardin graphique public
pédale collège boisson reine coton collège
cour rivage téléphone soleil argent rivage
enfants boisson boisson capsule plafond nuage
ballon sauce jardin plafond sauce soldat
camion citron givre diamant citron pelle
souris argent policier soleil argent public
affiche fleur jupe fleur auteur coquille
maison oreiller oreiller concombre quart tombe
`.trim();

const hardFr = `
* Version française de hard (TEST)
* PROBE TARGET CHOICE-1 CHOICE-2 CHOICE-3 CHOICE-4
hasard impulsion essence intellect distinction impulsion
animosité savoir intellect malice savoir suppression
aptitude dévotion suppression sécurité espoir dévotion
attitude bravoure chagrin confiance bravoure malice
violation destin destin bravoure savoir bien-être
opinion chagrin liberté chagrin sécurité embarras
intérêt embarras embarras suppression folie nécessité
facilité espoir passion incitation espoir bien-être
gratitude distinction dévotion nécessité distinction savoir
satire nécessité nécessité essence sécurité méthode
esprit attribut amour attribut dévotion destin
loyauté incitation incitation destin embarras essence
disposition liberté attribut malice liberté passion
perception malice confiance malice ingratitude distinction
âme confiance savoir confiance impulsion amour
immunité amour ingratitude liberté destin amour
jalousie intellect amour incitation intellect folie
pensée sécurité sécurité nécessité attribut méthode
reconnaissance ingratitude passion espoir intellect ingratitude
vanité essence embarras attribut folie essence
discipline folie chagrin liberté ingratitude folie
fierté méthode bien-être incitation bravoure méthode
gloire suppression suppression impulsion distinction bravoure
plaisir bien-être méthode bien-être confiance chagrin
théorie passion impulsion passion distinction dévotion
`.trim();

const defaultInputFr = `
* Version française de l'entrée par défaut (TEST)
* PROBE TARGET CHOICE-1 CHOICE-2 CHOICE-3 CHOICE-4
femme patate patate pain araignée placard
étudiant canapé lac bouilloire forêt canapé
boisson lessive verre peinture détective lessive
invité pain coude limonade pain famille
blonde océan océan placard dentiste lac
football dentiste avocat arme fenêtre dentiste
cocktail ciment plancher ciment église famille
officier bouilloire laitue dollar docteur bouilloire
plage moutarde tunnel billet bulle moutarde
piano morse forêt radio morse billet
orgue laitue singe film canapé laitue
bougie parapluie mère enveloppe sauce parapluie
cuillère maladie sauce patate tunnel maladie
cheval chorale océan chorale église enveloppe
torche fermeture maladie robe fermeture tissu
ail bulle bulle journal docteur dollar
touriste journal fenêtre banane journal chorale
infirmière radio araignée radio limonade parapluie
colonne tulipe portefeuille robe tulipe casque
flamme mère mère cousin détective fermeture
animal verre verre singe morse banane
lapin arme caoutchouc lessive laitue arme
requin plancher plancher avocat tulipe casque
miroir portefeuille ciment portefeuille film cousin
fruit coude moutarde peinture coude tissu
`.trim();

const staticAssets = {
  '/VerbalPAtestInput_25pairs_easy1.txt': `data:text/plain,${encodeURIComponent(easy)}`,
  '/VerbalPAtestInput_25pairs_hard1.txt': `data:text/plain,${encodeURIComponent(hard)}`,
  '/VerbalPAtestInput.txt': `data:text/plain,${encodeURIComponent(defaultInput)}`,
  '/VerbalPAtestInput_25pairs_easy1_fr.txt': `data:text/plain,${encodeURIComponent(easyFr)}`,
  '/VerbalPAtestInput_25pairs_hard1_fr.txt': `data:text/plain,${encodeURIComponent(hardFr)}`,
  '/VerbalPAtestInput_fr.txt': `data:text/plain,${encodeURIComponent(defaultInputFr)}`
};

export default defineInstrument({
  kind: 'INTERACTIVE',
  language: ['en', 'fr'],
  tags: {
    en: ['TestMyBrain'],
    fr: ['TestMyBrain']
  },
  internal: {
    edition: 2,
    name: 'TMB_VERBAL_PA_TEST'
  },
  content: {
    meta: {
      charset: 'UTF-8',
      description: 'TMB Verbal Paired Associates',
      copyright: '2023 The Many Brains Project, Inc. and McLean Hospital LGPLv3',
      keywords: 'cognitive test, brain test',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=contain',
      'apple-mobile-web-app-capable': 'yes',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-title': 'MOT test',
      'theme-color': 'white'
    },
    render,
    html,
    staticAssets,
    defaultFullscreen: true,
    enableLanguageLock: true,
    enableLanguageSelect: true
  },
  clientDetails: {
    estimatedDuration: 1,
    instructions: {
      en: ['Instructions will be presented on screen in the task.'],
      fr: ["Les instructions seront présentées à l'écran pendant la tâche."]
    }
  },
  details: {
    description: {
      en: 'The recall phase of a verbal memory test where participants retrieve previously learned word pairs.',
      fr: 'La phase de rappel d’un test de mémoire verbale où les participants récupèrent des paires de mots apprises précédemment.'
    },
    license: 'LGPL-3.0',
    title: {
      en: 'Verbal Paired Associates - Test',
      fr: 'Paires associées verbales — Test'
    }
  },
  measures: {},
  validationSchema: z.object({
    outcomes: z.object({
      score: z.number(),
      accuracy: z.number(),
      meanRTc: z.number(),
      medianRTc: z.number(),
      sdRTc: z.number(),
      flag_medianRTc: z.number(),
      flag_any: z.number(),
      responseDevice: z.string(),
      testVersion: z.string()
    }),
    results: z.array(
      z.object({
        type: z.string(),
        probe: z.string(),
        target: z.string(),
        response: z.string(),
        responseTimestamp: z.number(),
        correct: z.number(),
        rt: z.number(),
        repeated: z.number(),
        state: z.string()
      })
    )
  })
});
