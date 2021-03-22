const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const songs = [2];
const cover1 = [2];
const title3 = [2];
var prev = "";

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
    if (songs[0] == songs[1]) {
        alert("听歌就像爱情，错过了就无法找回啦~")
    } else {
        // audio.src = songs.push;
        // console.log(title1)
        // console.log(songs.push)
        // prev = songs.toString
        // console.log(prev)
        audio.src = songs[0]
            // title.innerText = user.data1
        cover.src = cover1[0]
        title.innerText = title3[0]
        audio.play()
        songs[1] = songs[0]
            // title.innerText = title1
            // console.log(songs)
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
                // console.log(response);
                //   that.musicUrl = response.data.data[0].url;
                audio.src = response.data.data.url
                songs.push = audio.src;
                // songs[length - 1] = songs.push;
                // console.log(songs)
                // console.log(songs.push)
                // console.log(songs.length - 1)
                // document.write(songs.push(audio.src))
                cover.src = response.data.data.picurl
                cover1.push = cover.src
                title.innerText = response.data.data.name + "--" + response.data.data.artistsname
                    // user.data1 = title
                    // console.log(user.data1)
                    // 
                    // console.log(title1)
                title3.push = title.innerText
                    // console.log(title3)
                audio.play()
            },
            function(err) {}
        )
        // title2 = title1
        // console.log(title1)
        // title1 = response.data.data.url
    title3[0] = title3.push
    songs[0] = songs.push
    cover1[0] = cover1.push
        // console.log(songs)
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
                cover.src = response.data.data.picurl
                title.innerText = response.data.data.name + "--" + response.data.data.artistsname
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