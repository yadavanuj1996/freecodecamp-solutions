'use strict';

const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const passport=require('passport');
const LocalStrategy=require('passport-local');
const session=require('express-session');
const path=require('path');
//const mongoose=require('mongoose');
const mongo = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const cors=require('cors');
const app = express();
const bcrypt=require('bcrypt');
var http = require('http');
const io = require('socket.io')(http);

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

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());



mongo.connect(process.env.MONGO_URI, (err, db) => {
  if(err) {
    console.log('Database error: ' + err);
  } 
  else {
    console.log('Successful database connection');

   //serialization and app.listen
    passport.serializeUser((user,done)=>{
      done(null, user._id);
    });
    // deserialization of users object
    passport.deserializeUser((id,done)=>{
      db.collection('users').findOne({_id: new ObjectID(id)},(err,data)=>{
        if(err)
          next(err);

        done(null, null);
      });
    });


    /*global io*/
  /*  var socket = io();

     passport.use(new LocalStrategy(
      (username, password, done)=> {
        db.collection('users').findOne({ username: username }, function (err, user) {
          console.log('User '+ username +' attempted to log in.');
          if (err) { return done(err); }
          if (!user) { return done(null, false); }
          if (!bcrypt.compareSync(password, user.password)) { return done(null, false); }
          return done(null, user);
        });
      }https://FCC-Advanced-Node-and-Express-Challenges.supercoder1.repl.co
    ));
    
   
  
*/
      app.route('/auth/github')
          .get(passport.authenticate('github'));
      
        app.route('/auth/github/callback')
          .get(passport.authenticate('github', { failureRedirect: '/' }), (req,res) => {
              res.redirect('/profile');
          });

  app.route('/')
    .get((req, res) => {
      res.render(path.join(__dirname,'views','pug','index.pug'),{title: 'Home page', message: 'Please login',showLogin: true,showRegistration: true});
  });



  app.route('/register')
    .post((req, res, next) => {
      db.collection('users').findOne({ username: req.body.username }, function(err, user) {
        if (err) {
          next(err);
        } else if (user) {
           res.redirect('/');
        } else {
          var hash = bcrypt.hashSync(req.body.password, 12);
          db.collection('users').insertOne({
            username: req.body.username,
            password: hash
          },
            (err, doc) => {
              if (err) {
                res.redirect('/');useruser
              } 
              else {
                next(null, doc);
              }
            }
          )
        }
      })
    },
      passport.authenticate('local', { failureRedirect: '/' }),
      (req, res, next) => {
        
        res.redirect('/profile');
      }
    );

  
  app.post('/login',passport.authenticate('local',{failureRedirect:'/'}),(req,res,next)=>{
     //console.log(JSON.stringify(req.headers));
     
    res.redirect('/profile'); 
  });
/*
  function ensureAuthenticated(req, res, next) {
   // console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/');
  };


  app.route('/profile')
  .get(ensureAuthenticated,(req,res,next)=>{
    res.render(__dirname+'/views/pug/profile.pug',{username: req.user.username, title: 'Profile Page'});
  });

  app.route('/logout')
    .get((req,res,next)=>{
      req.logout();
      res.redirect('/');
    });
*/
  app.use((req, res, next) => {
    res.status(404)
      .type('text')
      .send('Not Found');
  });

   
    app.listen(process.env.PORT || 3000, () => {
      console.log("Listening on port " + process.env.PORT);
    });
  }
});


