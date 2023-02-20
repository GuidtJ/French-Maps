const regions = document.querySelectorAll('path');
const gameMap = document.getElementById('gameMap');
const infoRegion = document.querySelector('.infoRegion');
let regionsample = []
const randomIndex = Math.floor(Math.random() * regions.length);
const randomRegion = regions [randomIndex];
console.log(randomIndex);
console.log(randomRegion);


     regions.forEach(region => {
        regionsample.push(region.getAttribute('title'))
        
          region.addEventListener("click",() => {
            
              let title = region.getAttribute('title');
              infoRegion.innerHTML = title;
            
          });
     });


console.table(regionsample);
