const mainDetails = document.querySelector("#menu-container");  // Sélectionne le <details> concerné
const wideScreen = window.matchMedia("(min-width: 768px)");  // Vérifie si la largeur de la fenêtre d'affichage >= 768 px

function updateMenu () {
    mainDetails.open = wideScreen.matches;  // Si la largeur de la fenêtre correspond, ouvre le <details>
}

updateMenu();  // Fonctionne dès le départ

wideScreen.addEventListener("change", updateMenu);  // Écoute les modifications de largeur de fenêtre