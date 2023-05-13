const express = require('express');
const { loginController, userController } = require('./controllers');
const { loginValidation } = require('./middlewares/loginValidation');
const { userPostValidation, userEmailValidation } = require('./middlewares/userPostValidation');

// ...

const app = express();
app.use(express.json());

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send('Funcionando');
});

app.post('/login', loginValidation, loginController.login);
app.post('/user', userPostValidation, userEmailValidation, userController.createNewUser);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
