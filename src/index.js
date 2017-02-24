import React from 'react'
import Backbone from 'backbone'
import ReactDOM from 'react-dom'
import Home from './components/home/Home'

const app = function() {
    var Controller = Backbone.Router.extend({
        routes: {
            'home': '_handleHome',
            'canvas': '_handleCanvas',
            'login': '_handleLogin',
            '*default': '_handleDefault'
        },

        _handleHome: function() {
            ReactDOM.render( <Home />, document.getElementById('root')
            )
        },

        _handleCanvas: function() {

        },

        _handleLogin: function() {

        },

        _handleDefault: function() {
            location.hash = 'home'
        },

        initialize: function() {
            Backbone.history.start()
        }
    })
    let controller = new Controller()
}
app()
