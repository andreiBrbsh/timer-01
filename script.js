'use strict';

const timer = document.querySelector('.timer-container p');
timer.addEventListener('click', function counter(){
      let sec = 0;
      let min = 0;
      setInterval(function(){
            if(min <= 9){
                  if(sec <= 9){
                        timer.innerHTML = `0${min}:0${sec}`;
                        sec++;
                  } else if(sec <= 59){
                        timer.innerHTML = `0${min}:${sec}`;
                        sec++;
                  } else if(sec > 59){
                        sec = 0;
                        min++;
                        timer.innerHTML = `0${min}:${sec}`;
                  }
            } else if (min <= 59){
                  if(sec <= 9){
                        timer.innerHTML = `${min}:0${sec}`;
                        sec++;
                  } else if(sec <= 59){
                        timer.innerHTML = `${min}:${sec}`;
                        sec++;
                  } else if(sec > 59){
                        sec = 0;
                        min++;
                        timer.innerHTML = `${min}:${sec}`;
                  }
            }
      }, 1000);
      this.removeEventListener('click', counter);
});





