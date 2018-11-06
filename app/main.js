const Menubar = require('menubar')

const menubar = Menubar()

menubar.on('ready', () => {
  console.log('')
})

menubar.on('after-create-window', () => {
  menubar.window.loadURL(`file://${__dirname}/index.html`)
  menubar.window.webContents.openDevTools();
})
