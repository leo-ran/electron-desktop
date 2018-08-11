<template>
    <div 
        class="lm-avatar"
        @click="$emit('click',$event)"
        v-lazy="lazy && src"
        :style="{
            width:isize+'px',
            height:isize+'px',
            lineHeight:isize+'px',
            backgroundColor:color,
            borderRadius: square ? null : '50%'
            }">
        <transition
            enter-active-class="lm-avatar-fadeIn"
            >
            <img :src="src" @error="$emit('onError',src)" v-if="lazyState && src">
            <Icon :name="icon" :size="isize / 2" type="md" v-else-if="icon && !src && !text" />
            <div v-else>{{text}}</div>
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
            icon:{
                type:String,
                default:'person'
            },
            size:[String,Number],
            src:String,
            lazy:Boolean,
            square:Boolean,
            large:Boolean,
            small:Boolean,
            text:String
        },
        created(){
            this.lazyState = !this.lazy
        },
        data(){
            return {
                lazyState:false,
            }
        },
        computed:{
            isize(){
                if(this.size) return this.size
                if(this.large) return 40
                if(this.small) return 24
                return 32
            }
        }
    }
</script>

<style lang="less">
    @import '../../styles/variable';
    .@{prefix}avatar{
        width: 32px;
        height: 32px;
        display: inline-block;
        border-radius: 5px;
        background: @avatar-color;
        text-align: center;
        color: #fff;
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