require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.connect(process.env.MONGODB_URL, {});

const db = mongoose.connection;
try {
  db.on('error', console.error.bind(console, 'connection error: '));
  db.once('open', () => {
    console.log('Connected successfully');
  });
} catch (err) {
  console.log(err, 'error while connecting');
}

const app = express();
app.use(cors());
app.use(bodyParser.json());

require('./routes/auth')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
