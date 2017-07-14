const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(answers);
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

var answersDB = {
  lonely1: 1 ,
  lonely2: 2,
  drugs1: 3, 
  drugs2: 4,
  anxiety1: 5,
  anxiety2: 6,
  economy: 7,
  community1: 8,
  community2: 9,
  heath1: 10,
  heath2: 11,
  sex1: 12,
  sex2: 13
}

