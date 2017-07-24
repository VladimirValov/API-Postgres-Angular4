var express = require('express');
var router = express.Router();

const { Answer } = require('../models/index');
const {  validateAnswer } = require('../services/validateService');

//Save to DB
router.post('/', function(req, res, next) {
    // console.log("Autorization jwt-token: " + req.headers.authorization);
    const data = req.body;    
    const {err, params } = validateAnswer(data);

    if (err) return next(err);

    Answer.create(params).then(answer => res.status(201).send(answer) ).catch(next);
});


module.exports = router;