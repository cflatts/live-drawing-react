import React, {Component} from 'react'
import {Link} from 'react-router'

import './App.css'

class App extends Component {
    render() {
        return(
            <div className='appRouter'>
                <div className='navBar'>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='canvas'>Drawing Canvas</Link>
                    <Link className='link' to='login'>Login/SignIn</Link>
                </div>
                {this.props.children || (
                    <div className='homeComponent'>
                        <h1>Welcome to Live Draw</h1>
                        <h2>Paint along with other users!</h2>
                    </div>
                )}
            </div>
        )
    }
}

export default App
