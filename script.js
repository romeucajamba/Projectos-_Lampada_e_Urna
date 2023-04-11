//A lógica de fucionamento da minha urna//

/*selecionamos os elementos do Html, assim podemos controlar
 a interface  da urna ou a aparência e a mudanca dela*/

 let seuVotoPara = document.querySelector('.d-1-1');
 let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

//O array da etapa da outro documento script//
let etapaAtual = 0;
/* Sempre que clicar em um numero na urna, vai preencher
 nos quadrados da urna, ela vai actualiza e mostrar os numeros*/
let numero = '';


// A função que vai pegar as etapas do array//
function comecarEtapas() {
    let etapa = etapas[etapaAtual];
    
    let numeroHtml = '';
    for(let i =0; i < etapa.numeros; i++){
        if(i == 0){
            numeroHtml += '<div class="numero"></div>';
        } else {
            numeroHtml += '<div class="numero"></div>';
        }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface (){
    let etapas = etapas[etapaAtual];
    let candidato = etapa.candidato.filter((item)=>{
        if(item.numero === numero) {
            return true;
        } else {
            return false;
        }
    });
    if(candidato.length > 0){
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';  
        aviso.style.display = 'block';
        descricao.innerHTML = 'Nome:' $(candidato.nome)'<br/>Partido:' $(canditato.partido);
    
        let fotosHTML = '';
        for(let i in candidato.fotos) {
            fotosHTML += '<div class="d-1-image"><img src="img/''$(candidato.fotos[i].ulr)" alt="Presidente">' $(candidato.fotos[i].legenda)'</div>';
        }
        lateral.innerHTML = fotosHTML;
    }

    console.log("candidato", candidato);

}

/*Transformamos o onclick em uma funcão para que sempre
 que clicarmos nos bontões que têm o "onclik" apareça uma mensagem na tela*/

 function clicou (n){
    let elnumero = document.getElementsByClassName('.numero pisca');
    if (elnumero !== null) {
        elnumero.inenerHTML = n;
        numero = $(numero) $(n);
        elnumero.classList.remove('pisca');
        elnumero.nextElementSibling.classList.add('.pisca');
    }
 }
 function branco() {
    alert("Clicou em branco");
 }

 function corrige() {
    alert("Clicou em corrigir");
 }

 function confirma() {
    alert("Clicou em confirmar");
 }
//Chamando a nossa função//
 comecarEtapas();