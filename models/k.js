// Post.js

var mongoose = require('mongoose');

var l= mongoose.Schema({
    lastName: {type: String, required: true},
	// l: {type: Number,required: true},
	o: {type: Date, required: true},
	d: {type: String, required: true}
});

var k = mongoose.model('k', l);

module.exports = k;
