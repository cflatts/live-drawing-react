import Immutable from 'immutable'
import {ReduceStore} from 'flux/utils'
import ShapeActionTypes from './shapeActionTypes'
import ShapeDispatcher from './shapeDispatcher'
import Counter from './counter'
import Shape from './shape'

window.Imm = Immutable

class ShapeStore extends ReduceStore {
  constructor () {
    super(ShapeDispatcher)
  }

  getInitialState () {
    // eventually this should be populated with shapes that have been saved, right now it returns a new immutable Map object
    return Immutable.Map()
  }

  reduce (state, action) {
    switch (action.type) {
      case ShapeActionTypes.ADD_SHAPE:
      // nothing happens if x and y don't exist
        if (!action.x && !action.y) {
          console.log('this is state with no x, y values', state)
          return state
        }
        const id = Counter.increment()
        const shape = new Shape({
          id,
          x: action.x,
          y: action.y
        })
        let newState = state.set(id, shape)
        return newState
        // break
      default:
        return state
    }
  }

}

export default new ShapeStore()
