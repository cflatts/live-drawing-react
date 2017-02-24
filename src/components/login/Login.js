import React, {Component} from 'react'
import NavBar from '../navBar'

class Login extends Component {
    render() {
        return (
            <div className = 'login'>
                <p>This is the login component</p>
                <NavBar />
            </div>
        )
    }
}

export default Login
