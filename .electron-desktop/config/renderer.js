const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:{
        renderer: path.resolve('src','renderer','main.js')
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: 'url-loader'
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: 'url-loader'
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: 'url-loader'
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve('src','renderer'),
        },
        extensions: ['.js', '.json', '.css', '.node']
    },
    output:{
        path: path.resolve('dist','electron'),
        filename:`[name].js`,
        libraryTarget: 'umd'
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template:path.resolve('src','index.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    mode: process.env.mode,
    target: 'electron-renderer'
}

