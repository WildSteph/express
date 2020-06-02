const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, response) => {
  response.send('Bienvenue sur Express');
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});

app.get('/api/movies', (req, response) => {
    response.send('Récupération de tous les films');
  });

app.get('/api/movies/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id });
});

app.get('/api/employee', (req, res) => {
    res.status(404).send(`Impossible de récupérer l employé ${name} `);
    const { name } = req.query;
});
