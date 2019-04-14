const express = require('express');
const matches = express.Router();
const Matches = require('../models/matchSchema');
const upComing = require('../middleware/upComing');

/*
const newMatch = new Matches({
  idMatch: "2019-06-23&MEXvsMTQ",
  local: "5cb29fec075bb90a7791b283",
  visiting: "5cb27bd6d2123108e17fd996",
  matchDate: '2019-06-24T00:30:00Z',
  tournament: 'Copa de Oro',
  city: "",
  stadium: ""
});

newMatch.save().then(() => console.log('Saved'));
*/

matches.route('/')
  .get((req, res) => {
    const teamId = '5cb27bd6d2123108e17fd996';
    Matches.find().or([{ local: teamId }, { visiting: teamId }])
      .then(localMatches => {
        console.log(upComing(localMatches))
        res.json(localMatches);
      }).catch(err => {
        console.log(err);
    });
  });

module.exports = matches;
