// const grandEst = document.getElementById("region-A");
// const infoGrandEst = document.querySelector(".infoGrandEst");
// const aquitaine = document.getElementById("region-B");
// const infoAquitaine = document.querySelector(".infoAquitaine");
// const auvergne = document.getElementById("region-C");
// const infoAuvergne = document.querySelector(".infoAuvergne-Rhône-Alpes");

// grandEst.addEventListener("click", () => {
//    infoAquitaine.innerHTML = '';
//    infoAuvergne.innerHTML = '';
//    infoGrandEst.innerHTML = "Région : Grand-Est";

// });

// aquitaine.addEventListener("click", () => {
//     infoAuvergne.innerHTML = '';
//     infoGrandEst.innerHTML = '';  
//     infoAquitaine.innerHTML = "Région : Aquitaine";
// });

// auvergne.addEventListener("click", () =>{
//     infoAquitaine.innerHTML = '';
//     infoGrandEst.innerHTML = '';
//     infoAuvergne.innerHTML = "Région : Auvergne";

// });
// const regionName = {
//   grandEst: {
//     name: "Grand-Est",
    
//   },
//   aquitaine: {
//     name: "Aquitaine",
    
//   },
//   auvergne: {
//     name: "Auvergne",
    
//   }
// };



const regions = document.querySelectorAll("path");
// const gameMap = document.getElementById('gameMap');
const infoRegion = document.querySelector('.infoRegion');
let region = [];
// const randomIndex = Math.floor(Math.random() * regions.length);
// const randomRegion = regions [randomIndex];

// console.log(randomIndex);
// console.log(randomRegion);


     regions.foreach(region => {
         region.addEventListener("click",() => {
            
             let title = region.getAttribute('title');
             infoRegion.innerHTML = title;
            
         });
     });
console.table(region);
