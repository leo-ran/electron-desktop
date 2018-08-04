import React, { Component } from 'react'
import { mapActions, mapStates } from './store'
import { connect } from 'react-redux'
import './assets/styles/index.less'

import Hellow from './components/Hellow'
class App extends Component {
    render(){
        return (
            <div className="app">
                <Hellow />
            </div>
        )
    }
}


const AppComponent = connect(
    mapStates,
    mapActions
)(App)

export default AppComponent