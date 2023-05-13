const express = require('express');
const { userRouter, loginRouter } = require('./Routes');

const app = express();
app.use(express.json());

app.get('/', (_request, response) => {
  response.send('Funcionando');
});

app.use(userRouter);
app.use(loginRouter);

module.exports = app;
