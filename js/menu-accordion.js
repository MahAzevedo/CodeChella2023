/* >>>> FUNCIONOU <<<<  1exemplo, q leva ao 2exemplo
function clickAccordion(t) {
    document.getElementsByClassName('titulo')
    [t].parentElement.style.backgroundColor = "#2E7BA2";
}
*/

/*  >>>>>  SUPER FUNCIONOU :D <<<<<  2exemplo, que leva ao 3exemplo
function clickAccordion(t) {
    let pai = document.getElementsByClassName('titulo')[t].parentElement;
    let conteudo = pai.lastElementChild.classList.contains('hide');

    console.log(conteudo);
}
*/

// 3exemplo, completo: :D smile face 
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


// FUNCIONOU 5exemplo, que leva ao 6exemplo
/*
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

    //console.log(conteudo);
}
*/

// 6exemplo, com o dropdown descendo e subindo, que leva ao 7exemplo:
// tirei o .lastElementChild pq nao sera usado mais, agora sera: sectionHide
/*function clickAccordion(t) {
    let pai = document.getElementsByClassName("accordion-drop")[t].parentElement;
    let img = document.getElementsByClassName("seta")[t];
    let conteudo = pai.classList.contains("sectionHide");
    //console.log(document.getElementsByClassName('section'));

    if(conteudo == true) {
        pai.className = "section sectionShow";
        img.style.transform = "rotate("+-90+"deg)";
    }else {
        pai.className = "section sectionHide";
        img.style.transform = "rotate("+0+"deg)";
    }

}*/


// 7exemplo
function clickAccordion(t) {
    let pai = document.getElementsByClassName("accordion-drop")[t].parentElement;
    let img = document.getElementsByClassName("seta")[t];
    let conteudo = pai.classList.contains("sectionHide");
    let sections = document.getElementsByClassName("section");

    for(let i = 0; i < sections.length; i++) {
        //console.log(sections[i]);
        sections[i].classList = "section NovaClass";
    }

    if(conteudo == true) {
        pai.className = "section sectionShow";
        img.style.transform = "rotate("+-90+"deg)";
    }else {
        pai.className = "section sectionHide";
        img.style.transform = "rotate("+0+"deg)";
    }

}