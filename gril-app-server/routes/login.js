const express = require('express');
const router = express.Router();

const jwtService = require('../services/jwtService');

router.post('/', function(req, res, next) {
    const { name, password } = req.body;

    console.log(name, password);

    console.log(jwtService);

    const token = jwtService.sign({name, password});

    res.send({token});

})

module.exports = router