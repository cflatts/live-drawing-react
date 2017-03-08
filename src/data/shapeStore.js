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
        switch (action.type) {
            case ShapeActionTypes.ADD_SHAPE:
            //will add the code telling me to add the shapes
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
