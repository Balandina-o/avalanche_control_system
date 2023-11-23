const { app, BrowserWindow } = require("electron");
const path = require("path");

// const yourdirectoryorfilenamehere = path.join(
//   app.getAppPath(),
//   "/electron.exe/$PLUGINSDIR/app-64.7z/resources/app/"
// );
// console.log(yourdirectoryorfilenamehere);

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { enableRemoteModule: true },
    icon: path.join(__dirname, "icon_uust.jpg"),
  });

  //mainWindow.loadURL("https://polyakovdmitriy.ru/create-react-app-electron/");
  //mainWindow.loadFile("src/index.js");
  mainWindow.setTitle("Баландина ПИ-426 СРВ"); //на данный момент установлено в title
  mainWindow.loadURL("http://localhost:3000");
  mainWindow.setMenuBarVisibility(false);

  // const startUrl =
  //   process.env.ELECTRON_START_URL ||
  //   url.format({
  //     pathname: path.join(__dirname, "src/index.js"),
  //     protocol: "file:",
  //     slashes: true,
  //   });
  // mainWindow.loadURL(startUrl);

  // mainWindow.webContents.openDevTools();
};

app.whenReady().then(() => createWindow());
app.on("window-all-closed", () => app.quit());
