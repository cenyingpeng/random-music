const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const songs = [5];
// Play song
function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

// Pause song
function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

// Previous song
function prevSong() {
    if (songs == null) {
        alert("!!")
    } else {
        audio.src = songs.push;
        audio.play()
        console.log(songs)
    }
}

// Update progress bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

nextBtn.addEventListener('click', () => {
    axios.get("https://api.uomg.com/api/rand.music?sort=热歌榜&format=json").then(
        function(response) {
            // console.log(response);
            console.log(response);
            //   that.musicUrl = response.data.data[0].url;
            audio.src = response.data.data.url
            songs.push = audio.src;
            // songs[length - 1] = songs.push;
            console.log(songs)
            console.log(songs.push)
                // console.log(songs.length - 1)
                // document.write(songs.push(audio.src))
            cover.src = response.data.data.picurl
            title.innerText = response.data.data.name
            audio.play()
        },
        function(err) {}
    )
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {

    } else {
        playSong();
    }
})

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

audio.addEventListener('ended', () => {
        axios.get("https://api.uomg.com/api/rand.music?sort=热歌榜&format=json").then(
            function(response) {
                // console.log(response);
                // console.log(response.data.data.url);
                //   that.musicUrl = response.data.data[0].url;
                audio.src = response.data.data.url
                audio.play()
            },
            function(err) {}
        )
    })
    // Click on progress bar
progressContainer.addEventListener('click', setProgress);
// Time/song update
audio.addEventListener('timeupdate', updateProgress);
// Change song
prevBtn.addEventListener('click', prevSong);