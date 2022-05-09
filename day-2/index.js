const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(4000, () => {
  console.log('PORT 4000');
});
