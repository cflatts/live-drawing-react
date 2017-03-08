import React. {Component} from 'react'
import {Router, Route, Link} from 'react-router'

import HomeContainer from './components/home/Home'
import CanvasContainer from './components/canvas/CanvasContainer'
import LoginContainer from './components/login/Login'

class App extends Component {

    render() {
        return(
            <div className='appRouter'>
                <ul>
                    <li><Link to='home'>Home</Link></li>
                    <li><Link to='canvas'>Drawing Canvas</Link></li>
                    <li><Link to='login'>Login/SignIn</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
