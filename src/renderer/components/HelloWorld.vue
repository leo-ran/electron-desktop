<template>
    <div class="app">
        <Spin :mode="1" size="large" />
        <br />
        <Spin :mode="2" size="small" />
        <Spin :mode="2" />
        <Spin :mode="2" size="large" />

         <Spin :mode="3" size="large" />

        <Button theme="primary">按钮一枚</Button>

        <Icon name="spin1" />
        <Icon name="spin1" />
        <Icon name="spin1" />
        <Icon name="spin1" />
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