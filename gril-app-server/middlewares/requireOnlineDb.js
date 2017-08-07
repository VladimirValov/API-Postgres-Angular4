const { getStatusDB } = require('../services/controlDbService');


module.exports = function(req, res, next) {

    getStatusDB().then( rule => {
        return (rule) ? next() : res.status(401).send("Database Closed");
    })
}