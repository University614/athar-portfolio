// ============================================
// TYPING ANIMATION
// ============================================

const texts = [
    "Web Developer",
    "Data Science Student",
    "Full Stack Developer"
];

let textIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeText() {
    if (!typingElement) return;

    if (charIndex < texts[textIndex].length) {
        typingElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(eraseText, 1500);
    }
}

function eraseText() {
    if (charIndex > 0) {
        typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 500);
    }
}

window.addEventListener("load", () => {
    typeText();
});
