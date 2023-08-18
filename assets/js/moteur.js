    const trembleAmount = 1000; // L'amplitude des tremblements
    const jerkAmount = 5000; // L'amplitude des mouvements saccadés

    const xOffset = Math.random() * trembleAmount - trembleAmount / 2;
    const yOffset = Math.random() * trembleAmount - trembleAmount / 2;

    event.clientX += xOffset;
    event.clientY += yOffset;

    if (Math.random() < 0.5) {
        event.clientX += jerkAmount;
    } else {
        event.clientX -= jerkAmount;
    }

// Fonction pour attacher le simulateur aux événements de la souris
function attachSimulator() {
    document.addEventListener('mousemove', simulateMotorImpairment);
}

// Attacher le simulateur au chargement de la page
window.onload = function () {
    attachSimulator();
};