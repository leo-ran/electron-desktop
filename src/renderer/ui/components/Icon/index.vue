<template>
    <i 
        :class="[
            'lm-icon',
            'lm-icon-'+type+'-'+ name
            ]"
        :style="{
            fontSize:size + 'px',
            color:color
        }"
        >
    </i>
</template>

<script>
    /**
     * @param { Number }  size
     * @param { String }  type
     * @param { String }  color
     * @param { String }  name
     */
    export default {
        name:'Icon',
        props:{
            size:{
                type:Number
            },
            type:{
                type:String,
                default:'ios'
            },
            color:{
                type:String
            },
            name:String
        }
    }
</script>

<style lang="less">
    @import '../../styles/variable';
    @import '../../styles/fonts/fonts';
</style>