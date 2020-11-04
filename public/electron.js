const electron = require("electron");
const { Menu, MenuItem  } = require('electron')
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({ width: 900, height: 680 });
    const menu = new Menu()
    menu.append(new MenuItem({ label: 'MenuItem1', click() { console.log('item 1 clicked') } }))
    mainWindow.setMenu(menu)
    electron.Menu.setApplicationMenu(menu);
    mainWindow.webContents.openDevTools();
    mainWindow.loadURL(
        isDev
            ? "http://localhost:3001"
            : `file://${path.join(__dirname, "./build/index.html")}`
    );
    mainWindow.on("closed", () => (mainWindow = null));
}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});