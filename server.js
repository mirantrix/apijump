const express = require('express');
const mongoose = require('mongoose');
const formData = require('express-form-data');
const os = require('os');
const methodOverride = require('method-override');
const dotenv = require('dotenv').config();
const session = require('express-session');
const teamsRoute = require('./controllers/teamsRoute');
const adminRoute = require('./controllers/adminRoute');
const matchesRoute = require('./controllers/matchesRoute');
const cors = require('cors');

const app = express();
const port = process.env.PORT || process.env.PORT_LOCAL;

mongoose.connect(process.env.MONGOLAB_URI, { useNewUrlParser: true })
  .then(db => console.log(`Mongo DB: 200 ok`))
  .catch(err => console.log(`ERROR: ${err}`));

const options = {
  uploadDir: os.tmpdir(),
  autoClean: true,
};

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const sessionMiddleware = session({
	secret: String(process.env.SESSION_SECRET),
	resave: false,
	saveUninitialized: false
})

app.set('json spaces', 4);

app.use(sessionMiddleware);
app.use(formData.parse(options));
app.use(formData.union());
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect('/matches/fmf');
});

app.use('/teams', teamsRoute);
app.use('/admin', adminRoute);
app.use('/matches', matchesRoute);

app.listen(port, () => console.log(`Port: ${port}`));
