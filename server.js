const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
 res.send({
   name: 'Some Name',
   likes: [
     'Biking',
     'Cities'
   ]
 }); 
});

app.get('/about', (req, res) => {
  res.send('About Page'); 
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Bad Request'  
  }); 
});

app.listen(3000, () => {
  console.log('Server running on port 3000'); 
});
