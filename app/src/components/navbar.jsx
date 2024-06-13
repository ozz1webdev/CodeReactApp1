import React from 'react'

import NavbarForm from './navbarform'
import './css/navbar.css'

class Navbar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            status: false
        }
    }

    setStatusTrue = () => {
        this.setState({
            status: true
        })
    }

    setStatusFalse = () => {
        this.setState({
            status: false
        })
    }

    render() {
        return (
            <div>
                <NavbarForm
                    status = {this.state.status}
                    setStatusTrue={this.setStatusTrue}
                    setStatusFalse={this.setStatusFalse}
                />
            </div>
        )
    }
}

export default Navbar