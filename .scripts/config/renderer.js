const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

let production = process.env.NODE_ENV === 'production'

const renderer = {
    entry: {
        renderer: path.resolve('src', 'renderer', 'main.tsx')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
                include: path.resolve('src', 'renderer')
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                include: path.resolve('src','renderer'),
                use: [{
                    loader:'ts-loader',
                    options: {
                        appendTsxSuffixTo: [/\.vue$/]
                    }
                }]
            },
            {
                test:/\.ts$/,
                exclude: /node_modules/,
                include: path.resolve('src', 'renderer'),
                use: {
                    loader:'ts-loader',
                }
            },
            {
                test: /\.(c|postc|s)ss$/,
                use: production ? [
                    MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader',
                        options: {
                            import: true, // 启用@import
                            modules: true // 启用modules
                        }
                    },
                    'postcss-loader'
                ]:[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options: {
                            import: true, // 启用@import
                            modules: true // 启用modules
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: production ? [
                    MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader',
                        options: {
                            import: true, // 启用@import
                            modules: true // 启用modules
                        }
                    },
                    'less-loader',
                    'postcss-loader'
                ]:[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options: {
                            import: true, // 启用@import
                            modules: true // 启用modules
                        }
                    },
                    'less-loader',
                    'postcss-loader'
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
                        name: production ? 'fonts/[name].[ext]' : 'fonts/[name].[hash:7].[ext]',
                        publicPath: '../'
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve('src', 'renderer')
        },
        extensions: ['.js','.jsx', '.ts', '.tsx' , '.json', '.node']
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
    ],
    mode: process.env.NODE_ENV,
    target: 'electron-renderer'
}

if (production) {
    renderer.plugins.push(
        // https://github.com/webpack-contrib/mini-css-extract-plugin
        new MiniCssExtractPlugin({
            filename: "styles/[name].css"
        }),
        // https://github.com/NMFR/optimize-css-assets-webpack-plugin
        new OptimizeCssAssetsPlugin({})
    )
}


module.exports = renderer