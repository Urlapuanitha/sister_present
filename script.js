function showWish() {

    const text = "Happy Birthday Nikhitha Sri ❤️ You are not just becoming a doctor... you are becoming someone's hope.";
    let i = 0;

    document.getElementById("wish").innerHTML = "";

    function typing() {
        if (i < text.length) {
            document.getElementById("wish").innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 40);
        }
    }

    typing();

    // Confetti effect
    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
    });

    // 🎵 Play Naah song
    const music = document.getElementById("bdayMusic");

if (music) {
    music.currentTime = 0;
    music.play().catch(() => {
        console.log("Autoplay blocked");
    });
}
}
