import Backbone from 'backbone'
import $ from 'jquery'

export const ShapeModel = Backbone.Model.extend({
    urlRoot: '/api/shapes',
    idAttribute: '_id'
})

export const ShapeCollection = Backbone.Collection.extend({
    url: '/api/shapes',
    model: ShapeModel
})

export {ShapeModel, ShapeCollection}
