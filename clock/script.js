// alert('ok')

const time=document.getElementById('time');
const stopBtn = document.getElementById('stop');
const startBtn = document.getElementById('start');

function currTime(){
    const current = new Date();
    const curr_time=`${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
    time.innerText = curr_time;
    // console.log(current);
}
let interval=setInterval(currTime, 1000);
// currTime();
stopBtn.addEventListener('click', ()=>{
    clearInterval(interval);
    time.innerText = "Timer Stopped";
})
startBtn.addEventListener('click', ()=>{
    interval = setInterval(currTime, 1000);
    // time.innerText = "Timer Started";
})