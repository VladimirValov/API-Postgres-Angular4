const jwt = require('jsonwebtoken')

const { jwtSecretKey } = require('../config/security');

module.exports = function (req, res, next) {
    let authorization = req.headers.authorization;

    if (!authorization) return res.status(401).send("Autorization header not found")

    authorization = (authorization) ? authorization.match(/Bearer (.*\..*\..*)/) : "";

    const token = ( Array.isArray(authorization) ) ? authorization[1] : ""
    // console.log(token);


    jwt.verify(token, jwtSecretKey, (err, decoded) => {
        // console.log(decoded);
        if(err) return res.status(401).send("Unknown Token");
        next();
    })
}