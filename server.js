var express = require('express')
var app = express()


app.use(express.static('build'))

app.listen(3001, function() {
    console.log('App is listening on port 3001')
})
