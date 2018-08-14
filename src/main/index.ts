import { app, BrowserWindow } from 'electron'

const winURL = process.env.NODE_ENV === 'development'  ? 'http://localhost:9080' : `file://${__dirname}/index.html`

let mainWindow: Electron.BrowserWindow | null

function createWindow(): void {
    mainWindow = new BrowserWindow({
        height: 563,
        width: 900,
        // useContentSize:true,
        // frame: process.platform !== 'darwin' ? false : true,
        // titleBarStyle: 'hiddenInset',
        // backgroundColor: '#fff',
        show: false
    })

    mainWindow.loadURL(winURL)
    mainWindow.on('closed', () => {
        mainWindow = null
        app.exit()
    })

    mainWindow.on('ready-to-show', () => {
        (mainWindow as BrowserWindow).show()
        // auto show DevTools
        if (process.env.NODE_ENV === 'development') {
            (mainWindow as BrowserWindow).webContents.openDevTools()
        }
    })

    mainWindow.flashFrame(true)
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})


// 禁止多个app实例启动
const shouldQuit: boolean = app.makeSingleInstance(() => {
    if (mainWindow) {
        if (mainWindow.isMinimized()) {
            mainWindow.restore()
            mainWindow.focus()
        }
    }
})

if (shouldQuit) {
    app.quit()
}
