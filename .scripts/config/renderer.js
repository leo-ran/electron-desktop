const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
let production = process.env.NODE_ENV === 'production'

const renderer = {
    entry: {
        renderer: path.resolve('src', 'renderer', 'main.js')
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                include: path.resolve('src', 'renderer'),
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.node$/,
                use: 'node-loader'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                include: path.resolve('src', 'renderer'),
                exclude: /node_modules/,
                use: {
                    loader: 'eslint-loader',
                    options: {
                        formatter: require('eslint/lib/formatters/stylish')
                    }
                }
            },
            {
                test: /\.css$/,
                use: production ? [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ] : [
                        'style-loader',
                        'css-loader'
                    ]
            },
            {
                test: /\.less$/,
                use: production ? [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ] : [
                        'style-loader',
                        'css-loader',
                        'less-loader'
                    ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: production ? 'images/[name].[ext]' : 'images/[name].[hash:7].[ext]'
                    }
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: production ? 'medias/[name].[ext]' : 'medias/[name].[hash:7].[ext]'
                    }
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: production ? 'fonts/[name].[ext]' : 'fonts/[name].[hash:7].[ext]'
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve('src'),
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['.js', '.jsx', '.vue', '.json', '.node']
    },
    output: {
        path: path.resolve('dist', 'electron'),
        filename: `[name].js`,
        libraryTarget: 'umd'
    },
    optimization: {
        minimize: process.env.NODE_ENV == 'production' ? true : false,
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
    externals: ['fsevents'],
    stats: 'minimal',
    plugins: [
        // new webpack.ProgressPlugin(),
        // https://github.com/jantimon/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve('src', 'index.html'),
            minify: production ? {
                removeComments: true,
                inject: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            } : null
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new VueLoaderPlugin()
    ],
    node: {
        oniguruma: true
    },
    mode: process.env.NODE_ENV,
    target: 'electron-renderer'
}

if (production) {
    renderer.plugins.push(
        // https://github.com/webpack-contrib/mini-css-extract-plugin
        new MiniCssExtractPlugin({
            filename: "styles/[name].css",
            chunkFilename: "styles/[id].css"
        }),
        // https://github.com/NMFR/optimize-css-assets-webpack-plugin
        new OptimizeCssAssetsPlugin({})
    )
}


module.exports = renderer