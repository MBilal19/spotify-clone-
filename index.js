console.log("welcome");
//initialize the variable
let songIndex = "0";
let audioElement = new Audio('file:///C:/Users/immbz/OneDrive/Desktop/visual%20studio%20code/Spotify%20Clone/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let MyProgressBar = document.getElementById('MyProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'))

let songs = [
    { songName: "salam e ishq", filePath: "file:///C:/Users/immbz/OneDrive/Desktop/visual%20studio%20code/Spotify%20Clone/songs/1.mp3", coverPath: "file:///C:/Users/immbz/OneDrive/Desktop/visual%20studio%20code/Spotify%20Clone/songs%20pics/10.jpg" },
    { songName: " ishq", filePath: "file:///C:/Users/immbz/OneDrive/Desktop/visual%20studio%20code/Spotify%20Clone/songs/2.mp3", coverPath: "file:///C:/Users/immbz/OneDrive/Desktop/visual%20studio%20code/Spotify%20Clone/songs%20pics/9.jpg" },
    { songName: "rabba e ishq", filePath: "file:///C:/Users/immbz/OneDrive/Desktop/visual%20studio%20code/Spotify%20Clone/songs/3.mp3", coverPath: "file:///C:/Users/immbz/OneDrive/Desktop/visual%20studio%20code/Spotify%20Clone/songs%20pics/4.jpg" },
    { songName: "bhuladena mjhe", filePath: "file:///C:/Users/immbz/OneDrive/Desktop/visual%20studio%20code/Spotify%20Clone/songs/4.mp3", coverPath: "file:///C:/Users/immbz/OneDrive/Desktop/visual%20studio%20code/Spotify%20Clone/songs%20pics/1.jpg" },
    { songName: "husn", filePath: "file:///C:/Users/immbz/OneDrive/Desktop/visual%20studio%20code/Spotify%20Clone/songs/5.mp3", coverPath: "file:///C:/Users/immbz/OneDrive/Desktop/visual%20studio%20code/Spotify%20Clone/songs%20pics/5.jpg" },
    { songName: "to hai kahan", filePath: "file:///C:/Users/immbz/OneDrive/Desktop/visual%20studio%20code/Spotify%20Clone/songs/6.mp3", coverPath: "file:///C:/Users/immbz/OneDrive/Desktop/visual%20studio%20code/Spotify%20Clone/songs%20pics/7.jpg" },
    { songName: "tere bin", filePath: "file:///C:/Users/immbz/OneDrive/Desktop/visual%20studio%20code/Spotify%20Clone/songs/7.mp3", coverPath: "file:///C:/Users/immbz/OneDrive/Desktop/visual%20studio%20code/Spotify%20Clone/songs%20pics/6.jpg" },
];

songItems.forEach(element, i => {
    element.getElementByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
    
})

//audio.element.play()

// handle play - pause click
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = (1);
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = (0);
    }
});

// listen to event
audioElement.addEventListener('timeupdate', () => {

// seekbar update
progress = parseInt((audioElement.currentTime / audioElement.duration) *100);
MyProgressBar.value = progress;
})
MyProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= MyProgressBar.value * audioElement.duration/100;
})

