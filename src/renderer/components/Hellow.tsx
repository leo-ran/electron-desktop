import React, { Component, Props } from 'react'

export interface HellowProps {
    title: string;
}

class Hellow extends Component {
    public state: HellowProps;
    constructor(props: Props<any>) {
        super(props)
        this.state = {
            title: 'Electron for react'
        }

    }
    public render() {
        return (
            <div className="welcome" style={{
                textAlign: 'center'
            }}>
                <h1>{this.state.title}</h1>
                <div className="logo">
                    <img height="100px" src={require('../assets/images/logo.png')}/>
                </div>
                <p> node: {process.versions.node} </p>
                <p> node: {process.versions.chrome} </p>
                <p> node: {process.versions.electron} </p>
            </div>
        )
    }
}

export default Hellow
