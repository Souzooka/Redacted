/*jshint esversion:6*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const messageRoutes = require('./routes/message.js');

// parse application/x-www-form-urlencoded
// attach to req.body
app.use(bodyParser.urlencoded({extended: false}));

// Routes
app.use('/message', messageRoutes);

// Initialize server
const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);
});