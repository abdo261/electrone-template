const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");
function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: "abdellah_app",
    width: 1000,
    height: 600,
    webPreferences:{
        webSecurity:false
    }
  });
  mainWindow.webContents.openDevTools();
  const startUrl = url.format({
    pathname: path.join(__dirname, "./app/build/index.html"),
    protocol: "file",
  });
  mainWindow.loadURL(startUrl);
}
app.whenReady().then(createMainWindow);
