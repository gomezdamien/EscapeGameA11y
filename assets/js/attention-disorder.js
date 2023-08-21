const overlay = document.getElementById('overlay');
const content = document.getElementById('content');

const messages = [
  "Concentrez-vous...",
  "J'ai bien fermé ma voiture avant de partir ?",
  "haha regarde la tête de ton voisin de gauche !!",
  "Tiens, il pleut aujourd'hui",
];

function getRandomImageURL() {
  // Remplacez par vos URLs d'images réelles
  const imageUrls = [
    "./assets/img/Porte_ferme.png",
    "./assets/img/hungry.png",
    "./assets/img/voisin.png",
    "./assets/img/monkey.png"
  ];
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
}

function showOverlay() {
  content.innerHTML = `<img src="${getRandomImageURL()}" alt="Image simulée">`;
  overlay.style.display = 'flex';

  // Générer un délai aléatoire entre 2 et 10 secondes
  const randomDelay = Math.random() * (10000 - 3000) + 2000;

  setTimeout(hideOverlay, randomDelay); // Masquer après le délai aléatoire
}

function hideOverlay() {
  overlay.style.display = 'none';

  // Générer un délai aléatoire entre 2 et 10 secondes pour réafficher
  const randomDelay = Math.random() * (10000 - 3000) + 2000;

  setTimeout(showOverlay, randomDelay); // Afficher à nouveau après le délai aléatoire
}

showOverlay();