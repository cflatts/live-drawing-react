import React, {Component} from 'react'
import NavBar from '../navBar'

class Home extends Component {
    render() {
        return (
            <div className = 'home'>
                <p>This is the home component</p>
                <NavBar />
                <HomeComponent />
            </div>
        )
    }
}

class HomeComponent extends Home {
    render() {
        return (
            <div className = 'homeComponent'>
                <h1>Welcome to Live Draw</h1>
                <h2>Paint along with other users!</h2>
            </div>
        )
    }
}

export default Home
