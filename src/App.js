import React, {Component} from 'react'
import {Link} from 'react-router'

import './App.css'

class App extends Component {

    render() {
        return(
            <div className='appRouter'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='canvas'>Drawing Canvas</Link></li>
                    <li><Link to='login'>Login/SignIn</Link></li>
                </ul>
                <div className='homeComponent'>
                    <h1>Welcome to Live Draw</h1>
                    <h2>Paint along with other users!</h2>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default App
