// Stocke toutes les informations des régions dans un objet
const regions = {
    grandEst: {
      name: "Grand-Est",
      population: "5 562 651 hab. (2020)",
      density: "97 hab./km²",
      area: "57 441 km2"
    },
    aquitaine: {
      name: "Aquitaine",
      population: "",
      density: "",
      area: ""
    },
    auvergne: {
      name: "Auvergne",
      population: "",
      density: "",
      area: ""
    }
  };
  
  // Récupère tous les éléments nécessaires
  const infoGrandEst = document.querySelector(".infoGrandEst");
  const infoAquitaine = document.querySelector(".infoAquitaine");
  const infoAuvergneRhôneAlpes = document.querySelector(".infoAuvergneRhôneAlpes");
  const regionsEls = document.querySelectorAll(".region");
  
  // Fonction pour effacer le contenu précédent des informations de toutes les régions
  function clearAllInfos() {
    infoGrandEst.innerHTML = "";
    infoAquitaine.innerHTML = "";
    infoAuvergneRhôneAlpes.innerHTML = "";
  }
  
  // Ajoute un écouteur d'événement à chaque région
  regionsEls.forEach(region => {
    region.addEventListener("click", () => {
      clearAllInfos();
      // Récupère les informations de la région correspondante
      const regionInfo = regions[region.id];
      // Ajoute le contenu des informations de la région à la page
      const regionInfoHTML = `
        Région : ${regionInfo.name}<br>
        Population : ${regionInfo.population}<br>
        Densité: ${regionInfo.density}<br>
        Superficie : ${regionInfo.area}
      `;
      // Affiche les informations de la région
      document.querySelector(`.info${region.id}`).innerHTML = regionInfoHTML;
    });
  });