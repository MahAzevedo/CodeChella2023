/*function clickAccordion(t) {
    let pai = document.getElementsByClassName("hide")[t].parentElement;
    let conteudo = pai.lastElementChild.classList.contains("accordion-paragrafo");

    if(conteudo == true) {
        pai.lastElementChild.className = "show";
    } else {
        pai.lastElementChild.className = "hide";
    }
}*/


/* >>>> FUNCIONOU <<<<  1exemplo, q leva ao 2exemplo
function clickAccordion(t) {
    document.getElementsByClassName('titulo')
    [t].parentElement.style.backgroundColor = "#2E7BA2";
}
*/

/*  >>>>>  SUPER FUNCIONOU :D <<<<<  2exemplo, que leva ao 3exemplo
function clickAccordion(t) {
    var pai = document.getElementsByClassName('titulo')[t].parentElement;
    var conteudo = pai.lastElementChild.classList.contains('hide');

    console.log(conteudo);
}
*/

// 3exemplo, completo: :D smile face  // troquei var, por let 
// 3exemplo, que leva ao 4exemplo  , a seta
/*
function clickAccordion(t) {
    let pai = document.getElementsByClassName("titulo")[t].parentElement;
    let conteudo = pai.lastElementChild.classList.contains("hide");

    if(conteudo == true) {
        pai.lastElementChild.className = "show";
    }else {
        pai.lastElementChild.className = "hide";
    }

    console.log(conteudo);
}
*/

// 4exemplo completo e, com seta:
/*
function clickAccordion(t) {
    let pai = document.getElementsByClassName("titulo")[t].parentElement;
    let img = document.getElementsByClassName("icon")[t];
    let conteudo = pai.lastElementChild.classList.contains("hide");

    if(conteudo == true) {
        pai.lastElementChild.className = "show";
        img.style.transform = "rotate("+-90+"deg)";
    }else {
        pai.lastElementChild.className = "hide";
        img.style.transform = "rotate("+0+"deg)";
    }

    console.log(conteudo);
}*/


// teste
function clickAccordion(t) {
    let pai = document.getElementsByClassName("accordion-drop")[t].parentElement;
    let img = document.getElementsByClassName("seta")[t];
    let conteudo = pai.lastElementChild.classList.contains("hide");

    if(conteudo == true) {
        pai.lastElementChild.className = "show";
        img.style.transform = "rotate("+-90+"deg)";
    }else {
        pai.lastElementChild.className = "hide";
        img.style.transform = "rotate("+0+"deg)";
    }

    console.log(conteudo);
}