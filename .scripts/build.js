const ora = require('ora');
const webpack = require('webpack')

process.env.NODE_ENV = 'production' //production
const mainBundleConfig = require('./config/main')
const rendererBundleConfig = require('./config/renderer')
const del = require('del')
const path = require('path')
const logger = require('./util/logger')

const spinner = ora('Electron builder is start running... \n').start();

logger.logo()
del.sync([path.resolve('dist', 'electron')])

function buildMain() {
    return new Promise((r, j) => {
        const compiler = webpack(mainBundleConfig, function (err, stats) {
            if (err) {
                j(err)
                return;
            }
            // console.log(stats.toString({
            //     chunks: false,
            //     colors:true
            // }))
        })
        compiler.hooks.done.tap('electron-desktop-plugin', () => {
            spinner.succeed('main build end!')
            r()
        })
    })
}

function buildRenderer() {
    return new Promise((r, j) => {
        const compiler = webpack(rendererBundleConfig, function (err, stats) {
            if (err) return j(err);
            console.log(stats.toString({
                colors:true,
                chunks:false,
                assets:true,
                modules:false
            }))
        })
        compiler.hooks.done.tap('electron-desktop-plugin', () => {
            spinner.succeed('renderer build end!')
            r()
        })
    })
}


Promise
    .all([buildMain(), buildRenderer()])
    .then(res => {
        spinner.succeed('build end!')
    })
    .catch(err => {
        throw err;
    })
