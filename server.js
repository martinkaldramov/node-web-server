const express = require('express');
const handlebars = require('handlebars');

var app = express();

handlebars.registerPartial(__dirname + '/views/partials');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
 res.render('home.hbs', {
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'Welcome to the home page'
 }); 
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
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
