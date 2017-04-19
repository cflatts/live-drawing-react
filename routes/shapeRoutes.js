let Router = require('express').Router
let apiRouter = Router()

let ShapeModel = require('./db/schema.js').Shape

apiRouter.post('/shapes', function (req, res) {
    // req.body is the object parsed by body-parser passed into a new instance of a
    // mongoose model
  const shapeModel = new ShapeModel(req.body)
    // save the mongoose instance of model with a callback for errors
  shapeModel.save(function (err) {
        // if the error exists send the error back as the response
        // if there is no error sends the model back as a response in JSON form
    err ? res.send(err) : res.json(shapeModel)
  })
})
