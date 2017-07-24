const { sequelize } = require('../models/index');
const { Answer } = require('../models/index');

const fields = ["society", "lonely", "drink", "hash", "feel", "relation", "economy", "community", "contribute", "smoke", "snus", "sex", "deny"]


function getAvgReport(from, to) {

    const avgFields = fields.map(field => `ROUND( AVG(${field}), 1 ) as ${field}`).join(",");

    const select = `SELECT COUNT(*) as "count", ${ avgFields } FROM "Answers"
                    where "createdAt" >= ${from.replace(/"/g, "'")}
                    and "createdAt" <= ${to.replace(/"/g, "'")}`;

    return sequelize.query(select).then(result => {
        // console.log(result[0]);
        return result[0][0];
    })
}

function getAnswers(from, to) {
    consolt.log(from, to);
    
    
    return Answer.findAll({ where: {
        createdAt:{
            $gte: from,
            $lte: to
        }
    }})
}



module.exports = { getAvgReport, getAnswers }

