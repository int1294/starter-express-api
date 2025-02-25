const express = require('express');
const path = require('path');

const app = express()
app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });
app.listen(process.env.PORT || 3000)