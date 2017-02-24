import React, {Component} from 'react'

import NavBar from '../navBar'
import './Login.css'

class Login extends Component {
    render() {
        return (
            <div className = 'login'>
                <NavBar />
                <LoginComponent />
            </div>
        )
    }
}

class LoginComponent extends Login {
    render() {
        return (
            <div className = 'login'>
                <div className = 'signin'>
                    <h3>Sign Up</h3>
                    <div className = 'loginInputs'>
                        <input type = 'email' placeholder = 'email'/>
                        <input type = 'email' placeholder = 'confirm email'/>
                        <input type = 'password' placeholder = 'password'/>
                        <input type = 'password' placeholder = 'confirm password'/>
                        <input type = 'submit' name = 'signUpSubmit'/>
                    </div>
                </div>

                <div className = 'signin'>
                    <h3>Log In</h3>
                    <div className = 'loginInputs'>
                        <input type = 'email' placeholder = 'email'/>
                        <input type = 'password' placeholder = 'password'/>
                        <input type = 'submit' name = 'logInSubmit'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
