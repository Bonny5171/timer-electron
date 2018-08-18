const { ipcRenderer } = require('electron');
const timer = require('./timer');

console.log('aqui é o timer', timer);

let linkSobre = document.querySelector('#link-sobre');
linkSobre.addEventListener('click', function(){
    ipcRenderer.send('abrir-janela-sobre');
})

let tempo =  document.querySelector('#tempo');
let eventoPlay = ['play >>', 'stop |_|'];
let btnTimer = document.querySelector('#play');
btnTimer.addEventListener('click', function() {
    console.log('botão do timer clicado', btnTimer);
    eventoPlay.reverse();
    btnTimer.innerHTML = eventoPlay[0];
    timer.iniciar(tempo);
})


