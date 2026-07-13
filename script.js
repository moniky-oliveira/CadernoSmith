// ------------------------------
// BOTÃO VER RESPOSTA
// ------------------------------

document.addEventListener("DOMContentLoaded", function () {

    const botao = document.getElementById("btnResposta");
    const resposta = document.getElementById("resposta");

    if(botao){

        botao.addEventListener("click", function(){

            if(resposta.style.display=="none"){

                resposta.style.display="block";
                botao.textContent="Ocultar resposta";

            }else{

                resposta.style.display="none";
                botao.textContent="Ver resposta";

            }

        });

    }

});


// ------------------------------
// EXERCÍCIO 198
// ------------------------------

function corrigir378() {

    let corretos = 0;

    const respostas = {

        f1:"2",
        f2:"3",
        f3:"3",
        f4:"3",
        f5:"7",

        d1:"2",
        d2:"3",
        d3:"3",
        d4:"3",
        d5:"7",
        soma1:"18",

        n1:"3",
        n2:"7",
        n3:"8",
        soma2:"18"

    };

    for (let id in respostas){

        const campo = document.getElementById(id);

        campo.classList.remove("correto","errado");

        if(campo.value.trim()==respostas[id]){

            campo.classList.add("correto");
            corretos++;

        }else{

            campo.classList.add("errado");

        }

    }

    const opcao = document.querySelector('input[name="smith378"]:checked');

    if(opcao && opcao.value=="Smith"){

        corretos++;

    }

    const resultado = document.getElementById("resultado378");

if(corretos==16){

    resultado.innerHTML =
    "<p style='color:green'><strong>Parabéns! Você acertou tudo!</strong></p>";

}else{

    resultado.innerHTML =
    "<p style='color:#C62828'><strong>Você acertou "+corretos+" de 16 respostas.</strong></p>";

}

document.getElementById("botaoProximo378").disabled = false;

}

function proximo378(){

    document.getElementById("card378").style.display = "none";
    document.getElementById("card198").style.display = "block";

}

function corrigir198() {

    let corretos = 0;

    const respostas = {

        f198_1:"2",
        f198_2:"3",
        f198_3:"3",
        f198_4:"11",

        d198_1:"2",
        d198_2:"3",
        d198_3:"3",
        d198_4:"1",
        d198_5:"1",
        s198_1:"10",

        n198_1:"1",
        n198_2:"9",
        n198_3:"8",
        s198_2:"18"

    };

    for(let id in respostas){

        const campo = document.getElementById(id);

        campo.classList.remove("correto","errado");

        if(campo.value.trim()==respostas[id]){

            campo.classList.add("correto");
            corretos++;

        }else{

            campo.classList.add("errado");

        }

    }

    const opcao = document.querySelector('input[name="smith198"]:checked');

    if(opcao && opcao.value=="Não Smith"){

        corretos++;

    }

    const resultado = document.getElementById("resultado198");

    if(corretos==15){

        resultado.innerHTML =
        "<p style='color:green'><strong>Parabéns! Você acertou tudo!</strong></p>";

    }else{

        resultado.innerHTML =
        "<p style='color:#C62828'><strong>Você acertou "+corretos+" de 15 respostas.</strong></p>";

    }

    document.getElementById("botaoProximo198").disabled = false;

}

function proximo198(){

    document.getElementById("card198").style.display="none";
    document.getElementById("card250").style.display="block";

}

function corrigir250(){

    let corretos = 0;

    const respostas = {

        f250_1:"2",
        f250_2:"5",
        f250_3:"5",
        f250_4:"5",

        d250_1:"2",
        d250_2:"5",
        d250_3:"5",
        d250_4:"5",
        s250_1:"17",

        n250_1:"2",
        n250_2:"5",
        n250_3:"0",
        s250_2:"7"

    };

    for(let id in respostas){

        const campo=document.getElementById(id);

        campo.classList.remove("correto","errado");

        if(campo.value.trim()==respostas[id]){

            campo.classList.add("correto");
            corretos++;

        }else{

            campo.classList.add("errado");

        }

    }

    const opcao=document.querySelector('input[name="smith250"]:checked');

    if(opcao && opcao.value=="Não Smith"){

        corretos++;

    }

    const resultado=document.getElementById("resultado250");

    if(corretos==14){

        resultado.innerHTML="<p style='color:green'><strong>Parabéns! Você acertou tudo!</strong></p>";

    }else{

        resultado.innerHTML="<p style='color:#C62828'><strong>Você acertou "+corretos+" de 14 respostas.</strong></p>";

    }

    document.getElementById("botaoProximo250").disabled=false;

}

function proximo250(){

    document.getElementById("card250").style.display="none";
    document.getElementById("card85").style.display="block";

}

function corrigir85(){

    let corretos = 0;

    const respostas = {

        f85_1:"5",
        f85_2:"17",

        d85_1:"5",
        d85_2:"1",
        d85_3:"7",
        s85_1:"13",

        n85_1:"8",
        n85_2:"5",
        s85_2:"13"

    };

    for(let id in respostas){

        const campo=document.getElementById(id);

        campo.classList.remove("correto","errado");

        if(campo.value.trim()==respostas[id]){

            campo.classList.add("correto");
            corretos++;

        }else{

            campo.classList.add("errado");

        }

    }

    const opcao=document.querySelector('input[name="smith85"]:checked');

    if(opcao && opcao.value=="Smith"){

        corretos++;

    }

    const resultado=document.getElementById("resultado85");

    if(corretos==10){

        resultado.innerHTML="<p style='color:green'><strong>Parabéns! Você acertou tudo!</strong></p>";

    }else{

        resultado.innerHTML="<p style='color:#C62828'><strong>Você acertou "+corretos+" de 10 respostas.</strong></p>";

    }

    document.getElementById("botaoProximo85").disabled=false;

}

function proximo85(){

    alert("Parabéns! Você concluiu os exercícios básicos.");

}