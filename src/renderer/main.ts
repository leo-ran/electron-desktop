import Vue, { CreateElement } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

const app = new Vue({
    el: '#app',
    store,
    router,
    render: (h: CreateElement) => h(App)
})

app.$mount('#app')




