var access = 0;

function accessNow(){
  let target = document.getElementById('access');
  target.style.display = "none";

  access = 1;

  alert();
  countDown();
}

function alert(){
  let warning = new Audio('src/audio/warning.mp3');
  let voice = new Audio('src/audio/voice.mp3');

  warning.play();
  voice.play();
  navigator.vibrate([200, 100, 200, 100, 200, 100, 200, 100]);
}

let timer = 60;
function countDown(){
  if(timer >= 0){
    document.getElementById('timer').innerHTML = timer;
    timer--;

    setTimeout('countDown()', 1000);
  }
  else{
    var timeOut = new Audio('src/audio/timeOut.mp3');

    timeOut.play();
  }
}

history.pushState(null, null, null);
window.addEventListener('popstate', (e) => {
  if(access == 1){
    history.go(1);
    alert()
  };
});

twemoji.parse(document.body);

let device = navigator.userAgent.match(/Android|iPhone|iPad|iPod touch/);
let deviceElements = document.getElementsByClassName('device');
let deviceLength = deviceElements.length;

if(device == null){
  device = 'デバイス';
}
for(let i=0; i < deviceLength; i++){
  deviceElements.item(i).innerHTML = device;
}