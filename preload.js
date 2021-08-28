// import { remote, ipcRenderer } from "electron";
// const { remote, ipcRenderer } = require("electron");
// const { dialog } = remote;
// const { dialog } = remote;
// import fs from "fs";

// // tsの場合、windowはどうなる？？
// window.remote = remote;
// window.MenuItem = remote.MenuItem;
// window.ipcRenderer = ipcRenderer;
// window.dialog = dialog;
// // window.dialog = dialog;
// // window.ipcRenderer = ipcRenderer;
// // window.fs = fs;

const { remote, ipcRenderer } = require("electron");
const { dialog } = remote;
const fs = require("fs");
const https = require("https")
const sqlite3 = require("sqlite3")
const path = require("path");

window.remote = remote;
window.dialog = dialog;
window.ipcRenderer = ipcRenderer;
window.fs = fs;
window.https = https;
window.sqlite3 = sqlite3;
window.path = path;
window.dirname = __dirname;
