<template>
    <div 
        class="lm-media" 
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
            <Imager 
                class="lm-media-item" 
                :alt="alt"
                :lazy="true"
                :source="item"
                ref="Imager"
                :draggable="draggable"
                v-for="(item,index) in imagesMap"
                :key="index"
                @reload="imageLoad"
                />
        </div>
    </div>
</template>

<script>
    import Imager from './image'
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
        data() {
            return {
                lazyState: false,
                imageMinHeight:null
            }
        },
        watch:{
            imageMinHeight(n){
                this.$refs['Imager'].forEach(Imager=>{
                    Imager.$el.style.maxHeight = n + 'px'
                })
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
        },
        methods:{
            imageLoad(img){
                if(img.height){
                    if(!this.imageMinHeight){
                        this.imageMinHeight = img.height
                    } else if(img.height < this.imageMinHeight){
                        this.imageMinHeight = img.height
                    }
                }
            }
        },
        components:{
            Imager
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