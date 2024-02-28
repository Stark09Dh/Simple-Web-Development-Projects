let [seconds,minutes,hours] = [0,0,0];

let displayTime = document.getElementById("display-time");

let msg = document.getElementById("msg");

function Startstyle(){
    msg.innerHTML="Started!";
    msg.style.display = 'block';
}
function pausedStyle(){
    msg.innerHTML = "Paused!";
    msg.style.display = "block";
}

function resetStyle(){
    msg.style.display = 'none';
    msg.innerHTML = "Started!";
}


let timer = null;

function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0 ;
            hours++;
        }
    } 

    let h = hours<10 ? "0"+hours : hours ;
    let m = minutes<10 ? "0"+minutes : minutes ;
    let s = seconds<10 ? "0"+seconds : seconds ;
     
    displayTime.innerHTML = `${h}:${m}:${s}`;
}

function watchStart(){
    if(timer != null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,1000);
}

function watchStop(){
    clearInterval(timer);
}

function watchReset(){
    clearInterval(timer);
    [seconds,minutes,hours] = [0,0,0];
    displayTime.innerHTML="00:00:00";
}