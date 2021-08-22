// import { remote, ipcRenderer } from "electron";
const { remote, ipcRenderer } = require("electron");
const { dialog } = remote;
// const { dialog } = remote;
// import fs from "fs";

// // tsの場合、windowはどうなる？？
window.remote = remote;
window.MenuItem = remote.MenuItem;
window.ipcRenderer = ipcRenderer;
window.dialog = dialog;
// window.dialog = dialog;
// window.ipcRenderer = ipcRenderer;
// window.fs = fs;
