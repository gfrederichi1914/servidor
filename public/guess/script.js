function adivinhar() {

    // gera um numero aleatorio entre 0 a 99
    let numAleatorio = Math.floor(Math.random() * 100);
    console.log(numAleatorio);

    // puxa o valor do input em uma variavel
    let num = document.getElementById("inputNum");

    if (num == numAleatorio) {
        let mensagemAcerto = "Parabéns, você acertou!";
        document.getElementById("mensagem").textContent = mensagemAcerto;
        document.getElementById("container").style.setProperty("border", "5px solid green");
    } else {
        let mensagemErro = "Que pena, você errou...";
        document.getElementById("mensagem").textContent = mensagemErro;
        document.getElementById("container").style.setProperty("border", "5px solid red");
    }
}