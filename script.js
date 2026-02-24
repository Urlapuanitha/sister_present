// Section switching (NO PAGE RELOAD)
function showSection(sectionId) {

    const sections = document.querySelectorAll(".section");

    sections.forEach(sec => {
        sec.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";
}


// Surprise Button
function startSurprise() {

    const music = document.getElementById("bgMusic");
    music.play();

    const text =
    "Happy Birthday Nikhitha Sri ❤️ You are not just becoming a doctor... you are becoming someone's hope.";

    let i = 0;
    const wish = document.getElementById("wish");
    wish.innerHTML = "";

    function typing() {
        if (i < text.length) {
            wish.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 40);
        }
    }

    typing();

    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
    });
}
