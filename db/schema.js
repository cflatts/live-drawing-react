const mongoose = require('mongoose')
const createModel = mongoose.model.bind(mongoose)
const Schema = mongoose.Schema

const shapeSchema = new Schema({
    x: {type: Number, required: true},
    y: {type: Number, required: true}
})

module.exports {
    Shape: createModel('Shape', shapeSchema)
}
