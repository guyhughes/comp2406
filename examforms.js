// examforms.js
// Anil Somayaji
// February 1, 2016
// For Carleton University, COMP 2406 2016W
//
// To install dependencies, run:
//    npm install express body-parser morgan jade
//

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var port = 3000;
var state = [];

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname);
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res, next) {
  res.render('index', { title: 'COMP 2406 Exam form demo' });
});

app.post('/add', function(req, res) {
    var obj = { name: req.body.name,
		city: req.body.city,
                country: req.body.country,
                birthday: req.body.birthday,
                email: req.body.email };
    state.push(obj);
    res.redirect('/list');
});

app.get('/list', function(req, res) {
    res.render('list', { title: 'People Listing',  items: state});
});

var serverUp = function() {
    console.log("ExamForms listening on port " + port);
}

var serverDown = function() {
    console.log("Server shutting down.");
    process.exit(0);
}

var server = http.createServer(app);
server.listen(port);
server.on('listening', serverUp);
process.on('SIGINT', serverDown);
