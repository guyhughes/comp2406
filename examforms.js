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
var fs = require('fs')
var port = 3000;
if (process.env.PORT) port=process.env.PORT;
var state = [];

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname);
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res, next) {
  res.render('index', { title: 'COMP 2406 Exam form demo' });
});

app.get('/image.png',(q,r,n)=>{r.sendfile('./image.png')})
app.get('/style.css',(req,res,next) => {res.sendfile('./style.css')})

app.get('/delete',(q,r,n)=>{r.render('delete')});

app.post('/deleted',(req,res)=>{
  for(var i=0; i < state.length; ++i){
    if(Object.prototype.hasOwnProperty.call(state[i],'name')){
      delete state[i];
      res.render('deleted',{stat: "Success, you have deleted "+ req.body.name+ " and obliterated her/him from existence!"});
      return;
    }
  }
  res.render('deleted',{stat: "Io no comprendre. You asked me to delete "+req.body.name+" but s/he don't exist honey!"});
})

app.post('/add', function(req, res) {
    var obj = { name: req.body.name,
		city: req.body.city,
                country: req.body.country,
                birthday: req.body.birthday,
                email: req.body.email,
                phone: req.body.phone };
    state.push(obj);
    res.redirect('/list');
});

app.get('/list', function(req, res) {
    state.sort((a,b)=>{if (a.name > b. name) return 1; else if (a.name < b.name) return -1; else return 0;});
    res.render('list', { title: 'People Listing',  items: state});
});

var serverUp = function() {
    console.log("ExamForms listening on port " + port);
}

var serverDown = function() {
    console.log("Server shutting down.");
    fs.writeFileSync('state.json',JSON.stringify(state)); 
    process.exit(0);
}

var server = http.createServer(app);
server.listen(port);
server.on('listening', serverUp);
process.on('SIGINT', serverDown);
