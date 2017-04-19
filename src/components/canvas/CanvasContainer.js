import React, {Component} from 'react'
import './Canvas.css'
import CanvasView from './CanvasView'
import {Container} from 'flux/utils'
import ShapeStore from '../../data/shapeStore'
import ACTIONS from '../../data/shapeActions'

class CanvasContainer extends Component {

  static getStores () {
    return [ShapeStore]
  }

  static calculateState (prevState) {
    console.log(prevState)
    return {
      shapes: ShapeStore.getState(),
      addShape: ACTIONS.addShape
    }
  }

  render () {
    return (
      <CanvasView shapes={this.state.shapes} addShape={this.state.addShape} />
    )
  }
}

export default Container.create(CanvasContainer)
