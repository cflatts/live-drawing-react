var express = require('express')
var app = express()
var bodyParser = require('body-parser')

//Static files served out of build file
app.use(express.static('build'))

//App middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

//Production server listening on port 3001
app.listen(3001, function() {
    console.log('App is listening on port 3001')
})
