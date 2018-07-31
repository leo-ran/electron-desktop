import { createStore, combineReducers } from 'redux'
export * from './actions'
export * from './states'

const user = (state = {},action)=>{
    if(action.type === 'TEST'){
        return {...state,...action.data}
    }
    return state
}

const reducer = combineReducers({
    user
})

export const store = createStore(reducer)

