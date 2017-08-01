const express = require('express');
const router = express.Router();

const cryptoService = require('../services/cryptoService');
const jwtService = require('../services/jwtService');

const { User } = require('../models/index');

router.post('/', function(req, res, next) {
    const { name, password } = req.body;

   User.findOne({where: { name: name }}).then(user => {

        if (user.password != cryptoService.encrypt(password)) throw new Error('Incorrect password');

        const token = jwtService.sign(user.dataValues);        
        res.send({token});
     })
})

module.exports = router