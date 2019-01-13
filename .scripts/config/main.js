const path = require('path')

module.exports = {
    entry:{
        main:path.resolve('src','main','index.ts')
    },
    output:{
        filename:  '[name].js',
        libraryTarget: 'commonjs2',
        path: path.resolve('dist','electron')
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                include:path.resolve('src','main'),
                exclude:/node_modules/,
                use:[
                    'ts-loader'
                ]
            }
        ]
    },
    node: {
        __dirname: process.env.NODE_ENV !== 'production',
        __filename: process.env.NODE_ENV !== 'production'
    },
    resolve: {
        extensions: ['.ts', '.json', '.node']
    },
    target: 'electron-main',
    mode: process.env.NODE_ENV
}