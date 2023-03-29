/*function clickAccordion('t') {
    let pai = document.getElementsByClassName("hide")[t].parentElement;
    let conteudo = pai.lastElementChild.classList.contains("accordion-paragrafo");

    if(conteudo == true) {
        pai.lastElementChild.className = "show";
    } else {
        pai.lastElementChild.className = "hide";
    }
}*/


/* >>>> FUNCIONOU <<<< 
function clickAccordion(t) {
    document.getElementsByClassName('titulo')
    [t].parentElement.style.backgroundColor = "#2E7BA2";
}
*/

/*  >>>>>  SUPER FUNCIONOU :D <<<<<
function clickAccordion(t) {
    var pai = document.getElementsByClassName('titulo')[t].parentElement;
    var conteudo = pai.lastElementChild.classList.contains('hide');

    console.log(conteudo);
}
*/


function clickAccordion(t) {
    var pai = document.getElementsByClassName("titulo")[t].parentElement;
    var conteudo = pai.lastElementChild.classList.contains("hide");

    if(conteudo == true) {
        pai.lastElementChild.className = "show";
    }else {
        pai.lastElementChild.className = "hide";
    }

    console.log(conteudo);
}


