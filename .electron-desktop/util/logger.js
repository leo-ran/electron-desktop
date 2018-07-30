const chalk = require('chalk')
const cfonts = require('cfonts')
function log(type,content){
    console.log(`┏—${type}—————————————————————`)
    console.log(`\n`)
    console.log(` ${content}`)
    console.log(`\n`)
    console.log(`┗————————————————————————`)
}

function error(text){
    type = chalk.redBright('Error')
    text = chalk.redBright(text)
    log(type,text)
}

function success(text){
    type = chalk.greenBright('Success')
    text = chalk.greenBright(text)
    log(type,text)
}

function warn(text){
    type = chalk.yellowBright('Warn')
    text = chalk.yellowBright(text)
    log(type,text)
}

function info(text){
    type = chalk.blueBright('Info')
    text = chalk.blueBright(text)
    log(type,text)
}

function logo(){
    cfonts.say('Electron Desktop',{
        font: 'simple',
        align: 'left', 
        colors: ['system'],
        background: 'transparent',
        letterSpacing: 0.1, 
        lineHeight: 0.1,
        space: true,  
        maxLength: '', 
    })
}

module.exports = {
    error,
    success,
    warn,
    info,
    logo
}