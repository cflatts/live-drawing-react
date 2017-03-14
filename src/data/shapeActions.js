import ShapeDispatcher from './shapeDispatcher'
import ShapeActionTypes from './shapeActionTypes'

const ACTIONS = {

  addShape (x, y) {
    ShapeDispatcher.dispatch({
      type: ShapeActionTypes.ADD_SHAPE,
      x,
      y
    })
  }

    // addDot: function(evt) {
    //     let myCanvas = evt.target
    //     let ctx = myCanvas.getContext('2d')
    //     let canvasLocation = myCanvas.getBoundingClientRect()
    //
    //     const x = evt.clientX - canvasLocation.left
    //     const y = evt.clientY - canvasLocation.top
    //     ctx.fillRect(x, y, 5, 5)
    // }
}

export default ACTIONS
