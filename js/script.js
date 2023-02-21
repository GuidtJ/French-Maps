
const regions = document.querySelectorAll('path');
const results = document.querySelector('.results');
const infoRegion = document.querySelector('.infoRegion');
const restartBtn = document.querySelector('.restartBtn');
let regionsample = []
let randomIndex, randomRegion;
let score = 0;
let essais = 3;

     function getRandomRegion(){
          randomIndex = Math.floor(Math.random() * regions.length);
          randomRegion = regions[randomIndex].getAttribute('title');
          infoRegion.textContent = 'Trouvez la région : ' + randomRegion + '';
     }

     function RegionClick(event){
          const selectedRegion = event.target.getAttribute('title');
          essais--;
          if (selectedRegion === randomRegion){
               results.textContent = "Bravo vous avez trouver : " + randomRegion + " 😀  ";
               score++;
               if(essais > 0){
                    getRandomRegion();
               }else{
                    results.textContent += " Jeux terminer";
               disableRegionClicks();
               }
                
          }
          else {
               results.textContent = "Dommage ce n'est pas la région : " + selectedRegion + " 😟 ";
               if(essais === 0){
                    results.textContent += "Insert Coin";
                    disableRegionClicks();
               }
          }
     
     }
     function disableRegionClicks() {
          regions.forEach(region => {
               region.removeEventListener('click', RegionClick);
          });
     }
     function restartGame() {
          score = 0;
          essais = 3;
          results.textContent = '';
          getRandomRegion();
          regions.forEach(region => {
               region.addEventListener('click', RegionClick);
          });
     }
     

     regions.forEach(region => {
          regionsample.push(region.getAttribute('title'));
          region.addEventListener('click', RegionClick);
      });
     //  restartBtn.addEventListener('click', getRandomRegion);
      restartBtn.addEventListener('click', restartGame);
      
getRandomRegion();

  
console.log(randomIndex);
 console.log(randomRegion);
console.table(regionsample);
