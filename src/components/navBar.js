import React, {Component} from 'react'
import './navBar.css'

class NavBar extends Component {
    render() {
        return (
            <div className = 'navBar'>
                <h1>Hello, Caitlin</h1>
                <nav>
                    <a href = '#home'>Home</a>
                    <a href = '#canvas'>Drawing Canvas</a>
                    <a href = '#login'>Login/SignIn</a>
                </nav>
            </div>
        )
    }
}

export default NavBar
