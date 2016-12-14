// Post.js

var mongoose = require('mongoose');

var taskSchema = mongoose.Schema({
	s: {type: String, required: true},
	l: {type: Number,required: true}	,
	o: {type: Date, required: true}
});

var k = mongoose.model('k', taskSchema);

module.exports = k;
