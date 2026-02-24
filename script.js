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
// Floating hearts animation
setInterval(() => {

    const heart = document.createElement("div");
    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = "20px";
    heart.style.animation = "floatUp 5s linear";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);

}, 800);
function toggleDarkMode() {
    document.body.classList.toggle("darkMode");
}
const birthday = new Date("Feb 27, 2026 00:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();
    const gap = birthday - now;

    const days = Math.floor(gap / (1000*60*60*24));
    const hours = Math.floor((gap%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((gap%(1000*60*60))/(1000*60));
    const seconds = Math.floor((gap%(1000*60))/1000);

    const cd = document.getElementById("countdown");
    if(cd)
        cd.innerHTML =
        `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s left`;
},1000);
