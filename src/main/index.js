import { app,BrowserWindow } from 'electron'

const winURL = 'http://localhost:9080'

let mainWindow

function createWindow(){
    mainWindow = new BrowserWindow({
        height: 563,
        width: 900,
        useContentSize:true,
        // frame: process.platform !== 'darwin' ? false : true,
        titleBarStyle: 'hiddenInset',
        backgroundColor: "#fff",
        show: false
    })

    mainWindow.loadURL(winURL)

    
    mainWindow.on('closed', () => {
        mainWindow = null
        app.exit()
    })

    mainWindow.on('ready-to-show', () => {
        mainWindow.show()
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
const shouldQuit = app.makeSingleInstance((commandLine, workingDirectory) => {
    if (mainWindow) {
        if (mainWindow.isMinimized()) mainWindow.restore()
        mainWindow.focus()
    }
})
if (shouldQuit) {
    app.quit()
}
