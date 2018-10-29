const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');  // body-parser = parsing middleware 

const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// bring in the database
const db = require('./config/keys').mongoURI;

// connect to database
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const users = require('./routes/api/users');

app.use('/api/users', users);

app.get('/', (req, res) => res.send('Hello'));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Application listening on port', port));
