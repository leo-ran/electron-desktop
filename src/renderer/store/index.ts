import { createStore, combineReducers } from 'redux'
export * from '@/store/actions'
export * from '@/store/state'

export interface Action {
    type: string;
    data: any;
}

const user = (state = {}, action: Action) => {
    if (action.type === 'TEST') {
        return {...state, ...action.data}
    }
    return state
}

const reducer = combineReducers({
    user
})

export const store = createStore(reducer)
