// tasks.js

var express = require('express');
var Task = require('../models/Task');
var k = require('../models/k');

var router = express.Router();

var fs = require('fs');
fs.readFile('C:/Users/SiyuanZeng\'s/Downloads/mean-board-master/routes/s.txt', function (err, data) {
    if (err) {
        throw err;
    }
    console.log(data.toString());
});


// Index
router.get('/', function (req, res) {
    Task.find({}, function (err, tasks) {
        if (err) res.json(err);
        console.log(tasks);
        res.render('tasks/index', {tasks: getSeperatedTask(tasks)});
    });
});

// Create - Add Task
router.post('/', function (req, res) {
    Task.create(req.body, function (err, task) {
        if (err) res.json(err);
        // res.redirect('/tasks');
        // fs.readFile( 'C:/Users/SiyuanZeng\'s/Downloads/mean-board-master/routes/s.txt', function (err, data) {
        //     if (err) {
        //         throw err;
        //     }
        console.log(Object.prototype.toString.call(req.body));
        console.log(req.body.toString());
        // });
    });
});

// Update - Change task status
router.put('/:id', function (req, res) {
    Task.findOneAndUpdate({_id: req.params.id}, req.body, function (err, task) {
        if (err) res.json(err);
        res.redirect('/tasks');
    });
});






// Destory
router.delete('/:id', function (req, res) {


    // console.log("ajsdlfkjasdlkfj;");
    //
    // Task.findOne({_id: req.params.id}, function (err, character) {

        // console.log("FJSDKJFLADSJFLJ"); // { name: 'Frodo', inventory: { ringOfPower: 1 }}
    // console.writeLine();
    // console.writeLine();
    // console.writeLine();
    // console.writeLine();
    // console.writeLine();
    // console.writeLine();
    //     console.log(character); // { name: 'Frodo', inventory: { ringOfPower: 1 }}

    //    return character;
    // });


    // console.log("kljfla;ksjdflkasdfasdfasdf");


    // console.writeLine();
    // console.writeLine();
    // console.writeLine();
    //
    // /*

     // Find a single movie by name.
     Task.findOneAndUpdate({_id: req.params.id}, req.body, function(err, thor) {
     if (err) return console.error(err);
     console.dir(thor);

     var a = new k();
     a.s = thor.my_task;
     a.l = 1;
     a.o = new Date();

     /*

     var taskSchema = mongoose.Schema({
     s: {type: String, required: true},
     l: {type: Number,required: true}	,
     o: {type: Date, required: true}
     });



     */


     k.create(a, function(err, task) {
     if (err) res.json(err);
     // res.redirect('/tasks');
     // fs.readFile( 'C:/Users/SiyuanZeng\'s/Downloads/mean-board-master/routes/s.txt', function (err, data) {
     //     if (err) {
     //         throw err;
     //     }
     console.log(Object.prototype.toString.call(req.body));
     console.log(req.body.toString());
     // });
     });

     k.find({}, function(err, tasks) {
     if (err) res.json(err);
     console.log("delete tasks.................")
     console.log(tasks);
     // res.render('tasks/index', { tasks: getSeperatedTask(tasks) });
     });


     });
     // */

    console.log(req.params.id);
    // Task.remove({_id: req.params.id}, function (err, task) {
    //     if (err) res.json(err);
    //     console.log("DEELETE");
    //     console.log("flkajsdlkfjasld");
    //
    //
    //     console.log(task);
    //     console.log("flkajsdlkfjasld");
    //     res.redirect('/tasks');
    // });
});

module.exports = router;

function getSeperatedTask(tasks) {
    var obj = {
        todoTasks: [],
        inprogressTasks: [],
        doneTasks: []
    };


    tasks.forEach(function (task) {
        switch (task.status) {
            case "to-do":
                obj.todoTasks.push(task);
                break;
            case "in-progress":
                obj.inprogressTasks.push(task);
                break;
            case "done":
                obj.doneTasks.push(task);
                break;
        }
    });

    return obj;
}