const express = require('express');
const matches = express.Router();
const Matches = require('../models/matchSchema');
const Teams = require('../models/teamSchema');
const teamMatches = require('../middleware/teamMatches');


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

matches.route('/fmf')
  .get((req, res) => {
    const teamId = '5cb27bd6d2123108e17fd996';
    Matches.find().or([{ local: teamId }, { visiting: teamId }])
    .populate('local')
    .populate('visiting')
    .exec(function (err, matches) {
      if (err) console.log(err);
      const { next, previous } = teamMatches(matches);
      console.log(next);
      res.json(next);
    });
  });



module.exports = matches;
