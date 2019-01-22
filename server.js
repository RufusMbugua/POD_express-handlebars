const express = require('express');
const app = express();
const exp = require('express-handlebars');
const path = require('path');

app.engine('handlebars', exp({defaultLayout: 'main', layoutsDir: path.join(__dirname + '/views/layouts')}));
app.set('view engine', 'handlebars');

//Routing
app.get('/', function(req, res, next) {
    res.render('home', { title: 'Property Owners Democracy' });
});

app.get('/about', function(req, res, next) {
    res.render('about', { title: 'About Us' });
});

app.get('/solutions', function(req, res, next) {
    res.render('solutions', { title: "What we do" });
});

app.get('/projects', function(req, res, next) {
    res.render('projects', { title: "What we've done" });
});

app.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Reach Us' });
});

app.get('/about', function(req, res, next) {
    res.render('about', { title: 'About Us' });
});

app.get('/login', function(req, res, next) {
    res.render('login', { title: 'SIGN IN' });
});

app.get('/register', function(req, res, next) {
    res.render('register', { title: 'SIGN UP' });
});

app.listen(3000, () =>{
    console.log('Server is starting at port ', 3000);
});