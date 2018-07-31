const ora = require('ora');
const webpack = require('webpack')

process.env.mode = 'production' //production
const mainBundleConfig=require('./config/main')
const rendererBundleConfig = require('./config/renderer')


const spinner = ora('Electron desktop builder is start running... \n').start();

function buildMain(){
    return new Promise((r,j)=>{
        const compiler  = webpack(mainBundleConfig,function(err,stats){
            if(err) {
                j(err)
                return;
            }
            console.log(stats.toString({
                chunks: false,
                colors:true
            }))
            spinner.succeed('main build end!')
            r() 
        })
    })
}

function buildRenderer(){
    return new Promise((r,j)=>{
        const compiler  = webpack(rendererBundleConfig,function(err,stats){
            if(err) {
                j(err)
                return;
            }
            console.log(stats.toString({
                colors:true
            }))
            spinner.succeed('renderer build end!')
            r() 
        })
    })
}


Promise
    .all([buildMain(),buildRenderer()])
    .then(res=>{
        //startElectron()
        spinner.succeed('build end!')
    })
    .catch(err=>{
        console.log(err)
    })
