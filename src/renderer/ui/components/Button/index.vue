<template>
    <button 
        :class="[
            'lm-btn',
            'lm-btn-'+theme,
            {
                'lm-btn-ghost':ghost,
                'lm-btn-dashed':dashed,
                'lm-btn-text':text,
                'lm-btn-circle':shape === 'circle',
                'lm-btn-square':shape === 'square',
                'lm-btn-lg':size === 'large',
                'lm-btn-sm':size === 'small',
                'lm-btn-block':block,
                'lm-btn-loadding':Boolean(loadding),
                'lm-btn-disabled':disabled
            }
        ]"
        :disabled="disabled"
        @click="click"
        >
        <Spin :spinning="Boolean(loadding)" :size="size" :mode="Number(loadding)" v-if="loadding" :icon="icon"/>
        <Icon :name="icon" v-else-if="icon && !loadding"/>
        <slot></slot>
    </button>
</template>

<script>
    import Spin from '../Spin'
    export default {
        props:{
            theme:{  // primary || danger || success || default       
                type:String,
                default:'default'
            },
            loadding:[Boolean, String, Number],
            shape: String, // circle || square 
            size:String, // large || small || normal 
            value:String, 
            icon:String,
            dashed:Boolean,
            disabled:Boolean, 
            block:Boolean,   
            ghost:Boolean,
            text:Boolean
        },
        name:'Button',
        component:{
            Spin
        },
        filters:{
            number(value){
                if (isNaN(value)) return value
                return 1
            }
        },
        methods:{
            click(){
                if (this.loadding) return
                if (this.disabled) return
            }
        }
    }
</script>

<style lang="less">
    @import '../../styles/variable';
    .btn(){
        outline: none;
        transition:@btn-transition;
        border-width: @btn-border-width !important;
        height: @btn-height;
        cursor: pointer;
        font-size: @btn-font-size;
        .@{prefix}btn-value{
            display: inline-block;
            vertical-align: middle;
            margin-left: 3px;
        }
        .@{prefix}spin{
            color: inherit !important;
            vertical-align: middle;
        }
    }

    .@{prefix}btn{
        .btn();
    }

    .btn-common(){
        border-style: solid;
        border-radius: @btn-border-radius;
        padding: @btn-padding;
    }

    .btn-type-a(@color){
        .btn-common();
        color: contrast(@color);
        background: @color;
        border-color: @color;
        .@{prefix}spin span{
            background-color: contrast(@color);
            border-color:  contrast(@color);
        }
        &:hover,
        &:focus{
            background: lighten(@color,@btn-percent); 
            border-color: lighten(@color,@btn-percent);
        }
        &:active{
            background: darken(@color,@btn-percent); 
            border-color: darken(@color,@btn-percent); 
        }

        &.@{prefix}btn-dashed{
            border-style: dashed !important;
            background: contrast(@color) !important;
            color: @color;
            border-color: #d9d9d9;
            &:hover,
            &:focus{
                border-color:  @color; 
                color:@color;
            }
            &:active{
                color:darken(@color,@btn-percent);
                border-color: darken(@color,20%); 
            }
        }

        &.@{prefix}btn-ghost{
            background: transparent !important;
            color: contrast(@color);
            border-color: contrast(@color);
            &:hover,
            &:active,
            &:focus{
                background: transparent;
            }
            &:hover,
            &:focus{
                color:lighten(@color,@btn-percent);
                border-color: lighten(@color,@btn-percent);
            }
            &:active{
                color:darken(@color,@btn-percent);
                border-color: darken(@color,@btn-percent); 
            }
        }

        &.@{prefix}btn-text{
            border: transparent !important;
            background: contrast(@color);
            color: @color;
            &:hover,
            &:focus{
                color: lighten(@color,@btn-percent);
            }
            &:active{
                color: darken(@color,@btn-percent); 
            }
        }

        &.@{prefix}btn-loadding{
            background: lighten(@color,20%);
            border: lighten(@color,20%);
            &.@{prefix}btn-dashed{
                color:lighten(@color,20%);
                .@{prefix}spin{
                    span{
                        background-color: lighten(@color,20%);
                    }
                    span.border{
                        border-color: lighten(@color,20%);
                    }
                }
            }
            &:hover,
            &:active,
            &:focus{
                background: lighten(@color,20%);
                border: lighten(@color,20%);
            }
        }
    }

    .@{prefix}btn-default{
        background: contrast(@primary);
        color: #949393;
        border-color: #d9d9d9;
        .btn-common();
        .@{prefix}spin span{
            background-color: #949393;
        }
        &:hover,
        &:focus{
            border-color: lighten(@primary,@btn-percent); 
            color: lighten(@primary,@btn-percent);
        }
        &:active{
            color:darken(@primary,@btn-percent);
            border-color: darken(@primary,@btn-percent); 
        }
        &.@{prefix}btn-dashed{
            border-style: dashed !important;
        }
        &.@{prefix}btn-ghost{
            background: transparent !important;
            border-color: contrast(@primary);
            color: contrast(@primary);
            &:hover,
            &:focus{
                background: transparent;
                border-color: lighten(@primary,@btn-percent); 
                color: lighten(@primary,@btn-percent);
            }
            &:active{
                background: transparent;
                color:darken(@primary,@btn-percent);
                border-color: darken(@primary,@btn-percent); 
            }
        }
        &.@{prefix}btn-text{
            border: transparent !important;
            background: contrast(@primary);
            &:hover,
            &:focus{
                color: lighten(@primary,@btn-percent);
            }
            &:active{
                color: darken(@primary,@btn-percent); 
            }
        }
    }

    .@{prefix}btn-primary{
        .btn-type-a(@primary);
    }

    .@{prefix}btn-success{
        .btn-type-a(@success);
    }

    .@{prefix}btn-danger{
        .btn-type-a(@danger);
    }

    .@{prefix}btn-square{
        border-radius: 0;
    }

    /*圆形按钮*/
    .@{prefix}btn-circle{
        padding: 0;
        width: @btn-height;
        height: @btn-height;
        border-radius: 50%;
        overflow: hidden;
        text-overflow:clip;
    }

    .@{prefix}btn-lg{
        height: @btn-lg-height;
        font-size: @btn-lg-font-size;
        padding: @btn-lg-padding;
        &.@{prefix}btn-circle{
            padding: 0;
            width: @btn-lg-height;
            height: @btn-lg-height;
        }
        .lm-icon{
            font-size: 20px;
        }
    }

    .@{prefix}btn-sm{
        height: @btn-sm-height;
        font-size: @btn-sm-font-size;
        padding: @btn-sm-padding;
        &.@{prefix}btn-circle{
            padding: 0;
            width: @btn-sm-height;
            height: @btn-sm-height;
        }
        .@{prefix}icon{
            font-size: 12px;
        }
    }

    .@{prefix}btn-block{
        width: 100%;
    }

    .@{prefix}btn-disabled{
        background: @btn-disabled-color;
        border-color: #d9d9d9;
        color: #949393;
        cursor: no-drop;
        &:hover,
        &:active,
        &:focus{
            background: @btn-disabled-color;
            border-color: #d9d9d9;
            color: #949393 !important;
        }
        &.@{prefix}btn-text{
            background: transparent;
        }
    }
    
</style>