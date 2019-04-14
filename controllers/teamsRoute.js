const express = require('express');
const teams = express.Router();
const Teams = require('../models/teamSchema');

const newTeam = new Teams({
  teamName: 'Ligue de football de la Martinique',
  abbreviation: 'MTQ',
  icon: 'can-flag',
  league: 'FIFA',
  sport: 'soccer'
});

newTeam.save().then(() => console.log('Saved'));

teams.route('/')
  .get((req, res) => {
    Teams.find({})
      .then(user => {
        console.log(user);
        res.send('Teams');
        return;
      }).catch(err => {
        console.log(err);
    });
  });

module.exports = teams;
