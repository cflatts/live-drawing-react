import React from 'react';
import Backbone from 'backbone'
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


const Controller = Backbone.Router.extend({
    routes: {
        'home': '_handleHome',
        'canvas': '_handleCanvas',
        'login': '_handleLogin',
        '*default': '_handleDeafulat'
    },
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
