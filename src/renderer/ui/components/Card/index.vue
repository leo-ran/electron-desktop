<template>
    <div class="lm-card">
        <main :style="{padding:padding+'px'}">
            <slot></slot>
        </main>
    </div>
</template>

<script>
    export default {
        name:'Card',
        props:{
            header:{
                type:Boolean,
                default:false
            },
            color:{
                type:String,
                default:'primary'
            },
            icon:{
                type:String,
                default:'menu'
            },
            title:{
                type:String,
                default:'标题栏'
            },
            padding:Number
        }
    }
</script>

<style lang="less">
    @import '../../styles/variable';
    .@{prefix}card{
        border-radius: 5px;
        overflow: hidden;
        border: 2px solid #ddd;
        box-shadow: 0 1px .5px .2px #ddd;
        min-width: 300px;
    }
</style>