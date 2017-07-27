const express = require('express');
const router = express.Router();

const reportService = require('../services/reportService');


router.get('/summary', function(req, res, next) {
    const {from, to} = req.query;

    return reportService.getAvgReport(from, to).then(result => res.send(result)).catch(err => next(err));
});  


router.get('/detail', function(req, res, next) {    
    const {from, to} = req.query;   

   return reportService.getAnswers(from, to).then(answers => res.send(answers)).catch(err => next(err));
});

module.exports = router;