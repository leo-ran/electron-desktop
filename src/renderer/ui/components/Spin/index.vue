<template>
    <div :class="[
        'lm-spin',
        {
            'lm-spin-lg':size === 'large',
            'lm-spin-sm':size === 'small'
        }
        ]"
        v-if="spinning"
        :style="{
            animationPlayState: mode === 1 ? 'paused' : 'play',
            width:mode === 1 ? '30px' : false
        }">
        <div class="lm-spin-mode-1" v-if="mode === 1">    
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="lm-spin-mode-2" v-if="mode === 2">    
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <Icon :name="icon" v-if="mode === 3"/>
        <slot v-if="mode === 4"></slot>
    </div>
</template>

<script>
    import Icon from '../Icon/index'
    export default {
        name:"Spin",
        props:{
            icon:{ // icon 选项只在模式3下生效
                type:String,
                default:'add'
            },
            spinning:{
                type:Boolean,
                default:true
            },
            size:String,
            mode:{  // 预设模式1 & 2  模式3使用Icon 图标名称  模式4 自定义模式
                type:Number,
                default:1
            },
            components:{
                Icon
            }
        }
    }
</script>

<style lang="less">
 @import '../../styles/variable';
 @keyframes loadFadeScale {
    0%{
        transform: scale(1,1);
        opacity: 1;
    }
    100%{
        transform: scale(0,0);
        opacity: 0;
    }
}

@keyframes loadFade {
    0%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
.@{prefix}spin{
    display: inline-block;
    animation:rotate 1.3s linear infinite;
    text-align: center;
    width: 20px;
    height: 20px;
    color: @primary;
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
    .@{prefix}spin-mode-1{
        width: inherit;
        height: inherit;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: @primary;
            opacity: 0;
            &:nth-child(1){
                animation: loadFadeScale 1s 0s linear infinite alternate-reverse;
            }
            &:nth-child(2){
                animation: loadFadeScale 1s 0.5s linear alternate-reverse infinite;
            }
            &:nth-child(3){
                animation: loadFadeScale 1s 1s linear alternate-reverse infinite;
            }
        }
    }
    .@{prefix}spin-mode-2{
        width: inherit;
        height: inherit;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        span{
            width: 30%;
            height: 30%;
            margin: 10%;
            border-radius: 50%;
            background: @primary;
            opacity: 0;
            &:nth-child(1){
                animation: loadFade 1s 0s  alternate-reverse infinite;
            }
            &:nth-child(2){
                animation: loadFade 1s 0.5s ease-in alternate-reverse infinite;
            }
            &:nth-child(3){
                animation: loadFade 1s 1s ease-in alternate-reverse infinite;
            }
            &:nth-child(4){
                animation: loadFade 1s 1.5s ease-in alternate-reverse infinite;
            }
        }
    }
}
</style>