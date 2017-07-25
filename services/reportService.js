const { sequelize } = require('../models/index');
const { Answer } = require('../models/index');

const fields = ["society", "lonely", "drink", "hash", "feel", "relation", "economy", "community", "contribute", "smoke", "snus", "sex", "deny"]


//Summary Report
function getAvgReport(from, to) {

    const avgFields = fields.map(field => `ROUND( AVG(${field}), 1 ) as ${field}`).join(",");

    const select = `SELECT COUNT(*) as "count", ${ avgFields } FROM "Answers"
                    where "createdAt" >= '${formatDate(from)}'
                    and   "createdAt" <= '${formatDate(to)}'`;

    return sequelize.query(select).then(result => result[0][0]);
}


//Detail Report
function getAnswers(from, to) {       
    return Answer.findAll({where: {createdAt: {$gte: formatDate(from), $lte: formatDate(to)} }})    
}


function formatDate(date) {    
    return new Date(date.replace(/"/g, "" )).toISOString();
}


module.exports = { getAvgReport, getAnswers }

