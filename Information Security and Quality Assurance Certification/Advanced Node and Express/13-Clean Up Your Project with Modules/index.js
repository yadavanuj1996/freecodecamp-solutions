'use strict';

const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const passport=require('passport');
const session=require('express-session');
const path=require('path');
//const mongoose=require('mongoose');
const mongo = require('mongodb').MongoClient;
const cors=require('cors');
const app = express();
const bcrypt=require('bcrypt');
var http = require('http');
const io = require('socket.io')(http);
const routes = require('./routes.js');
const auth = require('./auth.js');

fccTesting(app); //For FCC testing purposes

// Enable to pass the challenge called "Advanced Node and Express - 
// Registration of New Users"
/*if (true) app.use((req, res, next) => {
  console.log(req.url);
  switch (req.method) {
    case 'GET':
      switch (req.url) {
        case '/logout': return setTimeout(() => next(), 5000);
        case '/profile': return setTimeout(() => next(), 700);
        default: next();
      }
    break;
    case 'POST':
      switch (req.url) {
        case '/login': return setTimeout(() => next(), 9000);
        default: next();
      }
    break;
    default: next();
  }
});
*/

app.use(cors());
app.set('view engine', 'pug');


app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




mongo.connect(process.env.MONGO_URI, (err, db) => {
  if(err) {
    console.log('Database error: ' + err);
  } 
  else {
    console.log('Successful database connection');
    auth(app,db);
    routes(app,db);
   //serialization and app.listen
  

   
    app.listen(process.env.PORT || 3000, () => {
      console.log("Listening on port " + process.env.PORT);
    });
  }
});


