const express = require('express');
const { userRouter, loginRouter, categoryRouter, postRouter } = require('./Routes');

const app = express();
app.use(express.json());

app.get('/', (_request, response) => {
  response.send('Funcionando');
});

app.use(userRouter);
app.use(loginRouter);
app.use(categoryRouter);
app.use(postRouter);

module.exports = app;
