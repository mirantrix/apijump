
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema({
  idMatch: { type: String },
  local: {type: Schema.Types.ObjectId, ref: 'Teams'},
  visiting: {type: Schema.Types.ObjectId, ref: 'Teams'},
  matchDate: { type: String },
  tournament: { type: String },
  city: { type: String },
  stadium: { type: String }
});

const Matches = mongoose.model('Matches', matchSchema);

module.exports = Matches;
