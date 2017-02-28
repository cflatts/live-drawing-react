import Backbone from 'backbone'
import $ from 'jquery'

var ShapeModel = Backbone.Model.extend({
    idAttribute: '_id'
})

var ShapeCollection = Backbone.Collection.extend({
    url: '/api/shapes',
    model: ShapeModel
})
