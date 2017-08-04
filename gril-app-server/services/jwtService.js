const jwt = require('jsonwebtoken')

const { jwtSecretKey } = require('../config/security');

function verify (token) {
    console.log(token);

    jwt.verify(token, jwtSecret, (err, decoded) => { 
        console.log(decoded)
        return {err, decoded};
    });
}

function sign(user) {

    const { name, isAdmin } = user;

    return jwt.sign({name, isAdmin}, jwtSecretKey);
    // return jwt.sign({ name, isAdmin}, jwtSecretKey, { expiresIn: '1 day' });

}

module.exports = { verify, sign };