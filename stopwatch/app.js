let tens = document.querySelector('.tens');
let seconds = document.querySelector('.seconds');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

 let tensCounter = 0;
 let secondsCounter = 0;

start.addEventListener('click', e => {
   
    const timer = setInterval(() => {
        tensCounter++;
        if(tensCounter <= 9){
            tens.innerHTML = "0" + tensCounter;
        }
        if(tensCounter > 10){
            tens.innerHTML =  tensCounter;
        }

        if(tensCounter > 99){
            secondsCounter++;
            seconds.innerHTML = "0" + secondsCounter;
            tensCounter = 0;
            tens.innerHTML = "0" + 0;
        }

        if(secondsCounter > 9){
            seconds.innerHTML = secondsCounter;
        }
    },10);

    stop.addEventListener('click', e => {
   
        clearInterval(timer);
    
    });

    reset.addEventListener('click', e => {

        
        output = 0;
        clearInterval(timer);
        tens.textContent  =  "00";
        seconds.textContent  =  "00";
    
    })

})

