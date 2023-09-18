const buttons = document.querySelectorAll('button');
const messageInvalidDiv = document.getElementById('message');
const correctSequence = ["green-button", "blue-button", "red-button", "purple-button"];
let sequenceIndex = 0;

// Fonction pour réinitialiser la séquence sans afficher de message d'erreur
function resetSequence() {
    sequenceIndex = 0;
    buttons.forEach(button => {
        button.classList.add('active');
    });
    messageInvalidDiv.textContent = '';
}

// Fonction pour gérer les clics sur les boutons
function handleButtonClick(buttonId) {
    if (buttonId === correctSequence[sequenceIndex]) {
        sequenceIndex++;
        if (sequenceIndex === correctSequence.length) {
                // Rediriger l'utilisateur vers la nouvelle URL
                window.location.href = '2-1-simulation-visuel.html';
        }
    } else {
        invalidSequence();
    }
}

// Fonction pour gérer une séquence incorrecte
function invalidSequence() {
    resetSequence();
    messageInvalidDiv.textContent = 'hop la, mauvaise couleur ! faut suivre les instructions voyons !!...';
    // Supprimer le message d'erreur après 5 secondes
    setTimeout(() => {
        messageInvalidDiv.textContent = '';
    }, 4000); // Le message d'erreur sera supprimé après 5 secondes
}

// Ajouter un gestionnaire d'événement à chaque bouton
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (sequenceIndex < correctSequence.length) {
            handleButtonClick(button.id);
        }
    });
});

// Réinitialiser la séquence au chargement de la page
resetSequence(); // Réinitialise sans afficher de message d'erreur initial
