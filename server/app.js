const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes/index');
const config = require('./config/keys');

mongoose.Promise = global.Promise;
mongoose
    .connect(config.MONGO_URI)
    .then(() => console.log("MongoDB Connected..."))
    .catch(error => console.log(error));

const app = express();

app.use(bodyParser.json({ type: "*/*" }));
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

// Routes
//app.use('/users', require('./routes/users'));

module.exports = app;