// NAVBAR EFFECT

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "rgba(5,7,13,0.92)";
        navbar.style.boxShadow = "0 0 25px rgba(0,0,0,0.4)";

    } else {

        navbar.style.background = "rgba(0,0,0,0.4)";
        navbar.style.boxShadow = "none";

    }

});

// SCROLL ANIMATION

const cards = document.querySelectorAll(
    ".destination-card, .package-card"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

},{
    threshold:0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.8s ease";

    observer.observe(card);

});
