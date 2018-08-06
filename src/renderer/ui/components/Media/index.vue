<template>
    <div 
        class="lm-media" 
        v-lazy="lazy"
        @click.stop="$emit('click',$event)"
        :style="{
            flex:flex,
            padding:padding+'px',
            width:width+'px',
            maxHeight:height+'px',
        }">
        <div 
            :class="[
                'lm-media-list',{
                    'lm-media-list-row':row,
                    'lm-media-list-column':column,
                }
            ]" >
            <div 
                class="lm-media-item"
                ref="lm-media-item"
                v-for="(item,index) in imagesMap"
                :style="{
                    height:item.height
                }"
                @click.stop="$emit('select',item,index)"
                :key="index"
                >
                <transition
                    enter-active-class="lm-media-fadeIn">
                    <img @load="load(item,index)" :src="item.src" :alt="alt" :draggable="draggable" v-if="lazyState">
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Media',
        props:{
            lazy:Boolean,
            flex:Number,
            src:[String,Array],
            alt:String,
            row:Boolean,
            column:Boolean,
            padding: Number,
            height:Number,
            width:Number,
            draggable:Boolean
        },
        created(){
            this.lazyState = !this.lazy 
        },
        mounted(){
           
        },
        data() {
            return {
                lazyState: false
            }
        },
        methods:{
            load(item,index){
                this.$set(item,'height',this.$refs['lm-media-item'][index].clientHeight + 'px')
            }
        },
        computed:{
            images(){
                if(Array.isArray(this.src)){
                    return this.src
                } else {
                    return [ this.src ]
                }
            },
            imagesMap(){
                return this.images.map(img => {
                    if(typeof img === 'object'){
                        return img
                    } else {
                        return {
                            src:img
                        }
                    }
                })
            }
        }
    }
</script>

<style lang="less">
    @import '../../styles/variable';
    .@{prefix}media{
        width: 100%;
        overflow: hidden;
        .@{prefix}media-list{
            margin-left: -2px;
            display: flex;
            &.@{prefix}media-list-row{
                flex-direction: row;
                .@{prefix}media-item{
                    flex: 1;
                }
            }
            &.@{prefix}media-list-column{
                flex-direction: column;
            }
            .@{prefix}media-item{
                margin-left: 2px;
                margin-top: 2px;
                img{
                    width: 100%;
                    display: block;
                }
            }
            
        }
    }
    .@{prefix}media-fadeIn{
        animation: fadeIn 1s linear;
    }
</style>