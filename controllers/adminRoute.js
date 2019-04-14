const express = require('express');
const admin = express.Router();

admin.get('/', (req, res) => {
  res.send('ADMIN');
});

module.exports = admin;
