const express = require('express');

var app = express();

app.get('/', (req, res) => {
 res.send('<h1>Testing if express app is working</h1>'); 
});

app.listen(3000);
