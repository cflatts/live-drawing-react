import React, {Component} from 'react'
import NavBar from '../navBar'

class Home extends Component{
    render() {
        return (
            <div className = 'home'>
                <p>This is the home component</p>
                <NavBar />
            </div>
        )
    }
}

export default Home
