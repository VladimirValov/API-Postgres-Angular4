const express = require('express');
const router = express.Router();
const { ControlDb } = require('../models/index');

router.get('/', function(req, res, next) {
    ControlDb.findAll().then(result => {res.send(result)});
});  



router.post('/', function(req, res, next) {
    // console.log(req.body);
    const {date, access} = req.body;

    // const date1 = new Date(date).setUTCHours(0, 0, 0);
    // const date2 = new Date(date).setUTCHours(23, 59, 59);
    const date1 = new Date(date).setHours(0, 0, 0);
    const date2 = new Date(date).setHours(23, 59, 59);
    // console.log(date1, date2);

    ControlDb.create( {date1, date2, access} ).then(result => res.send(result));
});  


router.delete('/', function(req, res, next) {
    console.log(req.body);
    // console.log(req);
    console.log(req.params);
    console.log(req.query);
    

    const {date, access} = req.body;

    ControlDb.findOne({where: { date1: { $lte: date }, date2: { $gte: date } }}).then(rule => {
        // console.log(rule);
        return (rule)   ? rule.destroy().then(result => res.status(204).send(result)).catch(err => next(err)) 
                        : res.send("No rules for this date.")
    } )
 });



module.exports = router;
