const sound = document.querySelector('#sound');


setTimeout(function(){
  sound.play();
}, 2000);

setTimeout(function(){
  sound.pause();
  sound.currentTime = 0;
}, 5000);

