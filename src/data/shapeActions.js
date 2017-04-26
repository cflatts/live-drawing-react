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
}

export default ACTIONS
