<template>
    <div 
        class="lm-avatar"
        @click="$emit('click',$event)"
        v-lazy="lazy"
        :style="{
            width:size+'px',
            height:size+'px',
            backgroundColor:color
            }">
        <transition
            enter-active-class="lm-avatar-fadeIn"
            >
            <img :src="src" v-if="lazyState">
        </transition>
    </div>
</template>

<script>
    /**
     * @param { String } Number
     * @param { String } color
     * @param { String } src
     * @param { Boolean } lazy
     * @event click
     */
    export default {
        name:'Avatar',
        props:{
            color:String,
            size:Number,
            src:String,
            lazy:Boolean
        },
        created(){
            this.lazyState = !this.lazy
        },
        data(){
            return {
                lazyState:false
            }
        }
    }
</script>

<style lang="less">
    @import '../../styles/variable';
    .@{prefix}avatar{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: inline-block;
        background: @avatar-color;
        border: 1px solid @avatar-color;
        cursor: pointer;
        overflow: hidden;
        img{
            width: 100%;
        }
    }
    .@{prefix}avatar-fadeIn{
        animation: fadeIn 1s linear;
    }
</style>