const path = require('path')

module.exports = {
    entry:{
        main:path.resolve('src','main','index.js')
    },
    output:{
        filename: '[name].js',
        libraryTarget: 'commonjs2',
        path: path.resolve('dist','electron')
    },
    target: 'electron-main',
    mode:process.env.mode
}