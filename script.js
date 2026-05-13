/* MENU MOBILE */

const menuToggle = document.querySelector('.menu-toggle');

const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {

    navLinks.classList.toggle('active');

});

/* NAVBAR SCROLL */

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        navbar.classList.add('scrolled');

    } else {

        navbar.classList.remove('scrolled');

    }

});

/* ANIMACIONES SCROLL */

const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

},{
    threshold:0.2
});

fadeElements.forEach(element => {

    observer.observe(element);

});

/* BOTONES */

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {

    button.addEventListener('click', () => {

        if(button.innerText.includes('Reservar')){

            alert(
                'Bienvenido a SKÝRA ✨\n\nTu aventura por los reinos del norte comenzará pronto.'
            );

        }

        if(button.innerText.includes('Explorar')){

            document.querySelector('#destinos').scrollIntoView({
                behavior:'smooth'
            });

        }

    });

});

/* CERRAR MENU MOBILE */

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', () => {

        navLinks.classList.remove('active');

    });

});
