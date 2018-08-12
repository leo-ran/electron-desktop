<template>
    <div 
        :class="[
            'lm-avatar',
            {
                'lm-avatar-primary':this.theme === 'primary',
                'lm-avatar-success':this.theme === 'success',
                'lm-avatar-danger':this.theme === 'danger',                                
            }
        ]"
        @click="$emit('click',$event)"
        v-lazy="lazy && src"
        :style="{
            width: isize+'px',
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
    export default {
        name:'Avatar',
        props:{
            color:String,
            theme:String,
            icon:{
                type:String,
                default:'person'
            },
            size:[String, Number],
            src:String,
            lazy:Boolean,
            square:Boolean,
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
                if (!isNaN(this.size)) {
                    if (this.size < 20) return 20
                    return this.size
                }
                if (this.size === 'large') return 40
                if (this.size === 'small') return 24
                return 32
            }
        }
    }
</script>

<style lang="less">
    @import '../../styles/variable';
    .@{prefix}avatar{
        width: @avatar-size;
        height: @avatar-size;
        display: inline-block;
        border-radius: 50%;
        background: @avatar-color;
        text-align: center;
        color: #fff;
        cursor: pointer;
        overflow: hidden;
        img{
            width: 100%;
        }
        &.@{prefix}avatar-success{
            background-color: @success;
        }
        &.@{prefix}avatar-primary{
            background-color:@primary;
        }
        &.@{prefix}avatar-danger{
            background-color:@danger;
        }
    }
    .@{prefix}avatar-fadeIn{
        animation: fadeIn 1s linear;
    }
</style>