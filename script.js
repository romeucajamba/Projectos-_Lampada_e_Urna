const ligar = document.getElementById('turnOn');
const desligar = document.getElementById('turnOff');
const lampada = document.getElementById('lamp');

//Essa função vai fazer a trocar a imagem da lampada//
function lampOn () {
    lamp.src = 'IMG/Lampada4.jpg';
}

function lampOff () {
    lamp.src = 'IMG/Lmapada.jpg';
}

ligar.addEventListener ('click', lampOn );
desligar.addEventListener ('click', lampOff);


