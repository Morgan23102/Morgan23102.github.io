var video = document.querySelector(".video");
var bar = document.querySelector(".control-bar");
var btn = document.querySelector("#play-pause");
var btn1 = document.querySelector("#play-pause1");
var fullScr = document.querySelector("#fullScr");
var fullScr1 = document.querySelector("#fullScr1");
var videoContainer = document.querySelector(".c-video");
const timeElapsed = document.getElementById('time-elapsed');
const duration = document.getElementById('duration');

function togglePlayPause() {
    if (video.paused) {
        btn.className = "pause";
        video.play();
    } else {
        btn.className = "play";
        video.pause();
    }
}

function toggleFullScreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        videoContainer.requestFullscreen();
    }
        
    
}


btn.onclick = function() {
    togglePlayPause();
}

btn1.onclick = function() {
    togglePlayPause();
}

fullScr.onclick = function() {
    toggleFullScreen();
}

fullScr1.onclick = function() {
    toggleFullScreen();
}

function formatTime(timeInSeconds) {
    const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);
  
    return {
      minutes: result.substr(3, 2),
      seconds: result.substr(6, 2),
    }
  }

  function initializeVideo() {
    const videoDuration = Math.round(video.duration);
    const time = formatTime(videoDuration);
    duration.innerText = `${time.minutes}:${time.seconds}`;
    duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
  }

