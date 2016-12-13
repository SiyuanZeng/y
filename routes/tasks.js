// tasks.js

var express = require('express');
var Task = require('../models/Task');

var router = express.Router();

var fs = require('fs');
fs.readFile( 'C:/Users/SiyuanZeng\'s/Downloads/mean-board-master/routes/s.txt', function (err, data) {
    if (err) {
        throw err;
    }
    console.log(data.toString());
});


// Index
router.get('/', function(req, res) {
	Task.find({}, function(err, tasks) {
		if (err) res.json(err);
		res.render('tasks/index', { tasks: getSeperatedTask(tasks) });
	});
});

// Create - Add Task
router.post('/', function(req, res) {
	Task.create(req.body, function(err, task) {
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
router.put('/:id', function(req, res) {	
	Task.findOneAndUpdate({_id: req.params.id}, req.body, function(err, task) {
		if (err) res.json(err);
		res.redirect('/tasks');
	});
});

// Destory
router.delete('/:id', function(req, res) {
	Task.remove({_id: req.params.id}, function(err, task) {
		if (err) res.json(err);
		res.redirect('/tasks');
	});
});

module.exports = router;

function getSeperatedTask(tasks) {
	var obj = {
		todoTasks: [],
		inprogressTasks: [],
		doneTasks: []
	};
	

	tasks.forEach(function(task) {
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