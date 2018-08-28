import { Module } from 'vuex'

interface UserState {
    name: string;
}
const user: Module<any, any> = {
    namespaced: true,
    state: {
        name: 'john'
    },
    getters: {
        name(state: UserState) {
            return state.name
        }
    }
}

export default user
