import React, {Component} from 'react'
import './Canvas.css'
import CanvasView from './CanvasView'
import {Container} from 'flux/utils'
import ShapeStore from '../../data/shapeStore'

class CanvasContainer extends Component {

    static getStores() {
        return [ShapeStore]
    }

    static calculateState(prevState) {
        return {
            //clearly just a temporary fix
            prevState
        }
    }

    render() {
        return (
        <div className='canvasContainer'>
            <CanvasView />
        </div>
        )
    }
}

export default Container.create(CanvasContainer)
