const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { enableRemoteModule: true },
    icon: path.join(__dirname, "icon_uust.jpg"),
  });
  mainWindow.loadURL("http://localhost:3000");
  //mainWindow.setTitle(""); //на данный момент установлено в title
  mainWindow.setMenuBarVisibility(false);
  // mainWindow.webContents.openDevTools()
};

app.whenReady().then(() => createWindow());
app.on("window-all-closed", () => app.quit());
