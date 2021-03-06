// routes/users.js

var express = require('express');
var router = express.Router();
var User = require('../models/User');

// index
router.route("/").get(function(req, res) {
	User.find({})
	.sort({username: 1})
	.exec(function(err, users) {
		if (err) return res.json(err);
		res.render('users/index', {users: users});
	});
});

// new
router.get('/new', function(req, res) {
	res.render('users/new', {user: {}});
});

// create
router.post('/', function(req, res) {
	User.create(req.body, function(err, user) {
		if (err) return res.json(err);
		res.redirect('/users');
	});
});

// show
router.get('/:username', function(req, res) {
	User.findOne({username: req.params.username}, function(err, user) {
		if (err) return res.json(err);
		res.render('users/show', {user: user});
	});
});

// edit
router.get('/:username/edit', function(req, res) {
	User.findOne({username: req.params.username}, function(err, user) {
		if (err) return res.json(err);
		res.render('users/edit', {user: user});
	});
});

// update
router.put('/:username', function(req, res) {
	User.findOne({username: req.params.username})
	.select('password')
	.exec(function(err, user) {
		if (err) return res.json(err);

		user.originalPassword = user.password;
		user.password = req.body.newPassword? req.body.newPassword : user.password;
		for (var p in req.body) {
			user[p] = req.body[p];	
		}

		user.save(function(err, user) {
			if (err) return res.json(err);
			res.redirect('/users/' + req.params.username);
		});
	});
});

module.exports = router;
