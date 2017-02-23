var express = require('express');
var app = express;
var blogRouter = app.Router();

var Blog = require('../models/Blog')

// get Blogs
blogRouter.get('/blogs', function (req, res) {
    Blog.find( function (err, blogs) {
      if (err) {
        console.log('ERROR - ' + err)
      }
      console.log('Successfully got blogs')
      res.json(blogs);
    })
})

// get Blog
blogRouter.get('/blogs/:blogId', function (req, res) {
    Blog.find({_id: req.params.blogId}, function (err, blogs) {
        if (err) {
          console.log('ERROR - ' + err)
        }
        console.log('Successfully got blog')
        res.json(blogs)
    })
})

// create Blog Post
blogRouter.post('/blogs/create', function (req, res) {
    Blog.create(req.body, function (err, blog) {
      if (err) {
        console.log('ERROR - ' + err)
        return res.status(500).send();
      }
      else if (!blog) {
        console.log('Cannot post blog')
        return res.status(404).send();
      }
      console.log('Successfully posted new blog')
      return res.status(200).send();
    })
})

module.exports = blogRouter;
