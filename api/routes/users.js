var express = require('express');
var app = express;
var userRouter = app.Router();

var User = require('../models/User');

// get Users
userRouter.get('/users', function (req, res) {
    User.find(function (err, user) {
        console.log('Successfully got users');
        res.json(user);
    })

})
// get User with blogs
userRouter.get('/users/:userId', function (req, res) {
    User.findOne({_id: req.params.userId}, function (err, user) {
      User.populate(user, {path: "_creator"}, function (err, user) {
        if (err) {
          console.log('ERROR - ' + err)
        }
        console.log('Successfully got user');
        res.json(user);
      })
    })
})

// register User
userRouter.post('/users/register', function (req, res) {
    User.create(req.body, function (err, user) {
      User.populate(user, {path: "_creator"}, function (err, user) {
        if (err) {
          console.log('ERROR - ' + err);
          return res.status(500).send();
        }
        else if (!user) {
          console.log('Cannot register User');
          return res.status(404).send();
        }
        console.log('Successfully registered new user');
        return res.status(200).send();
      })
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
        console.log('Successfully logged in!');
        return res.json(user);
    })
})
module.exports = userRouter;
