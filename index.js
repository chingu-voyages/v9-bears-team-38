const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();
const {DATABASE_URL} = require('./config.js');
const videoRouter = require('./routes/videoRouter.js');

mongoose.Promise = global.Promise;
const app = express();
app.use(bodyParser.json({extended: false}));
app.use(pino);
app.use(cors());

app.use(express.static(path.join(__dirname, 'client/dist')));
app.use('/api', videoRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

let server;
const PORT = process.env.PORT || 8000;

function runServer(databaseUrl, port = PORT) {
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, {useNewUrlParser: true}, err => {
      if (err) {
        return reject(err);
      }
      server = app
        .listen(port, () => {
          console.log(`Your app is listening on port ${port}`);
          resolve();
        })
        .on('error', err => {
          mongoose.disconnect();
          reject(err);
        });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if (require.main === module) {
  runServer(DATABASE_URL).catch(err => console.error(err));
}

module.exports = {app, runServer, closeServer};
