/*function clickAccordion('t') {
    let pai = document.getElementsByClassName("hide")[t].parentElement;
    let conteudo = pai.lastElementChild.classList.contains("accordion-paragrafo");

    if(conteudo == true) {
        pai.lastElementChild.className = "show";
    } else {
        pai.lastElementChild.className = "hide";
    }
}*/


function clickAccordion(t) {
    document.getElementsByClassName('titulo')
    [t].parentElement.style.backgroundColor = "#2E7BA2";
}





/*function clickAccordion('hide') {
    document.getElementsByClassName("accordion-titulo").item = "hide";
}*

/*
const menu = document.querySelector(".nav__lista__ul");

botao.addEventListener("click", () =>) {
    if (menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none"
    }
}
*/

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
 

/*
const hamburguer = document.querySelector(".hamburguer");
const nav__menu = document.querySelector(".nav__menu");

hamburguer.addEventListener("click", () -> ) {
  hamburguer.classList.toggle("active");
  nav__menu.classList.toggle("active");
}
*/
