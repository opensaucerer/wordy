const express = require('express');
const mongoose = require('mongoose');
const { mainRouter } = require('./routes/mainRoutes');
const { postRouter } = require('./routes/postRoutes');
const { Post } = require('./models/post');
const bodyParser = require('body-parser');

const app = express();

// setting the app defaults
app.set('view engine', 'ejs');

// setting up middlewares
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// connecting to the database
dbURI =
  'mongodb+srv://TestUser:testtest@samperfect.fn35f.mongodb.net/wordy?retryWrites=true&w=majority';
  
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(5000, () => {
      console.log('App is listening on port 5000...');
    });
  })
  .catch((error) => console.log(error));

// Everything related to created, reading, updating, and deleting, posts
app.use('/posts', postRouter);

// everything relating to home, about, and 404
app.use(mainRouter);
