import React from 'react';
import Backbone from 'backbone'
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


var Controller = Backbone.Router.extend({
    routes: {
        'home': '_handleHome',
        'canvas': '_handleCanvas',
        'login': '_handleLogin',
        '*default': '_handleDefault'
    },

    _handleHome: function() {
        ReactDOM.render( <App />, document.getElementById('root')
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

var controller = new Controller()
