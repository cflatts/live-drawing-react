import React, {Component} from 'react'

import NavBar from '../navBar'
import './Canvas.css'

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
                <div className='drawingColors'>
                    <div className='color red' name='red'></div>
                    <div className='color orange' name='orange'></div>
                    <div className='color yellow' name='yellow'></div>
                    <div className='color green' name='green'></div>
                    <div className='color blue' name='blue'></div>
                    <div className='color purple' name='purple'></div>
                </div>

                <div className='drawingShapes'>
                    <div className='shape line' name='line'>Line</div>
                    <div className='shape circle' name='circle'>Circ</div>
                    <div className='shape rectangle' name='rectangle'>Rect</div>
                    <div className='shape triangle' name='triangle'>Tri</div>
                    <div className='shape freestyle' name='freestyle'>Free</div>
                    <div className='shape erase' name='erase'>Erase</div>
                </div>

                <canvas id='myCanvas' width='1200' height='600'></canvas>
            </div>
        )
    }
}

export default Canvas
