const express = require('express');
const router = express.Router();

const { ControlDb } = require('../models/index');

const controlDbService = require('../services/controlDbService');



router.get('/now', function(req, res, next) {
    const {date, access} = req.body;
    controlDbService.getStatusDB().then(result => res.send(result)).catch(err => next(err));
});  


router.get('/', function(req, res, next) {
   const { limit } = req.query

   console.log('TOKEN ', req.headers.authorization);

   controlDbService.findRules(limit).then(result => res.send(result)).catch(err => next(err))
});  

router.post('/', function(req, res, next) {
    const {date, access} = req.body;
    controlDbService.addRule(date, access).then(result => res.send(result)).catch(err => next(err));
});  


router.delete('/', function(req, res, next) {
    const { date } = req.query; 
    
    controlDbService.deleteRule(date) .then(result => res.status(204).send(result)).catch(err => next(err));  
 });

module.exports = router;
