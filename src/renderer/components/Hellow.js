import React, { Component } from 'react'

class Hellow extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:'Electron for react'
        }

    }
    render() {
        return (
            <div
                className="welcome"
                style={{
                    textAlign:'center'
                }}
            >
                <h1>{this.state.title}</h1>
                <div className="logo">
                    <img height="100px"
                        src={
                            require('../assets/images/logo.png')
                        }
                    />
                </div>
                <p> node: {process.versions.node} </p>
                <p> chrome: {process.versions.chrome} </p>
                <p> electron: {process.versions.electron} </p>
            </div>
        )
    }
}

export default Hellow