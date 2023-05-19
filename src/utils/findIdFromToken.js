const jwt = require('jsonwebtoken');

const findIdFromToken = async (token) => {
    const decoder = jwt.decode(token, { complete: true });
    return decoder;
};

module.exports = findIdFromToken;