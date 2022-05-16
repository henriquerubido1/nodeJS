const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

/* Crie suas rotas aqui */

app.get('/ping', (_req, res) => res.json({ "message": "pong" }));

// HTTP response status codes indicate whether a specific HTTP request has
// been successfully completed. Responses are grouped in five classes:

// Informational responses (100–199)
// Successful responses (200–299)
// Redirection messages (300–399)
// Client error responses (400–499)
// Server error responses (500–599)

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ "message": `Hello, ${name}!` });
})

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (parseInt(age, 10) <= 17) {
    // não esqueça de adicionar o return para impedir de que seu código continue.
    return res.status(401).json({ message: `Unauthorized` });
  }

  return res.status(200).json({ message: `Hello, ${name}!` });
});

app.listen(3001, () => console.log('ouvindo na porta 3001!'));