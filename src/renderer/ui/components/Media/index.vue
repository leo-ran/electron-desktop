<template>
    <div 
        class="lm-media" 
        v-lazy="lazy"
        @click.stop="$emit('click',$event)"
        :style="{
            flex:flex,
            padding:padding+'px',
            width:width+'px',
            maxHeight:height+'px'
        }">
        <transition
            enter-active-class="lm-media-fadeIn"
            >
            <img :src="src" :alt="alt" :draggable="draggable" v-if="lazyState">
        </transition>
    </div>
</template>

<script>
    export default {
        name:'Media',
        props:{
            lazy:Boolean,
            flex:Number,
            src:String,
            alt:String,
            padding: Number,
            height:Number,
            width:Number,
            draggable:Boolean
        },
        created(){
            this.lazyState = !this.lazy 
        },
        data() {
            return {
                lazyState: false
            }
        },
    }
</script>

<style lang="less">
    @import '../../styles/variable';
    .@{prefix}media{
        overflow: hidden;
        background: #f5f5f5;
        img{
            width: 100%;
            display: block;
        }
    }
    .@{prefix}media-fadeIn{
        animation: fadeIn 1s linear;
    }
</style>