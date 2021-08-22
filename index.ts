import { app, BrowserView, BrowserWindow, Menu, ipcMain } from "electron";
import { MenuItem } from "electron/main";
import path from "path";

// const html = '<html><head>'
//   + '<title>HTML STRING</title>'
//   + '</head><body>'
//   + '<h1>HTML STRING</h1>'
//   + '<p>This is string content .</p>'
//   + '</body></html>';

// const createWindow = () => {
//   var fn = (event: any) => {
//     console.log("focus: " + event.sender.id)
//   }
//   let win = new BrowserWindow({
//     // width: 500,
//     // height: 400,
//     // backgroundColor: "#fff",
//     // webPreferences: {
//     //   nodeIntegration: true,
//     // },
//     width: 800,
//     height: 600,
//     backgroundColor: "#fff"
//     // show: false
//   });
//   win.loadFile("index.html");
//   // win.loadURL("https://qiita.com/maichale/items/49488ab5d2318b227ba4")
//   // win.on("ready-to-show", () => {
//   //   win.show();
//   // })
//   // win.on("show", () => {

//   // })
//   win.on("focus", fn);
//   win.webContents.openDevTools();

//   let win2 = new BrowserWindow({
//     width: 400,
//     height: 200
//   });
//   win2.loadFile("index.html")
//   win2.on("focus", fn)
//   // win.loadURL("");
//   // win.loadURL("data:text/html;charset=utf8" + html);

//   // let child = new BrowserWindow({
//   //   width: 350,
//   //   height: 200,
//   //   parent: win,
//   //   frame: false,
//   //   modal: true,
//   //   // webPreferences: {
//   //   //   nodeIntegration: true,
//   //   // }
//   // });
//   // // child.loadURL("data:text/html;charset=utf8," + html);
//   // child.loadFile("sub.html");
//   // let child1 = new BrowserWindow({
//   //   width: 350,
//   //   height: 250,
//   //   parent: win,
//   //   frame: false,
//   //   transparent: true,
//   // })
//   // child1.loadFile("sub.html");

//   // let child2 = new BrowserWindow({
//   //   width: 350,
//   //   height: 250,
//   //   parent: win,
//   //   opacity: .5
//   // })
//   // child2.loadFile("sub.html")
// }

// 移動とリサイズについて
// const createWindow = () => {
//   let win = new BrowserWindow({
//     width: 400,
//     height: 250,
//   });
//   win.loadFile("index.html");

//   // win.flag = true;
//   win.on("focus", (e: any) => {
//     e.sender.flag = !e.sender.flag;
//     console.log("flag: " + e.sender.flag);
//   });
//   win.on("will-move", (e: any) => {
//     if (e.sender.flag) {
//       e.preventDefault();
//     }
//   });
//   win.on("move", (e: any) => {
//     console.log(e.sender.getPosition());
//   });
//   win.on("will-resize", (e: any) => {
//     if (!e.sender.flag) {
//       e.preventDefault();
//     }
//   });
//   win.on("resize", (e: any) => {
//     console.log(e.sender.getSize())
//   })
// }

// const createWindow = () => {
//   let win = new BrowserWindow({
//     width: 400,
//     height: 250,
//   });
//   win.loadFile("index.html");

//   win.on("focus", (e: any) => {
//     let p = e.sender.getPosition();
//     let s = e.sender.getSize();
//     p[0] += 100;
//     p[1] += 100;
//     s[0] += 10;
//     s[1] += 10;
//     e.sender.setPosition(p[0], p[1], true);
//     e.sender.setSize(s[0], s[1], true);
//     let b = e.sender.getBounds();
//     console.log("new bounds: " + "[" + b.x + ", " + b.y + ", " + b.width + ", " + b.height + "]")
//   })
// }

// webviewをはめ込む
// const createWindow = () => {
//   let win = new BrowserWindow({
//     width: 800,
//     height: 600
//   });
//   win.loadFile("index.html");

//   const view = new BrowserView();
//   view.webContents.loadURL("https://electronjs.org");

