const { sequelize } = require('../models/index');

const fields = ["society", "lonely", "drink", "hash", "feel", "relation", "economy", "community", "contribute", "smoke", "snus", "sex", "deny"]


function getAvgReport() {

    let avgFields = fields.map(field => `ROUND( AVG(${field}), 1 ) as ${field}`).join(",");

    const select = `SELECT COUNT(*) as "count" , ${ avgFields } FROM "Answers"`

    return sequelize.query(select).then(result => {
        console.log(result[0]);
        return result[0][0];
    })
}



module.exports = { getAvgReport }

