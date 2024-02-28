let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrl');

let back = document.getElementById("back");
let pass = document.getElementById("pass");

function forwardAudio(){
    song.currentTime += 5 ;
}

function backwardAudio(){
    song.currentTime -= 5 ;
}

song.onloadedmetadata = function(){
    progress.max = song.duration ;
    progress.value = song.currentTime;

}

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

setInterval(()=>{
    progress.value = song.currentTime;
    if (song.currentTime >= song.duration) {
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}, 500);

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value ;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

if (song.currentTime >= song.duration) {
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
}