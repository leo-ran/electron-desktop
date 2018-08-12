<template>
    <div class="lm-imager" v-lazy="lazy">
        <transition
            enter-active-class="lm-media-fadeIn">
            <img @load="load" ref="img" :src="source.src" :alt="alt" :draggable="draggable" v-if="lazyState" />
        </transition>
    </div>
</template>

<script>
    export default {
        name:'Imager',
        created(){
            this.lazyState = !this.lazy 
        },
        props:{
            source:Object,
            alt:String,
            draggable:Boolean,
            lazy:Boolean
        },
        data() {
            return {
                lazyState: !this.lazy
            }
        },
        methods:{
            load(e){
                this.$emit('reload', {
                    height:e.target.clientHeight,
                    width:e.target.clientWidth
                })
            }
        }
    }
</script>

<style lang="less">
    @import '../../styles/variable';
    .@{prefix}imager{
        min-height: 1px;
        overflow: hidden;
        position: relative;
        img{
            display: block;
            width: 100%;
        }
    }
</style>