var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');

app = express();

var userRoutes = require('./routes/userroutes');

app.use(express.json({ limit: '50mb' , extended: true}));

app.use(bodyParser.json({ limit: '50mb' , extended: true}))
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.use('/', userRoutes);

module.exports = app;