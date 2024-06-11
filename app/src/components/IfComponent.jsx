import React, { Component } from 'react'

class IfComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            login: true
        }
    }

    render() {
        return (
            <div>
                <h2>This is my IfComponent</h2>

                {this.state.login ? <h3>You are logged in</h3> : <h3>You are not logged in</h3>}
                
            </div>
        )
    }
}

export default IfComponent