import Immutable from 'immutable'
import {ReduceStore} from 'flux/utils'
import ShapeActionTypes from './shapeActionTypes'
import ShapeDispatcher from './shapeDispatcher'

class ShapeStore extends ReduceStore {
    constructor() {
        super(ShapeDispatcher)
    }

    getInitialState() {
        return Immutable.OrderedMap()
    }

    reduce(state, action) {
        switch (action.type)) {
            case ShapeActionTypes.ADD_SHAPE:
                return state
                break;
            default:
                return state
        }
    }
}
