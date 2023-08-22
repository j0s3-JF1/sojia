/* script do menu responsivo */
function toggleMenu() {
    var menu = document.querySelector(".menu-class");
    var button = document.querySelector(".button-menu");

    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
    } else {
        menu.classList.add("open");
    }

    button.classList.toggle("change");
}

function closeNav() {
    var menu = document.querySelector(".menu-class");
    var button = document.querySelector(".button-menu");

    menu.classList.remove("open");
    button.classList.remove("change");
}
/* fim do script do menu responsivo */



/**
 * Script dos jogos de pergunta e resposta (QUIZ)
 */
function Quiz1(pergunta, resposta) {

    var respostaCorreta = "";

    if (pergunta == '1') {

        respostaCorreta = "a";

        if (resposta.toLowerCase() == respostaCorreta.toLowerCase()) {
            alert("Resposta Correta!");
        } else {
            alert("Resposta Incorreta!  ")
        }
    } else if (pergunta == '2') {

        respostaCorreta = "c";

        if (resposta.toLowerCase() == respostaCorreta.toLowerCase()) {
            alert("Resposta Correta!");
        } else {
            alert("Resposta Incorreta!  ")
        }
    }
}

function Quiz2(pergunta, resposta) {

    var respostaCorreta = "";

    if (pergunta == '1') {

        respostaCorreta = "b";

        if (resposta.toLowerCase() == respostaCorreta.toLowerCase()) {
            alert("Resposta Correta!");
        } else {
            alert("Resposta Incorreta!  ")
        }
    } else if (pergunta == '2') {

        respostaCorreta = "b";

        if (resposta.toLowerCase() == respostaCorreta.toLowerCase()) {
            alert("Resposta Correta!");
        } else {
            alert("Resposta Incorreta!  ")
        }
    } else if (pergunta == '3') {

        respostaCorreta = "c";

        if (resposta.toLowerCase() == respostaCorreta.toLowerCase()) {
            alert("Resposta Correta!");
        } else {
            alert("Resposta Incorreta!  ")
        }
    }

}

function Quiz3(pergunta, resposta) {

    var respostaCorreta = "";

    if (pergunta == '1') {

        respostaCorreta = "b";

        if (resposta.toLowerCase() == respostaCorreta.toLowerCase()) {
            alert("Resposta Correta!");
        } else {
            alert("Resposta Incorreta!  ")
        }
    } else if (pergunta == '2') {

        respostaCorreta = "a";

        if (resposta.toLowerCase() == respostaCorreta.toLowerCase()) {
            alert("Resposta Correta!");
        } else {
            alert("Resposta Incorreta!  ")
        }
    } else if (pergunta == '3') {

        respostaCorreta = "a";

        if (resposta.toLowerCase() == respostaCorreta.toLowerCase()) {
            alert("Resposta Correta!");
        } else {
            alert("Resposta Incorreta!  ")
        }
    } else if (pergunta == '4') {

        respostaCorreta = "a";

        if (resposta.toLowerCase() == respostaCorreta.toLowerCase()) {
            alert("Resposta Correta!");
        } else {
            alert("Resposta Incorreta!  ")
        }
    }

}