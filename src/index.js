import React from 'react'
import Backbone from 'backbone'
import ReactDOM from 'react-dom'

import HomeContainer from './components/home/Home'
import CanvasContainer from './components/canvas/Canvas'
import LoginContainer from './components/login/Login'
import './index.css'

const app = function() {
    var Controller = Backbone.Router.extend({
        routes: {
            'home': '_handleHome',
            'canvas': '_handleCanvas',
            'login': '_handleLogin',
            '*default': '_handleDefault'
        },

        _handleHome: function() {
            ReactDOM.render( <HomeContainer />, document.getElementById('root'))
        },

        _handleCanvas: function() {
            ReactDOM.render(<CanvasContainer/>, document.getElementById('root'))
        },

        _handleLogin: function() {
            ReactDOM.render(<LoginContainer />, document.getElementById('root'))
        },

        _handleDefault: function() {
            location.hash = 'home'
        },

        initialize: function() {
            Backbone.history.start()
        }
    })
    new Controller()
}
app()
