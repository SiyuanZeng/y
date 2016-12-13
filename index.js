// index.js

var express = require('express');
var ejs = require('ejs');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var Task = require('./models/Task.js');

// DB Connection
// var mongoLocal = "mongodb://localhost/test" 
 //mongoose.connect(mongoLocal);
//what the fuck is thies
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

var fs = require('fs');


fs.readFile( 'C:/Users/SiyuanZeng\'s/Downloads/mean-board-master/routes/s.txt', function (err, data) {
    if (err) {
        throw err;
    }
    // var a = JSON.parse(data.string);

    var obj = JSON.parse(data);
    var length = obj.employees.length;

    var ta= new Task();
    ta.status="to-do";
    ta.my_task="bbbbbbbbbbbbbbbbbbbbbbbbb";

    for (var i in obj.employees) {
        Task.create(ta, function(err, task) {
            // if (err) res.json(err);
        });
    }


    console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName);

    console.log(data.toString());
    // console.log(a);
});

