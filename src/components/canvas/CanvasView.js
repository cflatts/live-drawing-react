import React, {Component} from 'react'
import ACTIONS from '../../data/shapeActions'
import $ from 'jquery'

class CanvasView extends Component {
  constructor (props) {
    super(props)
    console.log(this.props)
  }

  _handleShapeAdd (evt) {
    let myCanvas = evt.target
    let canvasLocation = myCanvas.getBoundingClientRect()

    const x = evt.clientX - canvasLocation.left
    const y = evt.clientY - canvasLocation.top
    ACTIONS.addShape(x, y)
  }

  _renderShapes (shapesObj) {
    if (shapesObj.shapes._root === undefined) {
      console.log('it is undefined')
    } else {
      let shapesArr = shapesObj.shapes._root.entries

      shapesArr.map(function (shape) {
        let myCanvas = $('#myCanvas')[0]
        let ctx = myCanvas.getContext('2d')

        const x = shape[1].x
        const y = shape[1].y

        ctx.fillRect(x, y, 5, 5)
      })
    }
  }

  render () {
    return (
      <div className='drawingArea'>
        {this._renderShapes(this.props)}
        <div className='drawingColors'>
          <div className='color red' name='red' />
          <div className='color orange' name='orange' />
          <div className='color yellow' name='yellow' />
          <div className='color green' name='green' />
          <div className='color blue' name='blue' />
          <div className='color purple' name='purple' />
        </div>

        <div className='drawingShapes'>
          <div className='shape line' name='line'>Line</div>
          <div className='shape circle' name='circle'>Circ</div>
          <div className='shape rectangle' name='rectangle'>Rect</div>
          <div className='shape triangle' name='triangle'>Tri</div>
          <div className='shape freestyle' name='freestyle'>Free</div>
          <div className='shape erase' name='erase'>Erase</div>
        </div>

        <canvas id='myCanvas' width='1200' height='600' onClick={this._handleShapeAdd} />
      </div>
    )
  }
}

export default CanvasView
