import Backbone from 'backbone'
import $ from 'jquery'

export const ShapeModel = Backbone.Model.extend({
    idAttribute: '_id'
})

export const ShapeCollection = Backbone.Collection.extend({
    url: '/api/shapes',
    model: ShapeModel
})

export {ShapeModel, ShapeCollection}
