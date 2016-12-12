// index.js

var express = require('express');
var ejs = require('ejs');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override'); 

// DB Connection
// var mongoLocal = "mongodb://localhost/test" 
 //mongoose.connect(mongoLocal);

var mongoLabURI = process.env.MONGOLAB_URI || 'mongodb://localhost/test';


mongoose.connect(mongoLabURI);

var db = mongoose.connection;

db.on('error', function(err) {
	console.log('DB Error: ', err);
});
db.once('open', function() {
	console.log('DB Connected !!');
});

var app = express();

// Web Server Settings
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(methodOverride('_method'));

// Routes
app.use('/', require('./routes/home'));
app.use('/posts', require('./routes/posts'));
app.use('/tasks', require('./routes/tasks'));
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log('Server running at port ', port);
});