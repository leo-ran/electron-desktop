<template>
    <div class="welcome">
        <div class="logo">
            <img src="../assets/images/logo.png" />
        </div>
        
        <div class="content">
            <h1>{{title}}</h1>
            <p><img height="30" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1841004364,244945169&fm=58&bpow=121&bpoh=75" > <strong>{{nodeVersion}}</strong></p>    
            <p>Chrome  <strong>{{chromeVersion}}</strong></p>    
            <p>Electron <strong>{{electronVersion}}</strong></p>
            <p><a  @click="go(`https://electronjs.org/docs/`)" href="#">Electron docs</a></p>
            <p><a  @click="go(`https://github.com/ranyunlong/electron-desktop`)" href="#">Electron Desktop docs</a></p>
        </div>
    </div>
</template>

<script>
    import { shell } from 'electron'
    export default {
        data(){
            return {
                title: 'Welcome Lemonc for Electron vue',
                nodeVersion:process.versions.node,
                chromeVersion:process.versions.chrome,
                electronVersion:process.versions.electron
            }
        },
        methods:{
            go(src){
                shell.openExternal(src)
            }
        }
    }
</script>

<style lang="less">
    .welcome{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:#3c3c3c;
        .logo{
            text-align:center;
            img{
                width:200px;
                height:200px;
            }
        }
        .content{
            text-align: center;
            h1{
                text-align:center;
            }
        }
        
    }
</style>