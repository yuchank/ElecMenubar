const Menubar = require('menubar')
const { globalShortcut } = require('electron')

const menubar = Menubar()

menubar.on('ready', () => {
  const createClipping = globalShortcut.register('CommandOrControl+!', () => {
    menubar.window.webContents.send('create-new-clipping')
  })

  const writeClipping = globalShortcut.register('CmdOrCtrl+Alt+@', () => {
    menubar.window.webContents.send('write-to-clipping')
  })

  const publishClipping = globalShortcut.register('CmdOrCtrl+Alt+#', () => {
    menubar.window.webContents.send('publish-clipping')
  })

  if (!createClipping) {
    console.log('Registration failed', 'createClipping')
  }
  if (!writeClipping) {
    console.log('Registration failed', 'writeClipping')
  }
  if (!publishClipping) {
    console.log('Registration failed', 'publishClipping')
  }
})

menubar.on('after-create-window', () => {
  menubar.window.loadURL(`file://${__dirname}/index.html`)
  // menubar.window.openDevTools()
})
