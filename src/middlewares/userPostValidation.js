const { User } = require('../models');

const userPostValidation = (req, res, next) => {
    const { displayName, email, password } = req.body;
    const padrao = /^[\w.-]+@[\w.-]+\.\w+$/;
    if (displayName.length < 8) {
        return res.status(400).json({
            message: '"displayName" length must be at least 8 characters long',
          });
    }
    if (!padrao.test(email)) {
        return res.status(400).json({
            message: '"email" must be a valid email',
          });
    }
    if (password.length < 6) {
        return res.status(400).json({
            message: '"password" length must be at least 6 characters long',
          });
    }
         next(); 
};

const userEmailValidation = async (req, res, next) => {
    const { email } = req.body;
 
    const isEmailRegistered = await User.findOne({ where: { email } });
    if (isEmailRegistered) {
        return res.status(409).json({
            message: 'User already registered',
          });
    }
         next(); 
};

module.exports = {
    userPostValidation,
    userEmailValidation,

};