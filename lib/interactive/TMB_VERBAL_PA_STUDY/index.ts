import { defineInstrument } from '/runtime/v1/@opendatacapture/runtime-core';
import { z } from '/runtime/v1/zod@3.x/v4';

import html from './fragment.html';
import { render } from './render.js';

import './TestMyBrain.12.18.min.js?legacy';
import './TestHelper.v1.Oct23.js?legacy';
import './styles.css';

const easy = `
* This is an input file to the STUDY component of the Verbal Paired Associates Test
* Each line must contain a probe-target pair of words
* The word separator is whitespace
* Lines beginning with * are ignored
* PROBE TARGET
insect brandy
children drink
burner diamond
bucket picture
house pillow
truck lemon
cattle garden
grass straw
morning skirt
poster flower
library slide
court shore
mouse money
essay rocket
mixer grave
balloon gravy
maple cheese
garbage harbor
battle capsule
pedal college
guard triangle
hospital chalk
liquid policeman
human mountain
tennis chipmunk
`.trim();

const hard = `
* This is an input file to the ENCODING component of the Verbal Paired Associates Test
* Each line must contain a probe-target pair of words
* The word separator is whitespace
* Lines beginning with * are ignored
* PROBE TARGET
disposition freedom
perception malice
ability devotion
glory suppression
gratitude distinction
pride method
spirit attribute
soul confidence
attitude bravery
facility hope
discipline madness
theory passion
opinion grief
vanity essence
loyalty inducement
animosity knowledge
jealousy intellect
recognition ingratitude
immunity love
interest predicament
pleasure welfare
violation fate
chance impulse
satire necessity
thought safety
`.trim();

const defaultInput = `
* This is an input file to the STUDY component of the Verbal Pair Associates Test
* Each line must contain a probe-target pair of words
* The word separator is 'whitespace'
* Lines beginning with '*' are ignored
* PROBE TARGET
officer kettle
animal glass
student couch
cocktail cement
fruit elbow
horse choir
piano walrus
garlic bubble
mirror wallet
guest bread
beverage laundry
candle umbrella
beach mustard
nurse radio
organ lettuce
flame mother
rabbit weapon
shark floor
spoon disease
tourist newspaper
soccer dentist
torch zipper
column tulip
blonde ocean
woman potato
`.trim();

const easyFr = `
* Version française de easy (STUDY)
* PROBE TARGET
insecte cognac
enfants boisson
brûleur diamant
seau image
maison oreiller
camion citron
bétail jardin
herbe paille
matin jupe
affiche fleur
bibliothèque diapositive
cour rivage
souris argent
essai fusée
mixeur tombe
ballon sauce
érable fromage
ordures port
bataille capsule
pédale collège
garde triangle
hôpital craie
liquide policier
humain montagne
tennis tamia
`.trim();

const hardFr = `
* Version française de hard (STUDY)
* PROBE TARGET
disposition liberté
perception malice
aptitude dévotion
gloire suppression
gratitude distinction
fierté méthode
esprit attribut
âme confiance
attitude bravoure
facilité espoir
discipline folie
théorie passion
opinion chagrin
vanité essence
loyauté incitation
animosité savoir
jalousie intellect
reconnaissance ingratitude
immunité amour
intérêt embarras
plaisir bien-être
violation destin
hasard impulsion
satire nécessité
pensée sécurité
`.trim();

const defaultInputFr = `
* Version française de l'entrée par défaut (STUDY)
* PROBE TARGET
officier bouilloire
animal verre
étudiant canapé
cocktail ciment
fruit coude
cheval chorale
piano morse
ail bulle
miroir portefeuille
invité pain
boisson lessive
bougie parapluie
plage moutarde
infirmière radio
orgue laitue
flamme mère
lapin arme
requin plancher
cuillère maladie
touriste journal
football dentiste
torche fermeture
colonne tulipe
blonde océan
femme patate
`.trim();

const staticAssets = {
  '/VerbalPAstudyInput_25pairs_easy1.txt': `data:text/plain,${encodeURIComponent(easy)}`,
  '/VerbalPAstudyInput_25pairs_hard1.txt': `data:text/plain,${encodeURIComponent(hard)}`,
  '/VerbalPAstudyInput.txt': `data:text/plain,${encodeURIComponent(defaultInput)}`,
  '/VerbalPAstudyInput_25pairs_easy1_fr.txt': `data:text/plain,${encodeURIComponent(easyFr)}`,
  '/VerbalPAstudyInput_25pairs_hard1_fr.txt': `data:text/plain,${encodeURIComponent(hardFr)}`,
  '/VerbalPAstudyInput_fr.txt': `data:text/plain,${encodeURIComponent(defaultInputFr)}`
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
    name: 'TMB_VERBAL_PA_STUDY'
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
      en: 'The encoding phase of a verbal memory test where participants learn word pairs for later recall.',
      fr: 'La phase d’encodage d’un test de mémoire verbale où les participants apprennent des paires de mots en vue d’un rappel ultérieur.'
    },
    license: 'LGPL-3.0',
    title: {
      en: 'Verbal Paired Associates - Study',
      fr: 'Paires associées verbales — Étude'
    }
  },
  measures: {},
  validationSchema: z.array(
    z.object({
      probe: z.string(),
      target: z.string()
    })
  )
});
