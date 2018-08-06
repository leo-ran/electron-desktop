<template>
    <div 
        :class="[
            'lm-toolbar',
            'lm-toolbar-'+color,{
                'lm-toolbar-small':small,
                'lm-toolbar-large':large
            }
        ]">
        <Button text round :color="color" small >
            <Icon :size="16" :name="icon"/>
        </Button>
        <h4 class="lm-toolbar-title">
            {{title}}
        </h4>
        <div class="lm-toolbar-tools">
            
        </div>
    </div>
</template>

<script>
    export default {
        name:'Toolbar',
        props:{
            color:{
                type:String,
                default:'primary'
            },
            title:{
                type:String,
                default:'标题'
            },
            icon:{
                type:String,
                default:'menu'
            },
            small:Boolean,
            large:Boolean
        }
    }
</script>

<style lang="less">
    @import '../../styles/variable';
    .@{prefix}toolbar{
        padding: 0px; 
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        color: #f1f1f1;
        height: 50px;
        &.@{prefix}toolbar-small{
            height: 40px;
        }
        &.@{prefix}toolbar-large{
            height: 60px;
        }
        &.@{prefix}toolbar-primary{
            background: @primary;
        }
        &.@{prefix}toolbar-error{
            background: @error;
        }
        &.@{prefix}toolbar-success{
            background: @success;
        }
        &.@{prefix}toolbar-secondary{
            background: @secondary;
        }
        &.@{prefix}toolbar-accent{
            background: @accent;
        }
        &.@{prefix}toolbar-info{
            background: @info;
        }
        &.@{prefix}toolbar-warning{
            background: @warning;
        }
        .@{prefix}toolbar-title{
            flex: 1;
            margin: 0;
            padding-left: 10px;
        }
    }
</style>