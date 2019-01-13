import { app, dialog } from 'electron'

if (process.env.NODE_ENV === 'development') {
    process.on('message', ({exit, error}) => {
        if (exit) {
            app.exit()
        } else if (error) {
            dialog.showErrorBox('Main process render Error.', '')
        }
    })
}
