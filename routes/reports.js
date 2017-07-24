const express = require('express');
const router = express.Router();

const { Answer } = require('../models/index');

const reportService = require('../services/reportService');


router.get('/summary', function(req, res, next) {
    const {from, to} = req.query;

    return reportService.getAvgReport(from, to).then(result => res.send(result)).catch(next);
});  



//Send All answers in DB
router.get('/detail', function(req, res, next) {    
    console.log('detail')
    let {from, to} = req.query;    
    console.log(from, to)
    Answer.findAll().then(answers => res.status(200).send(answers)).catch(next);

//    return reportService.getAnswers(from, to).then(answers => res.status(200).send(answers)).catch(next);
});

module.exports = router;