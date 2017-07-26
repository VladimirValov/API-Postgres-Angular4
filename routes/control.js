const express = require('express');
const router = express.Router();
const { ControlDb } = require('../models/index');

router.get('/', function(req, res, next) {
    console.log(req.query);
    
    ControlDb.findAll(
    //     {
    //     where: {
    //         date: "2017-07-26"
    //     }
    // }
    ).then(result => {
        // let currentDate = new Date().setHours(0,0,0);
        // console.log(currentDate);
        // console.log(result);
        // console.log(Date.parse (result.dataValues.date));
        res.send(result)
    });

//    res.send("Control");
});  

router.post('/', function(req, res, next) {
    console.log(req.body);
    const {date, access} = req.body;

    // const date1 = new Date(date).setUTCHours(0, 0, 0);
    // const date2 = new Date(date).setUTCHours(23, 59, 59);

    const date1 = new Date(date).setHours(0, 0, 0);
    const date2 = new Date(date).setHours(23, 59, 59);

    console.log(date1, date2);

    ControlDb.create( {date1, date2, access} ).then(result => res.send(result));

});  


module.exports = router;

//  function getCalendar(days) {
//         let arr = [];
//         let curDay = new Date();

//         for (let i = 0; i < days; i++ ) { 
//             arr.push(new Date(curDay.setDate(curDay.getDate() + 1)));
//         }
//         return arr;
//     }