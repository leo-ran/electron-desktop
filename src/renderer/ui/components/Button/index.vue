<template>
    <button 
        :class="[
            'lm-btn',
            !disabled ? 'lm-btn-'+color :'lm-btn-disabled',
            {
                'lm-btn-small':small,
                'lm-btn-large':large,
                'lm-btn-small':small,
                'lm-btn-loadding':loadding,
                'lm-btn-block':block,
                'lm-btn-outline':outline,
                'lm-btn-text':text,
                'lm-btn-round':round
            }
        ]"
        :disabled="disabled"
        >
        <Icon name="sync" class="lm-loadding-a" type="md" :size="22" v-if="loadding && !loadText" />
        <span v-if="loadText">{{loadText}}</span>
        <div :class="['lm-btn-content',{
            'lm-btn-hide':loadding
            }]">
            <slot name="before"></slot>
            <Icon :name="icon" v-if="icon" />
            <slot>{{value}}</slot>
            <slot name="after"></slot>
        </div>
    </button>
</template>

<script>
    /**
     * @param { String } value
     * @param { String } color
     * @param { String } icon
     * @param { String } loadText
     * @param { Boolean } block
     * @param { Boolean } disabled
     * @param { Boolean } loadding
     * @param { Boolean } outline
     * @param { Boolean } large
     * @param { Boolean } small
     * @param { Boolean } text
     * @param { Boolean } round
     */
    export default {
        props:{
            block:Boolean,
            color:{
                type:String,
                default:'default'
            },
            disabled:Boolean,
            icon:String,
            loadding:Boolean,
            loadText:String,
            small:Boolean,
            value:String,
            outline:Boolean,
            large:Boolean,
            text:Boolean,
            round:Boolean
        },
        name:'Button'
    }
</script>

<style lang="less">
    @import '../../styles/variable';
    .btn(@color,@font:#fff,@border:none){
        background: @color;
        border: 1px solid @color;
        margin: 0 8px;
        padding: 0 16px;
        color: @font;
        border-radius: 3px;
        outline: none;
        box-shadow: 0 0 5px 1px #ccc;
        transition: all .2s linear;
        height: 36px;
        font-size: 14px;
        cursor: pointer;
        &:active{
            box-shadow: none;
            background: lighten(@color,7%);
            border: 1px solid lighten(@color,7%);
        }
        &:hover{
            background: lighten(@color,7%);
            border: 1px solid lighten(@color,7%);
        }
        &.@{prefix}btn-loadding{
            background: lighten(@color,30%);
            box-shadow: 0 0 3px 1px #ccc;
            border: 1px solid lighten(@color,30%);
            cursor: not-allowed;
            &:active{
                box-shadow: 0 0 3px 1px #ccc;
            }
            &:hover{
                background: lighten(@color,30%);
            }
        }
        &.@{prefix}btn-outline{
            background: transparent;
            border: 1px solid @color;
            color:@color;
            &:hover{
               background: tint(@color, 80%);
            }
            &:active{
                box-shadow: none;
            }
        }
        &.@{prefix}btn-text{
            background: transparent;
            border: none !important;
            box-shadow: none;
            color:@color;
            &:hover{
                color:tint(@color,40%)
            }
        }

        &.@{prefix}btn-round{
            width: 42px;
            height: 42px;
            border-radius: 50%;
            overflow: hidden;
            padding: 0px;
            color:#fff !important;
            &:active{
                background: tint(@color,30%);
            }
            &:hover{
                background: tint(@color,30%);
            }
        }
        
        &.@{prefix}btn-small{
            padding: 0 16px;
            height: 28px;
            font-size: 0.8em;
            &.@{prefix}btn-round{
                width: 34px;
                height: 34px;
                padding: 0px;
            }
        }

        &.@{prefix}btn-large{
            padding: 0 30px;
            height: 44px;
            font-size: 1.1em;
            &.@{prefix}btn-round{
               padding: 0px;
                width: 50px;
                height: 50px;
            }
        }

        &.@{prefix}btn-block{
            width: 100%;
            margin: 6px 0px;
        }

    }
    .@{prefix}btn-primary{
        .btn(@primary);
    }

    .@{prefix}btn-secondary{
        .btn(@secondary);
    }

    .@{prefix}btn-accent{
        .btn(@accent);
    }
    .@{prefix}btn-error{
        .btn(@error);
    }
    .@{prefix}btn-info{
        .btn(@info);
    }
    .@{prefix}btn-success{
        .btn(@success)
    }
    .@{prefix}btn-warning{
        .btn(@warning)
    }
    .@{prefix}btn-default{
        .btn(#f5f5f5,#000);
        color: #000 !important;
        &:hover{
            color: tint(#000,40%) !important;
        }
        border: 1px solid #ddd !important;
    }
    .@{prefix}btn-disabled{
        .btn(rgba(0, 0, 0, 0.12),rgba(0,0,0,0.26));
        border: 1px solid #ddd;
        cursor: not-allowed;
        box-shadow:none;
        &:hover,
        &:active{
            background: rgba(0,0,0,0.12);
             box-shadow:none;
        }
    }

    .@{prefix}loadding-a{
        animation: rotate 1s ease-in-out infinite;
        display: block;
    }
    .@{prefix}btn-hide{
        visibility: hidden;
        height: 0;
    }
</style>