const nav__button__mobiles = document.getElementsByClassName('nav__button__mobile');

function toggleMenu() {
    const nav__bars = document.getElementsByClassName('nav__bar');
    nav__bars[0].classList.toggle('active');
}

nav__button__mobiles[0].addEventListener('click', toggleMenu);


