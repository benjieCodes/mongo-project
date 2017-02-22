var express = require('express');
var app = express;
var blogRouter = app.Router();

var Blog = require('../models/Blog')

// get Blogs
blogRouter.get('/blogs', function (req, res) {
    Blog.find( function (err, blog) {
        if (err) throw (err)
        res.json(blog)
    })
})

// get Blogs from User
blogRouter.get('/blogs/:_id', function (req, res) {
    Blog.find({user: req.params._id}, function (err) {
        if (err) throw (err)
        Blog.populate('Blog', {path: 'User'}, function (err, blog) {
            if (err) throw err
            res.json(blog)
        })
    })
})

// create Blog Post
blogRouter.post('/blogs/create', function (req, res) {
    Blog.create(req.body, function (err, post) {
        if (err) return err;
        res.json(post);
    })
})

module.exports = blogRouter;