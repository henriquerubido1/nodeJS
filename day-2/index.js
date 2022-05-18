// Body-parser is the Node.js body parsing middleware. It is responsible
// for parsing the incoming request bodies in a middleware before you handle it.

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Express' app.get() function lets you define a route handler for GET requests to
// a given URL. For example, the below code registers a route handler that Express
// will call when it receives an HTTP GET request to / .

app.get('/', (req, res) => {
  res.send('hello world')
});

// The app.use() function is used to mount the specified middleware
// function(s) at the path which is being specified. It is mostly
// used to set up middleware for your application.

app.use(bodyParser.json());

app.listen(4000, () => {
  console.log('PORT 4000');
});
