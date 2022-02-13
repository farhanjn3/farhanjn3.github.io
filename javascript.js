const loadd = document.querySelectorAll(".loadd");
const music = new Audio("music.mp3");
setTimeout(function () {
    loadd.forEach(loadd => {
        loadd.classList.toggle("d-none");
    })
}, 2000);
if ('mediaSession' in navigator) {

    navigator.mediaSession.metadata = new MediaMetadata({
        title: 'Farhanjn3 | Muh Farhan',
        artist: 'Muh farhan',
        album: 'Muh Farhan',
        artwork: [
            { src: 'https://farhanjn3.github.io/farhanjn3-muh-farhan.jpg', type: 'image/jpg' }
        ]
    });

    navigator.mediaSession.setActionHandler('play', function () {
        document.querySelectorAll(".buttonPlayMusic").forEach(btn => {
            btn.classList.add("activePlayMusic");
        });
        music.play();
        music.loop = true;
    });
    navigator.mediaSession.setActionHandler('pause', function () {
        document.querySelectorAll(".buttonPlayMusic").forEach(btn => {
            btn.classList.remove("activePlayMusic");
        });
        music.pause();
    });
};
function playMusic() {
    if (music.paused) {
        document.querySelectorAll(".buttonPlayMusic").forEach(btn => {
            btn.classList.add("activePlayMusic");
        });
        music.play();
        music.loop = true;
    } else {
        document.querySelectorAll(".buttonPlayMusic").forEach(btn => {
            btn.classList.remove("activePlayMusic");
        });
        music.pause();
    };
};