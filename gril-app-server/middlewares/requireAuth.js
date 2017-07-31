const jwt = require('jsonwebtoken')

const { jwtSecret } = require('../config/security');

module.exports = function (req, res, next) {

      let token = req.headers.authorization;

    console.log(token);


    jwt.verify(token, jwtSecret, (err, decoded) => {
        console.log(decoded);

        if(err) return res.status(401).send("Unknown Token");

        next();
    })
}