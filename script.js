function showWish() {

    // Typing Message
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

    // 🎉 Confetti
    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
    });

    // 🎵 PLAY SONG (Guaranteed Method)
    const music = new Audio("naah.mpeg");
    music.play();
}
