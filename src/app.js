const express = require('express');
const { loginController } = require('./controllers');
const { loginValidation } = require('./middlewares/loginValidation');

// ...

const app = express();
app.use(express.json());

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send('Funcionando');
});

app.post('/login', loginValidation, loginController.login);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
