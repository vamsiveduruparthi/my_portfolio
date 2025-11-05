/* Fade on scroll */
const faders = document.querySelectorAll('.fade-in');
function reveal() {
    faders.forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight - 80)
            el.classList.add('show');
    });
}
window.addEventListener('scroll', reveal);
reveal();

/* Typing Animation */
const roles = ["Data Scientist", "Python Developer", "ML Engineer", "AI Explorer"];
let i = 0, j = 0;
function type() {
    document.querySelector(".typing").textContent = roles[i].slice(0, j++);
    if(j > roles[i].length) { j = 0; i = (i+1)%roles.length; setTimeout(type, 900); }
    else setTimeout(type, 120);
}
type();
