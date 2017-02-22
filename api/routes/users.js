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
userRouter.get('users/:_id', function (req, res) {
    User.findById(req.params._id, function (err, user) {
        if (err) return (err);
        res.json(user);
    })
})

// register User
userRouter.post('/users/register', function (req, res) {
    User.create(req.body, function (err, post) {
        User.populate('_creator', '_id');
        if (err) {
            console.log(err)
            return res.status(500).send();
        }
        else if (!post) {
            return res.status(404).send();
        }
        return res.status(200).send();

    })
})

// login User
userRouter.post('/users/login', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({username: username, password: password}, function (err, user) {
        if (err) {
            console.log(err)
            return res.status(500).send();
        }
        else if (!user) {
            return res.status(404).send();
        }
        return res.status(200).send();
    })
})

module.exports = userRouter;