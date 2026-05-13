// LOADER

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 1800);

});

// NAVBAR EFFECT

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "rgba(3, 7, 18, 0.92)";
        navbar.style.boxShadow = "0 0 25px rgba(0,0,0,0.5)";

    } else {

        navbar.style.background = "rgba(0,0,0,0.4)";
        navbar.style.boxShadow = "none";

    }

});

// CARD ANIMATION

const cards = document.querySelectorAll(
    ".card, .package-card, .testimonial-card, .stat-box"
);

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

// FLOATING PARTICLES

for(let i = 0; i < 35; i++){

    const particle = document.createElement("div");

    particle.classList.add("particle");

    document.body.appendChild(particle);

    particle.style.left =
    Math.random() * 100 + "vw";

    particle.style.animationDuration =
    (Math.random() * 10 + 5) + "s";

    particle.style.opacity =
    Math.random();

    particle.style.width =
    particle.style.height =
    (Math.random() * 4 + 2) + "px";

}

// BOOKING BUTTON

const bookingForm = document.querySelector(".booking-form");

bookingForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("¡Tu aventura con Skýra comenzará pronto! 🐉");

});
