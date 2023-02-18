// // Obtenir la référence de l'image SVG et la div pour afficher le texte

// const monImage = document.getElementById("mon-image");
// const textDisplay = document.querySelector(".text-display");

// // Ajouter un écouteur d'événement pour le clic sur l'image
// monImage.addEventListener("click", () => {
//   // Modifier le contenu de la div d'affichage de texte
//   textDisplay.textContent = "Vous avez cliqué sur l'image !";
// });

const grandEst = document.getElementById("region-A");
const infoGrandEst = document.querySelector(".infoGrandEst");
const aquitaine = document.getElementById("region-B");
const infoAquitaine = document.querySelector(".infoAquitaine");

grandEst.addEventListener("click", () => {
  infoAquitaine.innerHTML = '';
  infoGrandEst.innerHTML = "Région : Grand-Est<br> Population : 5 562 651 hab. (2020)<br>Densité: 97 hab./km²<br>Superficie : 57 441 km2";

});

aquitaine.addEventListener("click", () => {
    infoGrandEst.innerHTML = '';  
    infoAquitaine.innerHTML = "Alllooooo !!!!!!!!!!!";
});
    