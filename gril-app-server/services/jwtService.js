const jwt = require('jsonwebtoken')

const { jwtSecret } = require('../config/security');

function verify (token) {
    console.log(token);

    jwt.verify(token, jwtSecret, (err, decoded) => { 
        console.log(decoded)
        return {err, decoded};
    });
}

function sign(user) {

    const payload = { name, password } = user;

    console.log('payload', payload);

    return jwt.sign(payload, jwtSecret)

}

module.exports = { verify, sign };