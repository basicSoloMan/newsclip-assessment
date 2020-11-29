const express = require('express');
const apiRouter = require('./routes/index.js');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors({ origin: `http://localhost:3000` }));

app.use('/api/nca', apiRouter);

app.listen('5000', () => {
  console.log('Server started');
});
