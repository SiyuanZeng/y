// Post.js

var mongoose = require('mongoose');

var j= mongoose.Schema({
	s: {type: String, required: true},
	l: {type: Number,required: true}	,
	o: {type: Date, required: true}
});

var js = mongoose.model('k', j);

module.exports = js;
