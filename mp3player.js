const ad = document.querySelector('.song');
const playing = document.querySelector('.fa-play');
const pauses = document.querySelector('.fa-pause');
const forw = document.querySelector('.fa-forward-step');
const ttl = document.querySelector('.title');
const art_img = document.querySelector('#artist');
const art_name = document.querySelector('#name');
const playSong = document.querySelector('#playsong');

const artist_name = ['Billie Eilish'];
const artist_title = ['Wildflower'];

playSong.addEventListener('click', effect);

function effect(){
    if(ad.duration == ad.currentTime)
    {
x += 1;
console.log(x);
    }

    if((!playing.classList.contains('none'))){
        ad.play();
       setInterval(prog,1000);
       setInterval(line, 1000);
        progress.addEventListener('click', (e)=>{
          var widthbar2 = (e.offsetX / e.target.clientWidth) * ad.duration;
          ad.currentTime = widthbar2;
        })
    }else{
        ad.pause();
    }
    ttl.classList.toggle('run');
    playing.classList.toggle('none');
    pauses.classList.toggle('none');
    art_img.classList.toggle('round');
}
var x= 0;

function backward(){
   dur();
    x -= 1;
    removeEffect();
    songs(x);
    if (x <= 0) {
        x = artist_name.length
    }
}

function forward(){
  dur();
    x += 1;
    removeEffect();
    songs(x);
    
      if(  x >= artist_name.length-1){
        x = -1;
      }
    
}

const lines = document.querySelector('.lineChild');
const progress = document.querySelector('.line');
const strt = document.querySelector('#start');
const end = document.querySelector('#end');

function dur(){
    var dura = ad.duration;
    var secdu = Math.floor(dura % 60);
    var mindu = Math.floor(dura / 60);
    if(secdu < 10){
        secdu = `0${secdu}`
    }
    end.innerHTML = `${mindu}:${secdu}`;
}

function prog(){
    var curtime = ad.currentTime;
    var mincur = Math.floor(curtime / 60);
    var seccur = Math.floor(curtime % 60);

    if(seccur < 10){
        seccur = `0${seccur}`;

    }
    strt.innerHTML = `${mincur}:${seccur}`;
}

function line() {
    var widthbar = (ad.currentTime / ad.duration) * 100;
    lines.style.width = `${widthbar}%`;
}
