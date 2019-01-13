const ora = require('ora');
const path = require('path')

const webpack = require('webpack')
const electron = require('electron')
const { spawn, execFile } = require('child_process')
const WebpackDevServer = require('webpack-dev-server')
const webpackHotMiddleware = require('webpack-hot-middleware')
const logger = require('./util/logger')

logger.logo()
process.env.NODE_ENV = 'development' //production
const mainBundleConfig = require('./config/main')
const rendererBundleConfig = require('./config/renderer')
const spinner = ora('Electron is start running... \n').start();

let electronProcess,
    electronReload;


function createMainBundle() {
    return new Promise(resolve => {
        const compiler = webpack(mainBundleConfig)

        compiler.hooks.done.tap('electron-desktop-plugin', () => {
            spinner.succeed('Main bundle is build!')
            resolve()
        })

        // 监听修改
        compiler.watch({}, (err, stats) => {
            if (err) throw err;
            if (stats.hasErrors() && electronProcess) {
                const error = stats.toString('errors-only')
                electronProcess.send({error})
                return logger.error(error)
            }

            logger.info(stats.toString({
                colors: true,
                chunks: false,
                assets: true,
                modules: false
            }))

            if (electronProcess && !electronProcess.killed) {
                electronProcess.send({exit: true})
                electronReload = true
            }
        })
    })
}

function createRendererBundle() {
    return new Promise(resolve => {
        rendererBundleConfig.entry.renderer = [path.join(__dirname, 'dev-client.js')].concat(rendererBundleConfig.entry.renderer)
        const compiler = webpack(rendererBundleConfig)
        compiler.hooks.done.tap('electron-desktop-plugin', () => {
            resolve()
        })
        const server = new WebpackDevServer(
            compiler,
            {
                contentBase: path.join(__dirname, '../'),
                compress: true,
                port: 9080,
                stats: {
                    colors: true,
                    chunks: false,
                    assets: true,
                    modules: false
                },
                before(app, ctx) {
                    app.use(webpackHotMiddleware(compiler, {
                        log: false,
                        heartbeat: 2500
                    }))
                }
            }
        )
        server.listen(9080, (err) => {
            if (err) throw err;
            spinner.succeed(`start server http://localhost:9080`)
        })
    })
}

function startElectron() {
    electronProcess = spawn(electron, [path.resolve('dist','electron','main.js')], {
        stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
        env: process.env
    })

    electronProcess.once('close', (code) => {
        spinner.fail('Process exit!')
        if (!electronReload) {
            process.exit(code)
        } else {
            startElectron()
            electronReload = false
        }
        
    })

    spinner.succeed('Electron is started!')
}

Promise.all([
    createRendererBundle(),
    createMainBundle()
]).then(res => {
    startElectron()
}).catch(err => {
    console.log(err)
})
