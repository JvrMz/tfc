
const jwt = require('jsonwebtoken');

async function authUser (req, res, next) {

    const { 'x-access-token': token } = req.headers;

    if (!token) {
        return next(new Error('No autenticado.'));
    }

    let infoUser;
    try {
        infoUser = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return next(new Error('Token inválido'));
    }

    req.user = infoUser;

    next();

}

module.exports = authUser;
