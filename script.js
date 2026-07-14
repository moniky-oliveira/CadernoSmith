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

// ===============================
// TABELA DOS NÚMEROS DE SMITH
// ===============================

const numerosSmith = [

{
numero:4,
fatores:"2 × 2",
somaNumero:"4 = 4",
somaFatores:"2 + 2 = 4"
},

{
numero:22,
fatores:"2 × 11",
somaNumero:"2 + 2 = 4",
somaFatores:"2 + 1 + 1 = 4"
},

{
numero:27,
fatores:"3 × 3 × 3",
somaNumero:"2 + 7 = 9",
somaFatores:"3 + 3 + 3 = 9"
},

{
numero:58,
fatores:"2 × 29",
somaNumero:"5 + 8 = 13",
somaFatores:"2 + 2 + 9 = 13"
},

{
numero:85,
fatores:"5 × 17",
somaNumero:"8 + 5 = 13",
somaFatores:"5 + 1 + 7 = 13"
},

{
numero:94,
fatores:"2 × 47",
somaNumero:"9 + 4 = 13",
somaFatores:"2 + 4 + 7 = 13"
},

{
numero:121,
fatores:"11 × 11",
somaNumero:"1 + 2 + 1 = 4",
somaFatores:"1 + 1 + 1 + 1 = 4"
},

{
numero:166,
fatores:"2 × 83",
somaNumero:"1 + 6 + 6 = 13",
somaFatores:"2 + 8 + 3 = 13"
},

{
numero:202,
fatores:"2 × 101",
somaNumero:"2 + 0 + 2 = 4",
somaFatores:"2 + 1 + 0 + 1 = 4"
},

{
numero:265,
fatores:"5 × 53",
somaNumero:"2 + 6 + 5 = 13",
somaFatores:"5 + 5 + 3 = 13"
},

{
numero:274,
fatores:"2 × 137",
somaNumero:"2 + 7 + 4 = 13",
somaFatores:"2 + 1 + 3 + 7 = 13"
},

{
numero:319,
fatores:"11 × 29",
somaNumero:"3 + 1 + 9 = 13",
somaFatores:"1 + 1 + 2 + 9 = 13"
},

{
numero:346,
fatores:"2 × 173",
somaNumero:"3 + 4 + 6 = 13",
somaFatores:"2 + 1 + 7 + 3 = 13"
},

{
numero:355,
fatores:"5 × 71",
somaNumero:"3 + 5 + 5 = 13",
somaFatores:"5 + 7 + 1 = 13"
},

{
numero:378,
fatores:"2 × 3 × 3 × 3 × 7",
somaNumero:"3 + 7 + 8 = 18",
somaFatores:"2 + 3 + 3 + 3 + 7 = 18"
},

{
numero:382,
fatores:"2 × 191",
somaNumero:"3 + 8 + 2 = 13",
somaFatores:"2 + 1 + 9 + 1 = 13"
},

{
numero:391,
fatores:"17 × 23",
somaNumero:"3 + 9 + 1 = 13",
somaFatores:"1 + 7 + 2 + 3 = 13"
},

{
numero:438,
fatores:"2 × 3 × 73",
somaNumero:"4 + 3 + 8 = 15",
somaFatores:"2 + 3 + 7 + 3 = 15"
},

{
numero:454,
fatores:"2 × 227",
somaNumero:"4 + 5 + 4 = 13",
somaFatores:"2 + 2 + 2 + 7 = 13"
},

{
numero:483,
fatores:"3 × 7 × 23",
somaNumero:"4 + 8 + 3 = 15",
somaFatores:"3 + 7 + 2 + 3 = 15"
},

{
numero:517,
fatores:"11 × 47",
somaNumero:"5 + 1 + 7 = 13",
somaFatores:"1 + 1 + 4 + 7 = 13"
},

{
numero:526,
fatores:"2 × 263",
somaNumero:"5 + 2 + 6 = 13",
somaFatores:"2 + 2 + 6 + 3 = 13"
},

{
numero:535,
fatores:"5 × 107",
somaNumero:"5 + 3 + 5 = 13",
somaFatores:"5 + 1 + 0 + 7 = 13"
},

{
numero:562,
fatores:"2 × 281",
somaNumero:"5 + 6 + 2 = 13",
somaFatores:"2 + 2 + 8 + 1 = 13"
},

{
numero:576,
fatores:"2 × 2 × 2 × 2 × 2 × 2 × 3 × 3",
somaNumero:"5 + 7 + 6 = 18",
somaFatores:"2 + 2 + 2 + 2 + 2 + 2 + 3 + 3 = 18"
},

{
numero:588,
fatores:"2 × 2 × 3 × 7 × 7",
somaNumero:"5 + 8 + 8 = 21",
somaFatores:"2 + 2 + 3 + 7 + 7 = 21"
},

{
numero:627,
fatores:"3 × 11 × 19",
somaNumero:"6 + 2 + 7 = 15",
somaFatores:"3 + 1 + 1 + 1 + 9 = 15"
},

{
numero:634,
fatores:"2 × 317",
somaNumero:"6 + 3 + 4 = 13",
somaFatores:"2 + 3 + 1 + 7 = 13"
},

{
numero:636,
fatores:"2 × 2 × 3 × 53",
somaNumero:"6 + 3 + 6 = 15",
somaFatores:"2 + 2 + 3 + 5 + 3 = 15"
},

{
numero:645,
fatores:"3 × 5 × 43",
somaNumero:"6 + 4 + 5 = 15",
somaFatores:"3 + 5 + 4 + 3 = 15"
},

{
numero:648,
fatores:"2 × 2 × 2 × 3 × 3 × 3 × 3",
somaNumero:"6 + 4 + 8 = 18",
somaFatores:"2 + 2 + 2 + 3 + 3 + 3 + 3 = 18"
},

{
numero:654,
fatores:"2 × 3 × 109",
somaNumero:"6 + 5 + 4 = 15",
somaFatores:"2 + 3 + 1 + 0 + 9 = 15"
},

{
numero:663,
fatores:"3 × 13 × 17",
somaNumero:"6 + 6 + 3 = 15",
somaFatores:"3 + 1 + 3 + 1 + 7 = 15"
},

{
numero:666,
fatores:"2 × 3 × 3 × 37",
somaNumero:"6 + 6 + 6 = 18",
somaFatores:"2 + 3 + 3 + 3 + 7 = 18"
},

{
numero:690,
fatores:"2 × 3 × 5 × 23",
somaNumero:"6 + 9 + 0 = 15",
somaFatores:"2 + 3 + 5 + 2 + 3 = 15"
},

{
numero:706,
fatores:"2 × 353",
somaNumero:"7 + 0 + 6 = 13",
somaFatores:"2 + 3 + 5 + 3 = 13"
},

{
numero:728,
fatores:"2 × 2 × 2 × 7 × 13",
somaNumero:"7 + 2 + 8 = 17",
somaFatores:"2 + 2 + 2 + 7 + 1 + 3 = 17"
},

{
numero:729,
fatores:"3 × 3 × 3 × 3 × 3 × 3",
somaNumero:"7 + 2 + 9 = 18",
somaFatores:"3 + 3 + 3 + 3 + 3 + 3 = 18"
},

{
numero:762,
fatores:"2 × 3 × 127",
somaNumero:"7 + 6 + 2 = 15",
somaFatores:"2 + 3 + 1 + 2 + 7 = 15"
},

{
numero:778,
fatores:"2 × 389",
somaNumero:"7 + 7 + 8 = 22",
somaFatores:"2 + 3 + 8 + 9 = 22"
},

{
numero:825,
fatores:"3 × 5 × 5 × 11",
somaNumero:"8 + 2 + 5 = 15",
somaFatores:"3 + 5 + 5 + 1 + 1 = 15"
},

{
numero:852,
fatores:"2 × 2 × 3 × 71",
somaNumero:"8 + 5 + 2 = 15",
somaFatores:"2 + 2 + 3 + 7 + 1 = 15"
},

{
numero:861,
fatores:"3 × 7 × 41",
somaNumero:"8 + 6 + 1 = 15",
somaFatores:"3 + 7 + 4 + 1 = 15"
},

{
numero:895,
fatores:"5 × 179",
somaNumero:"8 + 9 + 5 = 22",
somaFatores:"5 + 1 + 7 + 9 = 22"
},

{
numero:913,
fatores:"11 × 83",
somaNumero:"9 + 1 + 3 = 13",
somaFatores:"1 + 1 + 8 + 3 = 13"
},

{
numero:915,
fatores:"3 × 5 × 61",
somaNumero:"9 + 1 + 5 = 15",
somaFatores:"3 + 5 + 6 + 1 = 15"
},

{
numero:922,
fatores:"2 × 461",
somaNumero:"9 + 2 + 2 = 13",
somaFatores:"2 + 4 + 6 + 1 = 13"
},

{
numero:958,
fatores:"2 × 479",
somaNumero:"9 + 5 + 8 = 22",
somaFatores:"2 + 4 + 7 + 9 = 22"
},

{
numero:985,
fatores:"5 × 197",
somaNumero:"9 + 8 + 5 = 22",
somaFatores:"5 + 1 + 9 + 7 = 22"
}

];

