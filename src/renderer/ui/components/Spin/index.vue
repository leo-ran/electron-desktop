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
            animationPlayState: mode === 1 || !spinning ? 'paused' : 'play'
        }">
        <div
            class="lm-spin-mode-1"
            v-if="mode === 1"
            :style="{
                animationPlayState: mode === 1 && spinning ? 'play' : 'paused',
            }">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div
            class="lm-spin-mode-2"
            v-if="mode === 2"
            :style="{
                animationPlayState: mode === 1 && spinning ? 'play' : 'paused',
            }">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="lm-spin-mode-3" v-if="mode === 3">
            <span class="border"></span>
        </div>
        <slot v-if="mode === 4"></slot>
    </div>
</template>

<script>
    import Icon from '../Icon/index'
    export default {
        name: 'Spin',
        data(){
            return {
                mode3:Array(8)
            }
        },
        props:{
            icon:{ // icon 选项只在模式3下生效
                type:String,
                default:'spin1'
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
        border-radius: 50%;
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
 @size:@spin-size;
 @lg-size:@spin-lg-size;
 @sm-size:@spin-sm-size;

 .@{prefix}spin{
    display: inline-block;
    animation:rotate 1.3s linear infinite;
    text-align: center;
    width:  @size;
    height: @size;
    overflow: hidden;
    .@{prefix}icon{
        line-height: @size;
        font-size:  @size - 2;
    }
    color: @primary;
    vertical-align: middle;
    text-align: center;
    &.@{prefix}spin-lg{
        width: @lg-size;
        height: @lg-size;
        .@{prefix}icon{
            font-size: @lg-size - 2px;
            line-height: @lg-size;
        }
        .@{prefix}spin-mode-1{
            span{
                width: 6px;
                height: 6px;
            }
        }
    }
    &.@{prefix}spin-sm{
        width: @sm-size;
        height: @sm-size;
         .@{prefix}icon{
             text-align: center;
            font-size: @sm-size - 4px;
            line-height: @sm-size;
         }
        .@{prefix}spin-mode-1{
            span{
                width: 3px;
                height: 3px;
            }
        }
    }
    .@{prefix}spin-mode-1{
        width: inherit;
        height: inherit;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
            width: 5px;
            height: 5px;
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
    .@{prefix}spin-mode-3{
        width: inherit;
        height: inherit;
        position: relative;
        span{
            width: 50%;
            height: 50%;
            position: absolute;
            top: 0;
            left: 0;
            background: transparent !important;
            border-top-left-radius: 80%;
            border-top: 1px solid @primary;
            border-top: 1px solid @primary;
        }
    }
}
</style>