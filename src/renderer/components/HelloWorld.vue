<template>
    <div class="app">
        <Avatar size="large" text="U" theme="danger" />
        <Avatar theme="primary" />
        <Avatar :lazy="true" src="http://img1.touxiang.cn/uploads/20131129/29-012139_809.jpg" />
    </div>
    
</template>

<script>
    export default {
    }
</script>

<style lang="less">
    .app{
        // background: #000;
        padding: 10px;
    }
</style>