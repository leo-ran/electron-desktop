<template>
    <div class="app">
        <!--<Avatar text="U" />-->
        <!--<Avatar src="http://img1.touxiang.cn/uploads/20131129/29-012139_809.jpg" />-->

        <h1>SM</h1>
        <Button theme="danger" size="small">按钮一枚</Button>
        <Button theme="success" size="small">按钮一枚</Button>
        <Button theme="primary" size="small">按钮一枚</Button>
        <br/>
        <br/>
        <Button theme="danger" shape="square" size="small">按钮一枚</Button>
        <Button theme="success" shape="square" size="small">按钮一枚</Button>
        <Button theme="primary" shape="square" size="small">按钮一枚</Button>
        <br/>
        <br/>
        <Button theme="danger" size="small" :loadding="1">按钮一枚</Button>
        <Button theme="success" size="small" :loadding="2">按钮一枚</Button>
        <Button theme="primary" size="small" :loadding="3">按钮一枚</Button>
        <br/>
        <br/>
        <Button theme="danger" shape="square" :loadding="1" size="small">按钮一枚</Button>
        <Button theme="success" shape="square" :loadding="2" size="small">按钮一枚</Button>
        <Button theme="primary" shape="square" :loadding="3" size="small">按钮一枚</Button>
        <br/>
        <br/>
        <Button theme="danger" dashed size="small" :loadding="1">按钮一枚</Button>
        <Button theme="success" dashed size="small" :loadding="2">按钮一枚</Button>
        <Button theme="primary" dashed size="small" :loadding="3">按钮一枚</Button>
        <br/>
        <br/>
        <Button theme="danger" dashed shape="square" :loadding="1" size="small">按钮一枚</Button>
        <Button theme="success" dashed shape="square" :loadding="2" size="small">按钮一枚</Button>
        <Button theme="primary" dashed shape="square" :loadding="3" size="small">按钮一枚</Button>

        <br/>
        <br/>
        <Button theme="danger" shape="circle" icon="person" size="small"></Button>
        <Button theme="success" shape="circle" icon="person" size="small"></Button>
        <Button theme="primary" shape="circle" icon="person" size="small"></Button>
        <Button theme="danger" shape="circle" loadding="1" size="small"></Button>
        <Button theme="success" shape="circle" loadding="2" size="small"></Button>
        <Button theme="primary" shape="circle" loadding="3" size="small"></Button>
        <Button theme="danger" dashed shape="circle" loadding="1" size="small"></Button>
        <Button theme="success" dashed shape="circle" loadding="2" size="small"></Button>
        <Button theme="primary" dashed shape="circle" loadding="3" size="small"></Button>
        <h1>NM</h1>
        <Button theme="danger" >按钮一枚</Button>
        <Button theme="success">按钮一枚</Button>
        <Button theme="primary">按钮一枚</Button>
        <br/>
        <br/>
        <Button theme="danger" :loadding="1" >按钮一枚</Button>
        <Button theme="success" :loadding="2" >按钮一枚</Button>
        <Button theme="primary" :loadding="3">按钮一枚</Button>
        <br/>
        <br/>
        <Button theme="danger" shape="square">按钮一枚</Button>
        <Button theme="success" shape="square">按钮一枚</Button>
        <Button theme="primary" shape="square">按钮一枚</Button>
        <br/>
        <br/>
        <Button theme="danger" dashed shape="square">按钮一枚</Button>
        <Button theme="success" dashed shape="square">按钮一枚</Button>
        <Button theme="primary" dashed shape="square">按钮一枚</Button>
        <br/>
        <br/>
        <Button theme="danger" dashed :loadding="1">加载中</Button>
        <Button theme="primary" dashed :loadding="2">加载中</Button>
        <Button theme="success" dashed :loadding="3">加载中</Button>
        <br/>
        <br/>
        <Button theme="danger" shape="circle" icon="person"></Button>
        <Button theme="success" shape="circle" icon="person"></Button>
        <Button theme="primary" shape="circle" icon="person"></Button>
        <Button theme="danger" shape="circle" loadding="1"></Button>
        <Button theme="success" shape="circle" loadding="2"></Button>
        <Button theme="primary" shape="circle" loadding="3"></Button>
        <Button theme="danger" dashed shape="circle" loadding="1"></Button>
        <Button theme="success" dashed shape="circle" loadding="2"></Button>
        <Button theme="primary" dashed shape="circle" loadding="3"></Button>
        <h1>LG</h1>
        <Button theme="danger" size="large" >按钮一枚</Button>
        <Button theme="success" size="large" >按钮一枚</Button>
        <Button theme="primary" size="large">按钮一枚</Button>
        <br/>
        <br/>
        <Button theme="danger" size="large" :loadding="1">按钮一枚</Button>
        <Button theme="success" size="large" :loadding="2">加载中</Button>
        <Button theme="primary" size="large" :loadding="3">加载中</Button>
        <br/>
        <br/>
        <Button theme="danger" shape="square" size="large">按钮一枚</Button>
        <Button theme="success" shape="square" size="large">按钮一枚</Button>
        <Button theme="primary" shape="square" size="large">按钮一枚</Button>
        <br/>
        <br/>
        <Button theme="danger" dashed shape="square" size="large">按钮一枚</Button>
        <Button theme="success" dashed shape="square" size="large">按钮一枚</Button>
        <Button theme="primary" dashed shape="square" size="large">按钮一枚</Button>
        <br/>
        <br/>
        <Button theme="danger" size="large" dashed :loadding="1">按钮一枚</Button>
        <Button theme="success" size="large" dashed :loadding="2">加载中</Button>
        <Button theme="primary" size="large" dashed :loadding="3">加载中</Button>
        <br/>
        <br/>
        <Button theme="danger" size="large" shape="circle" icon="person"></Button>
        <Button theme="success" size="large" shape="circle" icon="person"></Button>
        <Button theme="primary" size="large" shape="circle" icon="person"></Button>
        <Button theme="danger" size="large" shape="circle" loadding="1"></Button>
        <Button theme="success" size="large" shape="circle" loadding="2"></Button>
        <Button theme="primary" size="large" shape="circle" loadding="3"></Button>
        <Button theme="danger" dashed size="large" shape="circle" loadding="1"></Button>
        <Button theme="success" dashed size="large" shape="circle" loadding="2"></Button>
        <Button theme="primary" dashed size="large" shape="circle" loadding="3"></Button>

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