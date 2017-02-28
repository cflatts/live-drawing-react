var express = require('express')
var app = express()

//Static files served out of build file
app.use(express.static('build'))

//Production server listening on port 3001
app.listen(3001, function() {
    console.log('App is listening on port 3001')
})
