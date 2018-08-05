<template>
    <div class="lm-card">
        <header 
            :class="[
                'lm-card-header',
                'lm-card-header-'+color
            ]">
            <Button text round :color="color" small v-if="header">
                <Icon :name="icon"/>
            </Button>
            <h3 class="lm-card-header-title" v-if="header">
                {{title}}
            </h3>
            <div class="lm-card-header-tools" v-if="header">
                <Button text round :color="color" small v-if="header">
                    <Icon name="close" />
                </Button>
                <slot name="header-tools"></slot>
            </div>
            <slot name="header"></slot>
        </header>
        <main :style="{padding:padding+'px'}">
            <slot></slot>
        </main>
    </div>
</template>

<script>
    export default {
        name:'Card',
        props:{
            header:{
                type:Boolean,
                default:false
            },
            color:{
                type:String,
                default:'primary'
            },
            icon:{
                type:String,
                default:'menu'
            },
            title:{
                type:String,
                default:'标题栏'
            },
            padding:Number
        }
    }
</script>

<style lang="less">
    @import '../../styles/variable';
    .@{prefix}card{
        border-radius: 5px;
        overflow: hidden;
        border: 2px solid #ddd;
        box-shadow: 0 1px .5px .2px #ddd;
        min-width: 300px;
        .@{prefix}card-header{
            padding: 0px; 
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 10px;
            color: #f1f1f1;
            &.@{prefix}card-header-primary{
                background: @primary;
            }
            &.@{prefix}card-header-error{
                background: @error;
            }
            &.@{prefix}card-header-success{
                background: @success;
            }
            &.@{prefix}card-header-secondary{
                background: @secondary;
            }
            &.@{prefix}card-header-accent{
                background: @accent;
            }
            &.@{prefix}card-header-info{
                background: @info;
            }
            &.@{prefix}card-header-warning{
                background: @warning;
            }
            .@{prefix}card-header-title{
                flex: 1;
                padding-left: 10px;
            }
        }
    }
</style>