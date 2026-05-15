// LOADER

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    },1000);

});

// MENU MOBILE

const mobileBtn = document.getElementById("mobileBtn");

const menu = document.getElementById("menu");

mobileBtn.addEventListener("click", () => {

    menu.classList.toggle("active");

});

// NAVBAR EFECTO

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

// BOTON HERO

function scrollToSection(){

    document.getElementById("reserva").scrollIntoView({

        behavior:"smooth"

    });

}

// REVEAL

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(reveal => {

        const windowHeight = window.innerHeight;

        const revealTop = reveal.getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            reveal.classList.add("show");

        }

    });

});
