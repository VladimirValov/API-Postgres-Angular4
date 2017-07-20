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


//Send All answers in DB
router.get('/', function(req, res, next) {
    Answer.findAll().then(answers => res.status(200).send(answers)).catch(next);
});


module.exports = router;