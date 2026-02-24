function showWish() {

    localStorage.setItem("musicPlaying", "yes");

    const music = document.getElementById("bgMusic");
    if (music) music.play();

    const wishElement = document.getElementById("wish");
    if (!wishElement) return;

    const text =
    "Happy Birthday Nikhitha Sri ❤️ You are not just becoming a doctor... you are becoming someone's hope.";

    let i = 0;
    wishElement.innerHTML = "";

    function typing() {
        if (i < text.length) {
            wishElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 40);
        }
    }

    typing();

    if (typeof confetti !== "undefined") {
        confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.6 }
        });
    }
}

window.onload = function () {
    const music = document.getElementById("bgMusic");

    if (localStorage.getItem("musicPlaying") === "yes" && music) {
        music.play();
    }
};
