import React from "react";
import './css/navbar.css'

class NavbarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false
        }
    }

    handleClickLogin = () => {
        this.setState({
            status: 'false'
        })
        this.props.setStatusTrue();

    }

    handleClickLogout = () => {
        this.setState({
            status: true
        })
        this.props.setStatusFalse();

    }

    render () {
        return (
            <div>
                {this.props.status ?
                (
                    <div className="navbar">
                        <h1>My Galary</h1>
                        <form>
                            <label for="username">Username </label>
                            <input type="text" placeholder="Username" />
                            <label for="password">Password </label>
                            <input type="password" placeholder="Password" />
                        </form>
                        <button onClick={this.handleClickLogout}>Submit</button>
                    </div>
                ):(
                    <div className="navbar">
                        <h1>My Galary</h1>
                        <button onClick={this.handleClickLogin}>Login</button>
                    </div>
            )}
            </div>
        )
    }
}

export default NavbarForm