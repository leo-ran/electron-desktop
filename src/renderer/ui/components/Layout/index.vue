<template>
    <div 
        :class="[
            'lm-layout',{
                'lm-layout-row':row,
                'lm-layout-column':column,
                'lm-layout-column-wrap':column && wrap,
                'lm-layout-row-wrap':row && wrap,
                'lm-layout-column-between':column && between,
                'lm-layout-row-between':row && between,
                'lm-layout-column-around':column && around,
                'lm-layout-row-around':row && around,
                'lm-layout-column-start':column && start,
                'lm-layout-row-start':row && start,
                'lm-layout-column-end':column && end,
                'lm-layout-row-end':row && end,
                'lm-layout-column-center':column && center,
                'lm-layout-row-center':row && center
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
            wrap:Boolean,
            between:Boolean,
            around:Boolean,
            start:Boolean,
            end:Boolean,
            center:Boolean
        }
    }
</script>

<style lang="less">
    @import '../../styles/variable';
    .@{prefix}layout{
        display: flex;
        &.@{prefix}layout-column{
            flex-direction: column;
            &.@{prefix}layout-column-wrap{
                flex-wrap: wrap;
            }
            &.@{prefix}layout-column-around{
                justify-content: space-around;
            }
            &.@{prefix}layout-column-between{
                justify-content: space-between;
            }
            &.@{prefix}layout-column-start{
                justify-content: flex-start;
            }
            &.@{prefix}layout-column-end{
                justify-content: flex-end;
            }
            &.@{prefix}layout-column-center{
                justify-content: center;
            }
        }
        &.@{prefix}layout-row{
            flex-direction: row;
            &.@{prefix}layout-wrap{
                flex-wrap: wrap;
            }
            &.@{prefix}layout-row-around{
                justify-content: space-around;
            }
            &.@{prefix}layout-row-between{
                justify-content: space-between;
            }
            &.@{prefix}layout-row-start{
                justify-content: flex-start;
            }
            &.@{prefix}layout-row-end{
                justify-content: flex-end;
            }
            &.@{prefix}layout-row-center{
                justify-content: center;
            }
        }
    }
</style>