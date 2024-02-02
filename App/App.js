// app.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware para tratar o corpo das requisições como JSON
app.use(bodyParser.json());

// Array para armazenar as tarefas
const tasks = [];

// Endpoint para obter todas as tarefas (GET)
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Endpoint para adicionar uma nova tarefa (POST)
app.post('/tasks', (req, res) => {
  const { description } = req.body;

  if (!description) {
    return res.status(400).json({ error: 'A descrição da tarefa é obrigatória.' });
  }

  const newTask = {
    id: tasks.length + 1,
    description,
    completed: false,
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

require("./src/routes/endpoints")
