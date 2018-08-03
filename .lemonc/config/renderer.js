const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// https://github.com/webpack-contrib/extract-text-webpack-plugin/tree/next
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')


const extractLess = new ExtractTextPlugin({
    filename: "styles/[name].[hash:7].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry:{
        renderer: path.resolve('src','renderer','main.js')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets: ['env','es2015'],
                        // https://github.com/vuejs/babel-plugin-transform-vue-jsx
                        plugins: ['transform-runtime','transform-vue-jsx']
                    }
                }
            },
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                use: extractLess.extract({
                    use:[{
                        loader: 'css-loader'
                    }, {
                        loader: 'less-loader'
                    }],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader:'url-loader',
                    options: {
                        limit: 10000,
                        name: 'images/[name].[hash:7].[ext]'
                    }
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: {
                    loader:'url-loader',
                    options: {
                        limit: 10000,
                        name: 'medias/[name].[hash:7].[ext]'
                    }
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: {
                    loader:'url-loader',
                    options:{
                        limit: 10000,
                        name: 'fonts/[name].[hash:7].[ext]'
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve('src','renderer'),
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['.js', '.vue', '.json', '.css', '.node']
    },
    output:{
        path: path.resolve('dist','electron'),
        filename:`[name].js`,
        libraryTarget: 'umd'
    },
    optimization:{
        // https://www.webpackjs.com/plugins/split-chunks-plugin/
        splitChunks: process.env.NODE_ENV == 'production' ? {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        } : false
    },
    plugins:[
        // https://github.com/jantimon/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template:path.resolve('src','index.html'),
            minify:process.env.NODE_ENV == 'production' ? {
                removeComments: true,
                inject:true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            } : null
        }),
        extractLess,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new VueLoaderPlugin()
    ],
    mode: process.env.NODE_ENV,
    target: 'electron-renderer'
}

