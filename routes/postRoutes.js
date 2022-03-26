const express = require('express');
// creating the router
const postRouter = express.Router();
const postController = require('../controllers/postController');

// new post
postRouter.get('/new_post', postController.get_new_post_form);

// publish new post
postRouter.post('/new_post', postController.publish_new_post);

// retrieve single post
postRouter.get('/read/:id', postController.get_single_post);

// updating a post
postRouter.get('/update_post/:id', postController.get_update_post_form);

// API for updating our post
postRouter.put('/update_post/:id', postController.update_single_post);

// API for deleting post
postRouter.delete('/delete_post/:id', postController.delete_single_post);

// exporting our postRouter
module.exports = { postRouter };