//   win.setBrowserView(view);
//   view.setBounds({
//     x: 200,
//     y:  150,
//     width: 500,
//     height: 300
//   });
// }

// menuを作成する
// const createWindow = () => {
//   let win = new BrowserWindow({
//     width: 500,
//     height: 500
//   });

//   win.loadFile("index.html")
// }

// レインダラープロセスからBrowserWindowを使用

const createWindow = () => {
  let win = new BrowserWindow({
    width: 1000,
    height: 900,
    webPreferences: {
      // nodeIntegration: true, // これはtrueにしない方が良いらしい。セキュリティの観点から
      enableRemoteModule: true,
      preload: path.join(app.getAppPath(), 'preload.js'),
      contextIsolation: false // TODO: なんかこれもいるみたい！
    }
  });
  win.loadFile("index.html");
  win.webContents.openDevTools();
}

// データとファイルアクセス
// const createWindow = () => {
//   let win = new BrowserWindow({
//     width: 600,
//     height: 600,
//     webPreferences: {
//       enableRemoteModule: true,
//       preload: path.join(app.getAppPath(), "preload.js") // tsで書いた場合、どうなるか見てみたい
//     }
//   });
//   win.loadFile("index.html");
//   win.webContents.openDevTools();
//   return win.id;
// }


// app.on("browser-window-focus", (e: any) => {
//   console.log("browser-window-focus: " + e.sender.id)
//   console.log("event: " + e)
// })

// app.on("browser-window-blur", (e: any) => {
//   console.log("browser-window-blur: " + e.sender.id)
//   console.log("event: " + e)
// })

const createMenu = () => {
  // let menu = new Menu();

  // let file = new MenuItem({
  //   label: "File",
  //   submenu: [
  //     { label: "New" },
  //     { label: "File" },
  //     { label: "Quit" }
  //   ]
  // });
  // menu.append(file);

  // let edit = new MenuItem({
  //   label: "Edit",
  //   submenu: [
  //     { label: "Cut" },
  //     { label: "Copy" },
  //     { label: "Paste" },
  //   ]
  // });
  // menu.append(edit);

  // Menu.setApplicationMenu(menu)
  // let menuTemp: Electron.MenuItemConstructorOptions[] = [
  //   {
  //     label: "File",
  //     submenu: [
  //       { label: "New", click: () => {
  //         console.log("New Menu");
  //         createWindow();
  //       }},
  //       { label: "File", click: () => {
  //         console.log("File Menu")
  //         createWindow()
  //       }},
  //       { role: 'close'},
  //       { type: "separator" },
  //       { role: "quit" },
  //     ]
  //   },
  //   { role: "editMenu" },
  //   { role: "viewMenu" },
  //   { role: "windowMenu" },
  //   {
  //     label: "Help",
  //     submenu: [
  //       { role: "about" },
  //       { type: "separator" },
  //       { role: "reload" },
  //       { role: "zoomIn" },
  //       { role: "zoomOut" },
  //     ]
  //   }
  // ];
  let menuTemp: Electron.MenuItemConstructorOptions[] = [
    {
      label: "File",
      submenu: [
        {label: "New", click: () => {
          console.log("New menu");
          createWindow();
        }},
        {label: "Hello", click: () => {
          console.log("Hello menu.");
          const w = BrowserWindow.getFocusedWindow();
          w?.webContents.executeJavaScript('hello()');
        }},
        {role: "close"},
        {type: "separator"},
        {role: "quit"}
      ]
    },
    {role: "editMenu"}
  ]
  let menu = Menu.buildFromTemplate(menuTemp);

  Menu.setApplicationMenu(menu)
}

createMenu();

// app.prependOnceListener("browser-window-created", () => {
//   console.log("browser-window-created");
// })

// app.on("web-contents-created", () => {
//   console.log("web-contents-created");
// })

app.whenReady().then(createWindow);
// app.on("will-finish-launching", () => {
//   console.log("will-finish-launching")
// })

// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") {
//     app.quit();
//   }
// })
