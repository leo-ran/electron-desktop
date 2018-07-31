import { ipcRenderer } from 'electron'

window.onload = function(){
    document.body.innerHTML = `<h1>test</h1>`
}

ipcRenderer.on('start',function(e,arg){
    console.log(arg)
})  

ipcRenderer.send('start')