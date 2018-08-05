import Vue from 'vue'

import App from './App'
import store from './store'
import router from './router'

import ui from './ui';

Vue.use(ui)

new Vue({
    el:"#app",
    template:`<App />`,
    store,
    router,
    components:{
        App
    }
})