const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 8001;

app.get('/words/10', (req, res) => {
  res.send(faker.random.words(10));
})

app.get('/words/30', (req, res) => {
	res.send(faker.random.words(30));
  })

app.get('/words/50', (req, res) => {
	res.send(faker.random.words(50));
  })

app.get('/words/100', (req, res) => {
	res.send(faker.random.words(100));
  })

app.get('/words/200', (req, res) => {
	res.send(faker.random.words(200));
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})