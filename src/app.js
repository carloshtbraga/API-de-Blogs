const express = require('express');
const { userRouter, loginRouter, categoryRouter } = require('./Routes');

const app = express();
app.use(express.json());

app.get('/', (_request, response) => {
  response.send('Funcionando');
});

app.use(userRouter);
app.use(loginRouter);
app.use(categoryRouter);

module.exports = app;
