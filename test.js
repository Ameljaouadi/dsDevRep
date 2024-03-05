const express = require('express');
const app = express();

app.use(express.json()); 

app.post('/api/data', (req, res) => {
  const postData = req.body; 
  res.status(200).json(postData); 
});

module.exports = app;
