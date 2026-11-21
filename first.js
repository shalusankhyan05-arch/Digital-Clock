const timeE1=document.getElementById('time');
const dateE1=document.getElementById('date');

let timer=null;

function updateClock(){
    const now =new Date();
    timeE1.textContent = now.toLocaleTimeString('en-US');
    dateE1.textContent = now.toDateString();
}

function start() {
if (timer)return;
updateClock();
timer=setInterval(updateClock, 1000);
}

function stop(){
    clearInterval(timer);
    timer=null;
}

document.getElementById('startBtn').onclick =start;
document.getElementById('stopBtn').onclick =stop;
const popup = document.getElementById('popup');
document.getElementById('themeBtn').onclick=() => popup.classList.add('show');
document.getElementById('closeBtn').onclick=() => popup.classList.remove('show');

document.querySelectorAll('.photos img').forEach(img=>{
    img.onclick =() =>{
    const bg=`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('${img.getAttribute('src')}') center / cover no-repeat fixed`;
    document.body.style.background=bg;
    localStorage.setItem('bg',bg);
    popup.classList.remove('show');
    };
});
const saveBg=localStorage.getItem('bg');
if (saveBg) document.body.style.background = saveBg;
start();