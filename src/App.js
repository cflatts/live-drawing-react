import React, {Component} from 'react'
import {Link} from 'react-router'

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

export default App
