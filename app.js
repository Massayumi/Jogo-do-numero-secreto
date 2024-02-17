let listadeNumerosSorteados = [];
let limite = 100;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;


exibirmsginicial();

function exibirTexto (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirmsginicial();
    Document.getElementById('reiniciar').setAttribute('disabled', true);
}



function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroAleatorio){
        exibirTexto('h1','Acertou');      
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let msgtentativa = `Você acertou o número secreto com ${tentativas} ${palavratentativa}`;
        exibirTexto('p', msgtentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
         
    } else{
        if(chute > numeroAleatorio){
            exibirTexto('p', 'O número aleatório é menor que seu número ' + chute);
        
         } else {
             exibirTexto('p', 'O número aleatório é maior que seu número ' + chute);
       
    }
    tentativas++;
    limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEsclhildo = parseInt(Math.random() * limite + 1);       
    let quantidadedeELementosnaLista = listadeNumerosSorteados.length;

    if(quantidadedeELementosnaLista == limite){
        listadeNumerosSorteados = [];
    }

    if (listadeNumerosSorteados.includes(numeroEsclhildo)){
        return gerarNumeroAleatorio();
    } else {
        listadeNumerosSorteados.push(numeroEsclhildo);
        console.log(listadeNumerosSorteados);
        return numeroEsclhildo;
    }
}

function exibirmsginicial() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p','Escolha um numero entre 1 a 100');
}