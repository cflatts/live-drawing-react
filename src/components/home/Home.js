import React, {Component} from 'react'

// import NavBar from '../navBar'
import './Home.css'

class HomeContainer extends Component {
    render() {
        return (
            <div className='home'>
                
                <HomeView />
            </div>
        )
    }
}

class HomeView extends HomeContainer {
    render() {
        return (
            <div className='homeComponent'>
                <h1>Welcome to Live Draw</h1>
                <h2>Paint along with other users!</h2>
            </div>
        )
    }
}

export default HomeContainer
