import ShapeDispatcher from './shapeDispatcher'
import ShapeActionTypes from './shapeActionTypes'

const ACTIONS = {

  addShape () {
    ShapeDispatcher.dispatch({
      type: ShapeActionTypes.ADD_SHAPE
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
