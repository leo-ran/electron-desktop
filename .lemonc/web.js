const ora = require('ora');
const path = require('path')

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackHotMiddleware = require('webpack-hot-middleware')
const logger = require('./util/logger')

logger.logo()
process.env.NODE_ENV = 'development' //production
const webBundleConfig = require('./config/web')


const spinner = ora('Lemonc is start running... \n').start();

function createRendererBundle(){
    return new Promise(resolve=>{
        webBundleConfig.entry.renderer = [path.join(__dirname,'dev-client.js')].concat(webBundleConfig.entry.renderer)
        const compiler = webpack(webBundleConfig)
        
        compiler.hooks.done.tap('LemoncPlugin',()=>{
            resolve()
        })
        
        const server = new WebpackDevServer(
            compiler,
            {
                contentBase: path.join(__dirname, '../'),
                compress: true,
                progress:true,
                port: 9080,
                open:true,
                stats:{
                    colors:true,
                    chunks:false,
                    assets:true,
                    modules:false
                },
                before (app, ctx) {
                    app.use(webpackHotMiddleware(compiler,{
                        log: false, 
                        heartbeat: 2500 
                    }))
                }
            }
        )
        server.listen(9080)
    })
}




createRendererBundle()
    .then(res=>{
        spinner.succeed(`start server http://localhost:9080`)
    })
    .catch(err=>{
        console.log(err)
    })

