import React, {Component} from 'react'
import {Router, Route, Link} from 'react-router'

import HomeContainer from './components/home/Home'
import CanvasContainer from './components/canvas/CanvasContainer'
import LoginContainer from './components/login/Login'

class App extends Component {

    render() {
        return(
            <div className='appRouter'>
                <Link to='home'>Home</Link>
                <Link to='canvas'>Drawing Canvas</Link>
                <Link to='login'>Login/SignIn</Link>
            </div>
        )
    }
}

export default App
