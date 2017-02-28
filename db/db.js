var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/live-draw-react')

var db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', function() {
    console.log('successfully connected using mongoose')
})
