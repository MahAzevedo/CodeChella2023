/*const nav__button__mobiles = document.getElementsByClassName('nav__button__mobile');

function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault()
    const nav__bars = document.getElementsByClassName('nav__bar');
    nav__bars[0].classList.toggle('active');
}

nav__button__mobiles[0].addEventListener('click', toggleMenu);
nav__button__mobiles[0].addEventListener('touchstart', toggleMenu);


*/

/* esse hamburguer é o mais simples que funciona bem 
function myFunction(x) {
    x.classList.toggle("change");
  }

*/
 

const hamburguer = document.querySelector(".hamburguer");
const nav__menu = document.querySelector(".nav__menu");

hamburguer.addEventListener("click", () -> ) {
  hamburguer.classList.toggle("active");
  nav__menu.classList.toggle("active");
}