# EscapeGameA11y

URL de l'escape game : https://damiengomez.github.io/EscapeGameA11y/

Le site comportera 12 pages : (5 pages de description de l'énigme à venir et 6 pages comprennant le contenu et les énigmes)

## Introduction
### 1 - description
Cet escape game a pour objectif de vous offrir une expérience immersive et sensibilisant les participants aux défis auxquels sont confrontées les personnes en situation de handicap numérique.
Vous serez plongés dans un scénario où vous incarnerez un personnage ayant des limitations technologiques et devant résoudre des énigmes spécialement conçues pour simuler les difficultés rencontrées dans le monde numérique.
Ici, les joueurs devront naviguer à travers des interfaces numériques, surmonter des obstacles liés à l'accessibilité et résoudre des casse-tête pour avancer dans le jeu.

Pour accéder à l'étape suivante, cliquez sur le lien ici.

### 1 - exo
Le compte à rebour commence dès à présent.
On commence doucement avec un simple problème d'ergo, je planque le lien "ici" dans le texte d'introduction et non pas dans la phrase "cliquez sur le lien ici"


## Visuel
### 2 - description
Handicap ciblé : Handicap visuel


### 2 - exo
Objectif :
- Naviguer et remplir des champs de formulaire sur un écran totalement noir avec pour seul indice le nom accessible des éléments
- Problèmes de label non lié programmatiquement aux champs de formulaire etc.


## Auditif
### 3 - description
Handicap ciblé : Handicap auditif


### 3 - exo
Objectif :
- L’utilisateur doit récupérer de l’information , via une vidéo sans audio,
- Nudge pour augmenter la difficulté 

## Cognitif
### 4 - description
Handicap ciblé : Handicap cognitif

### 4 - exo
Objectif :
- Trouver des valeurs à entrer dans des inputs dans une page de texte
- Jouer sur la police de caractère et les problèmes d’alignement
- Pop-up intrusives pour gêner l’utilisateur.


## Daltonisme
### 5 - description
Handicap ciblé : Handicap visuel

### 5 - exo
Objectif :
- L’utilisateur devra parcourir une énigme ne se basant que par la couleur dans un site entièrement monochrome
- Ajouter dark pattern (lien non sous-ligné par exemple).


## File structure
```
|---assets
|   |---css
|   |---fonts
|   |---images
|   |---js
|---Start.html (accueil)
|---1 - introduction.html
|---1 - exo.html
|---2 - visuel.html
|---2 - exo.html
|---3 - auditif.html
|---3 - exo.html
|---4 - cognitif.html
|---4 - exo.html
|---5 - daltonisme.html
|---5 - exo.html
```
