<template>
    <div :class="[
        'lm-spin',
        {
            'lm-spin-lg':size === 'large',
            'lm-spin-sm':size === 'small'
        }
        ]">
        <slot></slot>
        <Icon :name="icon" :color="color" type="md"/>
    </div>
</template>

<script>
    export default {
        name:"Spin",
        props:{
            icon:{
                type:String,
                default:'sync'
            },
            size:String,
            color:String
        }
    }
</script>

<style lang="less">
 @import '../../styles/variable';
.@{prefix}spin{
    display: inline-block;
    animation:rotate 1s linear infinite;
    width: 20px;
    height: 20px;
    line-height: 20px;
    .@{prefix}icon{
        font-size: 20px;
    }
    text-align: center;
    display: inline-block;
    &.@{prefix}spin-lg{
        width: 32px;
        height: 32px;
        line-height: 32px;
        .@{prefix}icon{
            font-size: 32px;
        }
    }
    &.@{prefix}spin-sm{
        text-align: center;
        width: 14px;
        height: 14px;
        line-height: 14px;
         .@{prefix}icon{
            font-size: 14px;
        }
    }
}
</style>