const express = require('express');
const router = express.Router();

const { Answer } = require('../models/index');

const reportService = require('../services/reportService');


router.get('/', function(req, res, next) {
    reportService.getAvgReport().then(result => res.send(result)).catch(next);
});  

module.exports = router;


// var DATA =  {
//     count: 255,
//     data: { 
//         society: 10,
//         lonely: 2,

//         drink: 3,
//         hash: 3,

//         feel: 10,
//         relation: 6,

//         economy: 5,

//         community: 6,
//         contribute: 6,

//         smoke: 7,
//         snus: 7,

//         sex: 8,
//         deny: 8
//     }
// }

