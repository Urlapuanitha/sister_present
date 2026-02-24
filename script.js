// 🎵 GLOBAL MUSIC OBJECT
let music = new Audio("naah.mpeg");
music.loop = true; // keeps playing continuously

function showWish() {

    // Save music state
    localStorage.setItem("musicPlaying", "true");

    // Play music
    music.play();

    // Typing message
    const text = "Happy Birthday Nikhitha Sri ❤️ You are not just becoming a doctor... you are becoming someone's hope.";
    let i = 0;

    const wishElement = document.getElementById("wish");
    wishElement.innerHTML = "";

    function typing() {
        if (i < text.length) {
            wishElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 40);
        }
    }

    typing();

    // Confetti
    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
    });
}


// ✅ AUTO PLAY ON ALL PAGES
window.onload = function () {
    if (localStorage.getItem("musicPlaying") === "true") {
        music.play();
    }
};
