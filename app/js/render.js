//console.log('Eu estou na Janela do Browser')

const { ipcRenderer } = require('electron');

let linkSobre = document.querySelector('#link-sobre');

linkSobre.addEventListener('click', function(){
    ipcRenderer.send('abrir-janela-sobre');
})