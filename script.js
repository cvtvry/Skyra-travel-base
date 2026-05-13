// NAVBAR SCROLL EFFECT

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "rgba(3, 7, 18, 0.92)";
        navbar.style.boxShadow = "0 0 25px rgba(0,0,0,0.5)";

    } else {

        navbar.style.background = "rgba(0,0,0,0.45)";
        navbar.style.boxShadow = "none";

    }

});

// CARD ANIMATION

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold:0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.8s ease";

    observer.observe(card);

});

// GLOW EFFECT HERO BUTTON

const heroBtn = document.querySelector(".hero-btn");

setInterval(() => {

    heroBtn.classList.toggle("pulse");

}, 2000);

// FLOATING PARTICLES

for(let i = 0; i < 25; i++){

    const particle = document.createElement("div");

    particle.classList.add("particle");

    document.body.appendChild(particle);

    particle.style.left = Math.random() * 100 + "vw";

    particle.style.animationDuration =
    (Math.random() * 10 + 5) + "s";

    particle.style.opacity = Math.random();

    particle.style.width =
    particle.style.height =
    (Math.random() * 4 + 2) + "px";

}
