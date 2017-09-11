const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  var timeStamp = new Date().toString();
  var log = `${timeStamp}: ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if(err)
      console.log('Error writing to server.log');
  });
  next();
});

app.use((req, res, next) => {
  res.render('maintanance.hbs');  
});

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear(); 
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
 res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to the home page'
 }); 
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Bad Request'  
  }); 
});

app.listen(3000, () => {
  console.log('Server running on port 3000'); 
});
