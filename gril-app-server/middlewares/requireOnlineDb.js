const { findRuleByDate } = require('../services/controlDbService');


module.exports = function(req, res, next) {

    findRuleByDate(new Date()).then( rule => {
        return (rule) ? next() : res.status(401).send("Database Closed");
    })
}