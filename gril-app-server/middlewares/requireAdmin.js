const jwt = require('jsonwebtoken')

const { jwtSecretKey } = require('../config/security');

module.exports = function (req, res, next) {

      let token = req.headers.authorization;

    console.log(token);




    jwt.verify(token, jwtSecretKey, (err, decoded) => {
        console.log(decoded);

        // if(err) return res.status(401).send("Unknown Token");        

        next();
    })
}