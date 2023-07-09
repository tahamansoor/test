const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'taha' },
    { id: 2, name: 'mansoor' },
  ];

  res.send(JSON.stringify(users));
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === id);
  if (!user) {
    res.status(404).send('User not found');
    return;
  }
  res.send(JSON.stringify(user));
});

app.post('/users', (req, res) => {
  const user = JSON.parse(req.body);
  users.push(user);
  res.status(201).send(JSON.stringify(user));
});

app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === id);
  if (!user) {
    res.status(404).send('User not found');
    return;
  }
  user = JSON.parse(req.body);
  res.status(200).send(JSON.stringify(user));
});

app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === id);
  if (!user) {
    res.status(404).send('User not found');
    return;
  }
  users.splice(users.indexOf(user), 1);
  res.status(204).send();
});
