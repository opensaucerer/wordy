const express = require('express');
const { Post } = require('../models/post');

const mainRouter = express.Router();

//   homepage
mainRouter.get('/', (req, res) => {
  Post.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      //   console.log(result);
      res.render('home', { posts: result });
    })
    .catch((error) => {
      console.log(error);
    });
});

// about route
mainRouter.get('/about', (req, res) => {
  res.status(404).render('about');
});

// 404 route
mainRouter.all('*', (req, res) => {
  res.status(404).render('404');
});

// exporting the mainRouter
module.exports = { mainRouter };
