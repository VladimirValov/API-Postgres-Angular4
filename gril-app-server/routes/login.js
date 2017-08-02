const express = require('express');
const router = express.Router();

const cryptoService = require('../services/cryptoService');
const jwtService = require('../services/jwtService');

const { User } = require('../models/index');

router.post('/', function(req, res, next) {
    const { name, password } = req.body;

    User.findOne({where: { name: name }}).then(user => {

        
        // if (!user) throw new Error ('Unknow User');
        if (!user) return res.status(401).send ('Unknow User');
        
        if (!user.isAdmin) {
            // return res.status(401).send ('User not Admin')
        };

        // if (user.password != cryptoService.encrypt(password)) throw new Error('Incorrect password');
        if (user.password != cryptoService.encrypt(password)) return res.status(401).send('Incorrect password');

        const token = jwtService.sign(user.dataValues);        

        console.log(token);

        res.send({
            isAdmin: user.isAdmin,
            token
        });
    }).catch(next);
})

module.exports = router