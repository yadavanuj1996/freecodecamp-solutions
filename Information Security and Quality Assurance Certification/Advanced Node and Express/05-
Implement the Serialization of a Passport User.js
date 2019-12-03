'use strict';

const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const passport=require('passport');
const session=require('express-session');
const path=require('path');
//const mongoose=require('mongoose');
const mongo = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const app = express();
fccTesting(app); //For FCC testing purposes




app.set('view engine', 'pug')
app.use(passport.initialize());
app.use(passport.session());

app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}));



passport.deserializeUser((id,done)=>{
  db.collection('users').findOne({_id: new ObjectId(id)},(err,data)=>{
    if(err)
      next(err);

    done(null,data);
  });
});

app.route('/')
  .get((req, res) => {
    res.render(path.join(__dirname,'views','pug','index.pug'),{title: 'Hello', message: 'Please login'});
  });


mongo.connect(process.env.MONGO_URI, (err, db) => {
  if(err) {
    console.log('Database error: ' + err);
  } else {
    console.log('Successful database connection');

    //serialization and app.listen
    passport.serializeUser((user,done)=>{
      done(null, user._id);
    });

    app.listen(process.env.PORT || 3000, () => {
      console.log("Listening on port " + process.env.PORT);
    });
  }
});


