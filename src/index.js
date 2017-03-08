import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'


import CanvasContainer from './components/canvas/CanvasContainer'
import LoginContainer from './components/login/Login'
import HomeContainer from './components/home.Home'
import App from './App'
import './index.css'

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <Route path='/canvas' component={CanvasContainer} />
            <Route path='/login' component={LoginContainer} />
        </Route>

    </Router>
), document.getElementById('root'))
