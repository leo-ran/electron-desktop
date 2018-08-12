import Vue from 'vue'

import App from './App'
import store from './store'
import router from './router'

new Vue({
    el: '#app',
    template:'<App />',
    store,
    router,
    components:{
        App
    }
})