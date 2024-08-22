// Setting up the action for the buttons from HTML
const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')
const autoPlayer = document.getElementById('audioPlayer')

// // Start the audio
function startPlayer(){
    audioPlayer.play();
}

// // Pause and reset audio
function stopPlayer(){
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}

var images = [
  {label: '1',url: 'Space 1 1.gif'},
];

function bgsetting() {
  boxtags = document.getElementsByClassName("cell");

  boxtags[1].style.backgroundImage = 'url(' + images[1].url + ')'; 
};

bgsetting();
