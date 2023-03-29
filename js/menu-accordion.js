function clickAccordion(t) {
    let pai = document.getElementsByClassName("hide")[t].parentElement;
    let conteudo = pai.lastElementChild.classList.contains("accordion-paragrafo");

    if(conteudo == true) {
        pai.lastElementChild.className = "show";
    } else {
        pai.lastElementChild.className = "hide";
    }
}

