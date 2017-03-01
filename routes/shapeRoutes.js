let Router = require('express').Router
let apiRouter = Router()

let ShapeModel = require('./db/schema.js').Shape

//Return all the shapes

apiRouter.get('/shapes', function(req, res) {

})
