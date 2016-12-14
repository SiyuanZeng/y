// index.js

var express = require('express');
var ejs = require('ejs');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var Task = require('./models/k.js');

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

    if (data)
        return;
    var obj = JSON.parse(data);

    var length = obj.employees.length;

    for (var i in obj.employees) {

        var ta= new Task ();
        ta.d=obj.employees[i].d;
        ta.lastName=obj.employees[i].lastName;
        ta.o=new Date();


        Task .create(ta, function(err, task) {
            // if (err) res.json(err);
        });
    }

fs.writeFile('C:/Users/SiyuanZeng\'s/Downloads/mean-board-master/routes/s.txt', '', function(){console.log('done')})


    // console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName);

    // console.log(data.toString());
    // console.log(a);
});

// read file, i don't have to commit. read it and delete
// a  lot of time are swated in undersanding and to know which prot conect to which port
// load and show hrer and i can clearn it every now and then
// when to clean it , i don't want to do it myself
// i want o load only once
//     empty after load
// load to one thing and decide by type
//


// one schema
// write only
// read by type
// compare the date
// sort by date
// show 3
//
//







// i want to show one week
// 1. clean after u 7 days
// 2. i want to only show 3, next and previous
//
//