import React, {Component} from 'react'
import NavBar from '../navBar'

class Canvas extends Component {
    render() {
        return (
            <div className='canvas'>
                <NavBar />
                <CanvasComponent />
            </div>
        )
    }
}

class CanvasComponent extends Canvas {
    render() {
        return (
            <div className='drawingArea'>
                <div className ='drawingColors'>
                    <div className='color red' name='red'></div>
                    <div className='color orange' name='orange'></div>
                    <div className='color yellow' name='yellow'></div>
                    <div className='color green' name='green'></div>
                    <div className='color blue' name='blue'></div>
                    <div className='color purple' name='purple'></div>
                </div>
            </div>
        )
    }
}

export default Canvas
