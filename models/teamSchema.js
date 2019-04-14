const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  teamName: { type: String },
  abbreviation: { type: String, maxlength:[3] },
  icon: { type: String },
  league: { type: String },
  sport: { type: String }
});

const Teams = mongoose.model('Teams', teamSchema);

module.exports = Teams;
