import React, {Component} from 'react'
import ACTIONS from '../../data/shapeActions'
import $ from 'jquery'

class CanvasView extends Component {
  constructor (props) {
    super(props)
    this.color = this.props.color
  }

  _handleShapeAdd (evt) {
    evt.preventDefault()
    let myCanvas = evt.target
    let canvasLocation = myCanvas.getBoundingClientRect()

    const x = evt.clientX - canvasLocation.left
    const y = evt.clientY - canvasLocation.top
    const color = this.getColor()

    ACTIONS.addShape(x, y, color)
  }

  _renderShapes (shapesObj) {
    let shapesArr = shapesObj.shapes.toArray()
    shapesArr.forEach(function (shape) {
      let myCanvas = $('#myCanvas')[0]
      let ctx = myCanvas.getContext('2d')

      const x = shape.x
      const y = shape.y

      ctx.fillRect(x, y, 5, 5)
    })
  }

  _getColor (evt) {
    evt.preventDefault()
    let colorVal = evt.target.getAttribute('name')
    this.color = colorVal
    return colorVal
  }

  render () {
    console.log(this.color)
    return (
      <div className='drawingArea'>
        {this._renderShapes(this.props)}
        <div className='drawingColors' onClick={this._getColor}>
          <div className='color red' name='red' />
          <div className='color orange' name='orange' />
          <div className='color yellow' name='yellow' />
          <div className='color green' name='green' />
          <div className='color blue' name='blue' />
          <div className='color purple' name='purple' />
          <div className='color black' name='black' />
          <div className='color white' name='white' />
        </div>

        <div className='drawingShapes'>
          <div className='shape line' name='line'>Line</div>
          <div className='shape circle' name='circle'>Circ</div>
          <div className='shape rectangle' name='rectangle'>Rect</div>
          <div className='shape triangle' name='triangle'>Tri</div>
          <div className='shape dot' name='dot'>Dot</div>
          <div className='shape freestyle' name='freestyle'>Free</div>
          <div className='shape erase' name='erase'>Erase</div>
        </div>

        <canvas id='myCanvas' width='1200' height='600' onClick={this._handleShapeAdd} />
      </div>
    )
  }
}

export default CanvasView
