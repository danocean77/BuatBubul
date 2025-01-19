onload = () =>{
        document.body.classList.remove("container");
};

// Fungsi untuk mengontrol musik
function toggleMusic() {
    var music = document.getElementById('backgroundMusic');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
