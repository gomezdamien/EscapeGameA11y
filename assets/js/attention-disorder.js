const overlay = document.getElementById('overlay');
const content = document.getElementById('content');

const messages = [
  "Concentrez-vous...",
  "J'ai bien fermé ma voiture avant de partir ?",
  "haha regarde la tête de ton voisin de gauche !!",
  "Tiens, il pleut aujourd'hui",
];

function getRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

function getRandomImageURL() {
  // Remplacez par vos URLs d'images réelles
  const imageUrls = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/500"
  ];
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
}

function showOverlay() {
  content.innerHTML = `<p>${getRandomMessage()}</p><img src="${getRandomImageURL()}" alt="Image simulée">`;
  overlay.style.display = 'flex';
  setTimeout(hideOverlay, 5000); // Masquer après 5 secondes
}

function hideOverlay() {
  overlay.style.display = 'none';
  setTimeout(showOverlay, 2000); // Afficher à nouveau après 2 secondes
}

showOverlay();