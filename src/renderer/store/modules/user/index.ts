import { Module, ModuleTree } from "vuex";
import { RootState } from '@/store';
import state, { UserState } from './state'
import getters from './getters'
import test from '../test'

const modules:ModuleTree<RootState> = {
    test
}

const user: Module<any, RootState> = {
    namespaced: true,
    state,
    getters,
    modules
}

export default user
