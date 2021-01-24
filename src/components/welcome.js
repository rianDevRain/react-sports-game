import React, { Component } from 'react'

class Welcome extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="welcome">
                <h1>Welcome To {props.name}</h1>
            </div>
        )
    }
}

export default Welcome;