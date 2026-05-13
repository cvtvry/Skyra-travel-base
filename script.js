const reserveButtons = document.querySelectorAll('button');

reserveButtons.forEach(button => {

    button.addEventListener('click', () => {

        alert(
            'Bienvenido a SKÝRA 🐉✨\n\nTu aventura por los reinos del norte comenzará pronto.'
        );

    });

});
