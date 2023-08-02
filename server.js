var express = require('express');
var app = express();

app.use(express.static('/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

app.set('views', __dirname + "/views")

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

// contact page
app.get('/contact', function(req, res) {
  res.render('pages/contact');
});

app.listen(3000);
console.log('Server is listening on port http://localhost:3000/');