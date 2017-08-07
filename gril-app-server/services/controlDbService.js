
const { ControlDb } = require('../models/index');


function getStatusDB() {
    return findRuleByDate( new Date() ).then(rule => rule );
}

function addRule(date, access = true) {
    // const date1 = new Date(date).setUTCHours(0, 0, 0);
    // const date2 = new Date(date).setUTCHours(23, 59, 59);
    const date1 = new Date(date).setHours(0, 0, 0);
    const date2 = new Date(date).setHours(23, 59, 59);
    // console.log(date1, date2);

    return findRuleByDate(date).then(rule => (rule) ? rule.save() : ControlDb.create( {date1, date2, access} ) );
}


function deleteRule(date) {  
    return findRuleByDate( new Date(date) ).then(rule => (rule) ? rule.destroy() : "No rules for this date.")
}


function findRules(limit = 10) {
   return ControlDb.findAll({order: [['date1', 'DESC']], limit: limit});
}

function findRuleByDate(date) {

    return ControlDb.findOne({where: { 
        date1: { $lte: date },
        date2: { $gte: date } 
    }})
}


module.exports = {  addRule, deleteRule, findRules, getStatusDB }

