const path = require('path')

module.exports = {
    entry:{
        main:path.resolve('src','main','index.js')
    },
    output:{
        filename:  '[name].js',
        libraryTarget: 'commonjs2',
        path: path.resolve('dist','electron')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                include:path.resolve('src','main'),
                exclude:/node_modules/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets: ['env','es2015']
                    }
                },{
                    loader:'eslint-loader',
                    options:{
                        formatter:require('eslint/lib/formatters/stylish')
                    }
                }]
            }
        ]
    },
    node: {
        __dirname: process.env.NODE_ENV !== 'production',
        __filename: process.env.NODE_ENV !== 'production'
    },
    resolve: {
        extensions: ['.js', '.json', '.node']
    },
    target: 'electron-main',
    mode: process.env.NODE_ENV
}