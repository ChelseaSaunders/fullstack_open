const express = require('express');
const app = express();

app.use(express.json());

let persons = [
  {
    "id": 1,
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": 2,
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": 3,
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": 4,
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
];

app.get('/api/persons', (request, response) => {
  response.json(persons);
});

app.get('/info', (request, response) => {
  let count = persons.length;
  let date = new Date();
  response.send(`<p>Phonebook has info for ${count} people</p><p>${date}`);
});

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find(person => person.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter(person => person.id !== id);

  response.status(204).end();
});

const postError = (body) => {
  if (!body.name) {
    return { error: "must include name" };
  } else if (!body.phone) {
    return { error: "must include phone number" };
  } else if (persons.filter(person => person.name === body.name).length > 0) {
    return { error: `${body.name} already in contacts` };
  }
};

app.post('/api/persons', (request, response) => {
  const body = request.body;
  const id = Math.floor(Math.random() * 1000);
  const person = {
    name: body.name,
    phone: body.phone,
    id: id
  };

  if (postError(body)) {
    console.log(postError(body));
    response.status(204).end();
  } else {
    persons = persons.concat(person);
    response.json(person);
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`port: ${PORT}`);
});