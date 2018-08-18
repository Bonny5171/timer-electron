const { app, BrowserWindow, ipcMain } = require('electron');

// ciclo de vida app descktop
app.on('ready', () => {
    console.log('Aplicação iniciada');

    let mainWindown = new BrowserWindow({
        width:600,
        height:400
    });

    console.log(__dirname);
    //mainWindown.loadURL(`${__dirname}/app/index.html`);
    mainWindown.loadURL(`file://${__dirname}/app/index-prd.html`);
})

// encerrando aplicação electron, quando clicar no botão fechar
app.on('window-all-closed', () => {
    app.quit();
})

let sobre = null
ipcMain.on('abrir-janela-sobre', () => {
    if (sobre == null){
        sobre = new BrowserWindow({
            width:400,
            height:600,
            alwaysOnTop: true
        });
        sobre.on('closed', () => {
            sobre = null;
        })          
    }    

    sobre.loadURL(`file://${__dirname}/app/sobre.html`);
})