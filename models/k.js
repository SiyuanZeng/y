// Post.js

var mongoose = require('mongoose');

var l= mongoose.Schema({
	s: {type: String, required: true},
	l: {type: Number,required: true}	,
	o: {type: Date, required: true}
});

var k = mongoose.model('k', l);

module.exports = k;
