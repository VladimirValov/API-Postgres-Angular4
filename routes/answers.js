var express = require('express');
var router = express.Router();

const { Answer } = require('../models/index.js');

//Save to DB
router.post('/', function(req, res, next) {
    // console.log("Autorization jwt-token: " + req.headers.authorization);
    const data = req.body;    
    const {err, params } = validateAnswer(data);

    if (err) return next(err);

    Answer.create(params).then(answer => res.status(201).send(answer) ).catch(next);
});

module.exports = router;



function validateAnswer(data) {
    let err = {};
    const params = {society, lonely, drink, hash, feel, relation, economy, community, contribute, smoke, snus, sex, deny} = data;   
    
    Object.keys(params).forEach(key => {
        let value = params[key];        
        if ( !( !isNaN(parseFloat(value)) && isFinite(value) ) )    err[key] = "Not a number";
        if ( value < 0 || value > 10 )                              err[key] = "Does not match the range [0..10]";             
    })

    err = Object.keys(err).length ? err : ""; 
        
    return {err, params}
}