const tabela = document.getElementById("tabelaSmith");

if(tabela){

numerosSmith.forEach(item=>{

        const botao=document.createElement("button");

botao.textContent=item.numero;

botao.addEventListener("click",function(){

    document.querySelectorAll("#tabelaSmith button").forEach(b=>{

        b.classList.remove("ativo");

    });

    botao.classList.add("ativo");

    document.getElementById("painelSmith").innerHTML = `

        <h3>Número ${item.numero}</h3>

        <p><strong>Fatoração prima:</strong> ${item.fatores}</p>

        <p><strong>Soma dos algarismos do número:</strong> ${item.somaNumero}</p>

        <p><strong>Soma dos algarismos dos fatores primos:</strong> ${item.somaFatores}</p>

    `;

});
tabela.appendChild(botao);

});

}

function verificarErro(linha, erro){

    const resultado = linha.parentElement.querySelector("p[id^='resultadoErro']");

    if(erro){

        linha.classList.add("linhaErrada");

        resultado.innerHTML =
        "<strong style='color:#C62828;'>O erro está na fatoração. Um número de Smith deve ser fatorado exclusivamente em números primos. A fatoração correta é: 2 × 3 × 3 × 3 × 7.</strong> ";

        linha.parentElement.querySelectorAll(".linhaErro").forEach(item=>{

            item.style.pointerEvents="none";

        });

    document.getElementById("botaoErro1").disabled = false;

    }else{

        if(!linha.classList.contains("linhaCorreta")){

            linha.classList.add("linhaCorreta");

        }

        resultado.innerHTML =
        "<strong style='color:#2E7D32;'>Esta linha está correta.</strong>";

    }

}
function verificarErro22(linha, erro){

    const card = document.getElementById("erro22");

    const resultado = document.getElementById("resultadoErro22");

    if(erro){

        linha.classList.add("linhaErrada");

        resultado.innerHTML =
        "<strong style='color:#C62828;'>O erro está na soma dos algarismos dos fatores. O número 11 deve ser separado em seus algarismos:2 + 1 + 1 = 4.</strong> ";

        card.querySelectorAll(".linhaErro").forEach(item=>{

            item.style.pointerEvents="none";

        });

        document.getElementById("botaoErro22").disabled = false;

    }else{

        if(!linha.classList.contains("linhaCorreta")){

            linha.classList.add("linhaCorreta");

        }

        resultado.innerHTML =
        "<strong style='color:#2E7D32;'>Esta linha está correta.</strong>";

    }

}
function proximoErro22(){

    document.getElementById("erro22").classList.add("oculto");

    document.getElementById("erro13").classList.remove("oculto");

}

function proximoErro1(){

    document.getElementById("erro378").classList.add("oculto");

    document.getElementById("erro22").classList.remove("oculto");

}
function verificarErro13(linha, erro){

    const card = document.getElementById("erro13");

    const resultado = document.getElementById("resultadoErro13");

    if(erro){

        linha.classList.add("linhaErrada");

        resultado.innerHTML =
        "<strong style='color:#C62828;'>Os números de Smith são, por definição, números compostos. Como 13 é primo, ele não possui fatoração prima distinta dele mesmo e não pode ser um número de Smith.</strong> ";

        card.querySelectorAll(".linhaErro").forEach(item=>{

            item.style.pointerEvents="none";

        });

        document.getElementById("botaoErro13").disabled = false;

    }else{

        if(!linha.classList.contains("linhaCorreta")){

            linha.classList.add("linhaCorreta");

        }

        resultado.innerHTML =
        "<strong style='color:#2E7D32;'>Esta linha está correta.</strong>";

    }

}

function finalizarErros(){

    alert("Parabéns! Você concluiu esta atividade.");

}