const botao = document.querySelector(".nav__menu__configuracoes");
const menu = document.querySelector(".nav__lista__ul");

botao.addEventListener("click", () => {
    if (menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none"
    }
})