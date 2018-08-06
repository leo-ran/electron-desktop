<template>
    <div 
        :style="[
            {
                padding:padding+'px',
                justifyContent,
                alignItems
            }
        ]"
        :class="[
            'lm-layout',{
                'lm-layout-row':row,
                'lm-layout-column':column
            }
        ]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'Layout',
        props:{
            row:Boolean,
            column:Boolean,
            padding: Number,
            wrap:Boolean,
            just:String,
            align:String,
            start:Boolean,
            center:Boolean,
            end:Boolean
        },
        computed:{
            alignItems(){
                if(this.column && this.start) return 'flex-start'
                if(this.column && this.end) return 'flex-end'
                if(this.column && this.center) return 'center'
                switch(this.align){
                    case 'start':
                        return 'flex-start'
                    break;
                    case 'end':
                        return 'flex-end'
                    break;
                    case 'center':
                        return 'center'
                    break;
                }
            },
            justifyContent(){
                if(this.row && this.start) return 'flex-start'
                if(this.row && this.end) return 'flex-end'
                if(this.row && this.center) return 'center'
                switch(this.just){
                    case 'start':
                        return 'flex-start'
                    break;
                    case 'end':
                        return 'flex-end'
                    break;
                    case 'around':
                        return 'space-around'
                    break;
                    case 'between':
                        return 'space-between'
                    break;
                    case 'center':
                        return 'center'
                    break;
                }
            }
        }
    }
</script>

<style lang="less">
    @import '../../styles/variable';
    .@{prefix}layout{
        display: flex;
        &.@{prefix}layout-column{
            flex-direction: column;
            align-items: center;
            align-items: flex-start;
            align-items: flex-end;
        }
        &.@{prefix}layout-row{
            flex-direction: row;
        }
    }
</style>