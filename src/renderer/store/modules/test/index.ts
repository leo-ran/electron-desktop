import { Module } from "vuex";
import { RootState } from '@/store';
import state from './state'
import getters from './getters'
import { UserState } from '@/store/modules/user/state';

const user: Module<any, UserState> = {
    namespaced: true,
    state,
    getters
}

export default user
