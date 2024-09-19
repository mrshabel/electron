import { app, BrowserWindow } from "electron";
import url from "url";

function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 600,
    });

    // win.webContents.openDevTools();
    win.loadURL("http://localhost:5173");
}

// call function when app is ready
app.whenReady().then(() => createWindow());
