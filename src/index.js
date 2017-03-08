import React from 'react'
// import Backbone from 'backbone'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import HomeContainer from './components/home/Home'
import CanvasContainer from './components/canvas/CanvasContainer'
import LoginContainer from './components/login/Login'
import './index.css'

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path='home' component={HomeContainer} />
        <Route path='canvas' component={CanvasContainer} />
        <Route path='login' component={LoginContainer} />
    </Router>
), document.getElementById('root'))
