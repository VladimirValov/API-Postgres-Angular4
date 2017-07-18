const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(DATA);
});

module.exports = router;

var answers = {
  lonely: [1, 2],
  drugs: [1, 2],
  anxiety: [1, 2],
  economy: [1],
  community: [1, 2],
  heath: [1, 2],
  sex: [1, 2]
}
var DATA =  {
    count: 255,
    data: { 
        society: 1,
        lonely: 2,

        drink: 3,
        hash: 3,

        feel: 4,
        relation: 4,

        economy: 5,

        community: 6,
        contribute: 6,

        smoke: 7,
        snus: 7,

        sex: 8,
        deny: 8
    }
}

// var answersDB = {
//   lonely1: 1 ,
//   lonely2: 2,
//   drugs1: 3, 
//   drugs2: 4,
//   anxiety1: 5,
//   anxiety2: 6,
//   economy: 7,
//   community1: 8,
//   community2: 9,
//   heath1: 10,
//   heath2: 11,
//   sex1: 12,
//   sex2: 13
// }

// {
//    society: [0..10];
//    lonely: [0..10];

//    drink: [0..10];
//    hash: [0..10];

//    feel: [0..10];
//    relation: [0..10];

//    economy: [0..10];

//    community: [0..10];
//    contribute: [0..10];

//    smoking: [0..10];
//    suns: [0..10];

//    sex: [0..10];
//    deny: [0..10];
// }
