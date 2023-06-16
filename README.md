# EscapeGameA11y

Le site comportera 5 pages et 1 fichier au format PDF :

## Landing page
Handicap ciblé : handicap moteur
Objectif : 
- Déplacement de souris difficile
- Éléments interactif « fuyant »
- Pop-up de cookie empêchant d’accéder aux éléments
- Inversion des alternatives sur les images ou laisser les alt auto-généré
- Chatbot intempestif

## Tunnel d’inscription
Handicap ciblé : Handicap visuel
Objectif :
- Naviguer et remplir des champs de formulaire sur un écran totalement noir avec pour seul indice le nom accessible des éléments
- Problèmes de label non lié programmatiquement aux champs de formulaire etc.

## Page produit
Handicap ciblé : Handicap auditif
Objectif :
- L’utilisateur doit récupérer de l’information sur le produit, via une vidéo sans audio,
- Nudge pour augmenter la difficulté 
- Timer indiquant la fin de la possibilité de valider

## Page récapitulative
Handicap ciblé : Handicap cognitif
Objectif :
- Trouver des informations à entrer (code promo par exemple) dans la page récapitulative et dans un PDF
- Jouer sur la police de caractère et les problèmes d’alignement
- Pop-up intrusives pour gêner l’utilisateur.

## Validation d’achat
Handicap ciblé : Handicap visuel
Objectif :
- L’utilisateur devra suivre un processus de confirmation d’achat ne passant que par la couleur dans un site entièrement monochrome
- Ajouter dark pattern (lien non sous-ligné par exemple).


## File structure
```
|---assets
|   |---css
|   |---fonts
|   |---images
|   |---js
|---LandingPage.html (accueil)
|---Tunnel-inscription.html (page d'inscription)
|---product.html (information sur le produit) 
|---overview.html (page récapitulative)
|---Purchase-confirmation.html (validation d'achat)
```
