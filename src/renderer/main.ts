import Vue, { CreateElement } from '@vuets/class'
import App from './Appx'
import store from './store'
import router from './router'

const app = new Vue({
    store,
    router,
    render: (h: CreateElement) => h(App)
})

app.$mount('#app')

