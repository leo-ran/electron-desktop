import Vue, { CreateElement } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

const app = new Vue({
    store,
    router,
    render: (h: CreateElement) => h(App, {
        props: {
            value: 100
        }
    })
})

app.$mount('#app')

