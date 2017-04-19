import React, {Component} from 'react'
import './Canvas.css'
import CanvasView from './CanvasView'
import {Container} from 'flux/utils'
import ShapeStore from '../../data/shapeStore'

class CanvasContainer extends Component {

  static getStores () {
    return [ShapeStore]
  }

  static calculateState (prevState) {
    return {
      shapes: ShapeStore.getState()
    }
  }

  render () {
    return (
      <CanvasView shapes={this.state.shapes} />
    )
  }
}

export default Container.create(CanvasContainer)
