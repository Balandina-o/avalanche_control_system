const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: true,
    webPreferences: { enableRemoteModule: true },
    icon: path.join(__dirname, "icon_uust.jpg"),
  });
  mainWindow.setFullScreen(true);
  mainWindow.setTitle("Баландина ПИ-426 СРВ"); //на данный момент установлено в title
  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : path.join(process.cwd(), "build", "index.html")
  );
};

app.whenReady().then(() => createWindow());
app.on("window-all-closed", () => app.quit());
