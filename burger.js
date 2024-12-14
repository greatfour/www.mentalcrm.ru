document.addEventListener ('DOMContentLoaded', function () {
    const hamburgerButton = 
    document.getElementById('hamburger-button');
    const menu =
    document.getElementById('menu-hamburger');

    hamburgerButton.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});