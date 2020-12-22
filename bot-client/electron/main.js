const { AsyncLocalStorage } = require('async_hooks');
const { app, BrowserWindow, session } = require('electron');
const path = require('path');
const url = require('url');
let mainWindow;

function createWindow() {
  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '../index.html'),
    protocol: 'file:',
    slashes: true,
  });
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadURL(startUrl);
  mainWindow.on('close', function () {
    mainWindow = null;
  });
mainWindow.on('resize', function () {
    myConsole.log(mainWindow.getSize());
  });
}
app.on('ready', createWindow);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', function () {
  if (mainWindow === null) {
      createWindow();
     
  }
});
var nodeConsole = require('console');
var myConsole = new nodeConsole.Console(process.stdout, process.stderr);

