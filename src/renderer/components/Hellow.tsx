import React, { Component } from 'react'

export interface HellowProps {
    title: string;
}

interface PropTypes {
    test?: string;
}

class Hellow extends Component<PropTypes> {
    public state: HellowProps;
    constructor(props: Readonly<PropTypes>) {
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
