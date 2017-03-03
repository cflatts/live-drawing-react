import React, {Component} from 'react'
import NavBar from '../navBar'
import './Canvas.css'
import CanvasView from './CanvasView'
import {Container} from 'flux/utils'
import ShapeStore from '../../data/shapeStore'

class CanvasContainer extends Component {

    static getStores() {
        return [ShapeStore]
    }

    calculateState(prevState) {
        return {
            //clearly just a temporary fix
            prevState
        }
    }

    render() {
        return (
        <div className='canvasContainer'>
            <NavBar/>
            <CanvasView />
        </div>
        )
    }
}

export default Container.create(CanvasContainer)
