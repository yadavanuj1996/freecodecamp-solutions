const session=require('express-session');
const passport=require('passport');
const LocalStrategy=require('passport-local');
const bcrypt=require('bcrypt');
const ObjectID = require('mongodb').ObjectID;
const GitHubStrategy = require('passport-github').Strategy;

module.exports = function (app, db) {
  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  }));

  app.use(passport.initialize());
  app.use(passport.session());
  passport.serializeUser((user,done)=>{
      done(null, user._id);
    });
    // deserialization of users object
    passport.deserializeUser((id,done)=>{
      db.collection('users').findOne({_id: new ObjectID(id)},(err,data)=>{
        if(err)
          next(err);

        done(null, data);
      });
    });

  passport.use(new LocalStrategy(
    function(username, password, done) {
      db.collection('users').findOne({ username: username }, function (err, user) {
        console.log('User '+ username +' attempted to log in.');
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!bcrypt.compareSync(password, user.password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));



   passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    
    redirect_uri: 'https://fcc-advanced-node-and-express-challenges.supercoder1.repl.co/return'
  },
  function(accessToken, refreshToken, profile, cb) {
    
    return cb(null, profile);
  }));

}
