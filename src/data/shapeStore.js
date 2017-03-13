import Immutable from 'immutable'
import {ReduceStore} from 'flux/utils'
import ShapeActionTypes from './shapeActionTypes'
import ShapeDispatcher from './shapeDispatcher'
import Counter from './counter'
import Shape from './shape'

class ShapeStore extends ReduceStore {
  constructor () {
    super(ShapeDispatcher)

    this.state = Immutable.Map()
  }

  reduce (state, action) {
    switch (action.type) {
      case ShapeActionTypes.ADD_SHAPE:

      // nothing happens if x and y don't exist
        if (!action.x && !action.y) {
          return state
        }
        const id = Counter.increment()
        state.set(id, new Shape({
          id,
          x: action.x,
          y: action.y
        }))
          // will add the code telling me to add the shapes
          //     let myCanvas = evt.target
          //     let ctx = myCanvas.getContext('2d')
          //     let canvasLocation = myCanvas.getBoundingClientRect()
          //
          //     const x = evt.clientX - canvasLocation.left
          //     const y = evt.clientY - canvasLocation.top
          //     ctx.fillRect(x, y, 5, 5)

        return state
              // break;
      default:
        return state
    }
  }

}

export default new ShapeStore()
