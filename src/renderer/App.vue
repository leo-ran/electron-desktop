<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less">
    @import './assets/styles/index';
    html{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    body{
        width: 100%;
        height: 100%;
        margin: 0;
        overflow: auto;
    }
</style>