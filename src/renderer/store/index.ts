import Vue from 'vue'
import Vuex, { ModuleTree } from 'vuex'
import user from './modules/user'
import test from './modules/test'

Vue.use(Vuex)

export interface RootState {
    [index: string]: any;
}

const modules:ModuleTree<RootState> = {
    user
}

export default new Vuex.Store({
    modules
})

