var express = require('express');
var app = express;
var userRouter = app.Router();

var User = require('../models/User')

// get Users
userRouter.get('/users', function (req, res) {
    User.find(function (err, user) {
        if (err) return (err);
        res.json(user);
    })
})
// get User
userRouter.get('/users/:_id', function (req, res) {
    User.findById(req.params._id, function (err, user) {
        if (err) return (err);
        res.json(user);
    })
})

// register User
userRouter.post('/register', function (req, res) {
    User.create(req.body, function (err, post) {
        if (err) return (err);
        res.json(post);
    })
})

module.exports = userRouter;