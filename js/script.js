
const regions = document.querySelectorAll('path');
const results = document.querySelector('.results');
const infoRegion = document.querySelector('.infoRegion');
const restartBtn = document.querySelector('.restartBtn');
let regionsample = []
let randomIndex, randomRegion;

     function getRandomRegion(){
          randomIndex = Math.floor(Math.random() * regions.length);
          randomRegion = regions[randomIndex].getAttribute('title');
          infoRegion.textContent = 'Cliquez sur la région : ' + randomRegion + '';
     }

     function RegionClick(event){

          const selectedRegion = event.target.getAttribute('title');
     
          if (selectedRegion === randomRegion){
               results.textContent = "Bravo vous avez trouver : " + randomRegion + " 😀 ";
               getRandomRegion();
          }
          else {
               results.textContent = "Dommage ce n'est pas la régions : " + selectedRegion + " 😟 ";
          }
     
     }

     // function RegionClick(event){

     //      const selectedRegion = event.target.getAttribute('title');

     //      if (selectedRegion === randomRegion){
     //           alert('Bravo ' + randomRegion +' 😀 ');
     //           getRandomRegion();
     //      }
     //      else {
     //           alert('Dommage ' + selectedRegion + ' 😟' );
     //      }

     // }

     
     regions.forEach(region => {
          regionsample.push(region.getAttribute('title'));
          region.addEventListener('click', RegionClick);
      });
      restartBtn.addEventListener('click', getRandomRegion);

getRandomRegion();




     // regions.forEach(region => {
     //    regionsample.push(region.getAttribute('title'))
        
     //      region.addEventListener("click",() => {
            
     //          let title = region.getAttribute('title');
     //          infoRegion.innerHTML = title;
            
     //      });


     // });
     
     
console.log(randomIndex);
 console.log(randomRegion);
console.table(regionsample);

