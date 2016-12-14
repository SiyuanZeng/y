// tasks.js

var express = require('express');
var Task = require('../models/k.js');
var k = require('../models/k');
// all the variable and finction are just connector and it conect somne thing to anotherthing thand that is all you don't have to do that it doesn' mean anything
// it just mean that it is soging one place to another
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




        // console.log("ajsdlfkjasdlkfj;");
        //
        // Task.findOne({_id: req.params.id}, function (err, thor) {

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
            // Task.findOneAndUpdate({_id: req.params.id}, req.body, function(err, thor) {
            if (err) return console.error(err);
            console.dir(task);

            var a = new k();
            a.s = task.my_task;
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
                // console.log(Object.prototype.toString.call(req.body));
                // console.log(req.body.toString());
                // });
                console.log(task);
            });

            k.find({}, function(err, tasks) {
                if (err) res.json(err);
                console.log("delete tasks.................")
                console.log(tasks);
                // res.render('tasks/index', { tasks: getSeperatedTask(tasks) });
            });


        // });
        // */

        // console.log(req.params.id);
        // doAdelay();



        res.redirect('/tasks');
    });
});






// Destory
router.delete('/:id', function (req, res) {

    Task.remove({_id: req.params.id}, function (err, task) {
        if (err) res.json(err);
        console.log("DEELETE");
        console.log("flkajsdlkfjasld");


        console.log(task);
        console.log("flkajsdlkfjasld");
        res.redirect('/tasks');
    });
});

module.exports = router;
function doAdelay()
{
    setTimeout(function(){return true;},3000);

}


/*
 the name doesn't mean anything it isjust a symbol to represent something you just need to map it and return tit to front and that is t all


 */
function getSeperatedTask(tasks) {
    var obj = {
        todoTasks: [],
        inprogressTasks: [],
        doneTasks: [],
        o: [],
        j: []
    };


    tasks.forEach(function (task) {
        switch (task.d) {
            case "a":
                // Create date from input value
                var inputDate = task.o;

// Get today's date
                var todaysDate = new Date();

// call setHours to take the time out of the comparison
                if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
                    // Date equals today's date
                obj.todoTasks.push(task);
                }



                var inputDate = task.o;

// Get today's date
                var todaysDate = new Date();
                todaysDate .setDate(todaysDate .getDate() - 1);

// call setHours to take the time out of the comparison
                if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
                    // Date equals today's date
                    obj.todoTasks.push(task);
                }




                var inputDate = task.o;

// Get today's date
                var todaysDate = new Date();
                todaysDate .setDate(todaysDate .getDate() - 2);

// call setHours to take the time out of the comparison
                if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
                    // Date equals today's date
                    obj.todoTasks.push(task);
                }
                break;
            // case "d":
            //     obj.d.push(task);
            //     break;
            case "s":
                // Create date from input value
                var inputDate = task.o;

// Get today's date
                var todaysDate = new Date();

// call setHours to take the time out of the comparison
                if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
                    // Date equals today's date
                    obj.inprogressTasks.push(task);
                }


                var inputDate = task.o;

// Get today's date
                var todaysDate = new Date();
                todaysDate .setDate(todaysDate .getDate() - 1);

// call setHours to take the time out of the comparison
                if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
                    // Date equals today's date
                    obj.inprogressTasks.push(task);
                }




                var inputDate = task.o;

// Get today's date
                var todaysDate = new Date();
                todaysDate .setDate(todaysDate .getDate() - 2);

// call setHours to take the time out of the comparison
                if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
                    // Date equals today's date
                    obj.inprogressTasks.push(task);
                }



                break;
            case "d":
                // Create date from input value
                var inputDate = task.o;

// Get today's date
                var todaysDate = new Date();

// call setHours to take the time out of the comparison
                if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
                    // Date equals today's date
                    obj.doneTasks.push(task);
                }



                var inputDate = task.o;

// Get today's date
                var todaysDate = new Date();
                todaysDate .setDate(todaysDate .getDate() - 1);

// call setHours to take the time out of the comparison
                if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
                    // Date equals today's date
                    obj.doneTasks.push(task);
                }




                var inputDate = task.o;

// Get today's date
                var todaysDate = new Date();
                todaysDate .setDate(todaysDate .getDate() - 2);

// call setHours to take the time out of the comparison
                if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
                    // Date equals today's date
                    obj.doneTasks.push(task);
                }



                break;            case "o":
            // Create date from input value
            var inputDate = task.o;

// Get today's date
            var todaysDate = new Date();

// call setHours to take the time out of the comparison
            if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
                // Date equals today's date
                obj.o.push(task);
            }



            var inputDate = task.o;

// Get today's date
            var todaysDate = new Date();
            todaysDate .setDate(todaysDate .getDate() - 1);

// call setHours to take the time out of the comparison
            if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
                // Date equals today's date
                obj.o.push(task);
            }




            var inputDate = task.o;

// Get today's date
            var todaysDate = new Date();
            todaysDate .setDate(todaysDate .getDate() - 2);

// call setHours to take the time out of the comparison
            if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
                // Date equals today's date
                obj.o.push(task);
            }



            break;            case "k":
            // Create date from input value
            var inputDate = task.o;

// Get today's date
            var todaysDate = new Date();

// call setHours to take the time out of the comparison
            if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
                // Date equals today's date
                obj.j.push(task);
            }


            var inputDate = task.o;

// Get today's date
            var todaysDate = new Date();
            todaysDate .setDate(todaysDate .getDate() - 1);

// call setHours to take the time out of the comparison
            if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
                // Date equals today's date
                obj.j.push(task);
            }




            var inputDate = task.o;

// Get today's date
            var todaysDate = new Date();
            todaysDate .setDate(todaysDate .getDate() - 2);

// call setHours to take the time out of the comparison
            if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
                // Date equals today's date
                obj.j.push(task);
            }

            break;
        }
    });

    return obj;
}
/*


{
    "employees":[
    {
        d:"a",
        "lastName":"asfasdf"
    },
    {
        d:"d",
        "lastName":"kjhasldkfh"
    },
    {
        d:"s",
        "lastName":"ajflasjdlfj"
    },
    {
        d:"k",
        "lastName":"Dosfnaksdfle"
    },
    {
        d:"o",
        "lastName":"Dasdfiugbkoe"
    },
]
}*/
