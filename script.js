document.addEventListener("DOMContentLoaded", function () {

    const botao = document.getElementById("btnResposta");
    const resposta = document.getElementById("resposta");

    botao.addEventListener("click", function () {

        if (resposta.style.display === "none") {
            resposta.style.display = "block";
            botao.textContent = "Ocultar resposta";
        } else {
            resposta.style.display = "none";
            botao.textContent = "Ver resposta";
        }

    });

});