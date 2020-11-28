const express = require('express');
const apiRouter = require('./routes/index.js');

const app = express();
app.use(express.json());

app.use('/api/nca', apiRouter);

app.listen('5000', () => {
  console.log('Server started');
});
