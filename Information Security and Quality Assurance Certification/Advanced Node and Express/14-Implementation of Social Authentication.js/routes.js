const passport=require('passport');
const path=require('path');
const bcrypt=require('bcrypt');

module.exports =(app, db)=>{
 
  let ensureAuthenticated=(req, res, next)=> {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/');
  };
  
  app.get('/auth/github',
  passport.authenticate('github',{session: false}));

  app.get('/auth/github/callback', 
    passport.authenticate('github', { failureRedirect: '/' }),
    function(req, res) {
      console.log(res);
    // res.redirect('/profile');
  });

  app.route('/')
    .get((req, res) => {
      res.render(path.join(__dirname,'views','pug','index.pug'),{title: 'Home page', message: 'Please login',showLogin: true,showRegistration: true});
  });

  app.route('/register')
    .post((req, res, next) => {
      db.collection('users').findOne({ username: req.body.username },(err, user)=> {
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
  passport.authenticate('local', { failureRedirect: '/' }), (req, res, next) => {
        res.redirect('/profile');
      });
      
      app.post('/login',passport.authenticate('local',{failureRedirect:'/'}),(req,res,next)=>{
    res.redirect('/profile'); 
  });

 

  app.route('/profile')
  .get(ensureAuthenticated,(req,res,next)=>{
    res.render(__dirname+'/views/pug/profile.pug',{username: req.user.username, title: 'Profile Page'});
  });

  app.route('/logout')
    .get((req,res,next)=>{
      req.logout();
      res.redirect('/');
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
    
   
  

      app.route('/auth/github')
          .get(passport.authenticate('github'));
      
        app.route('/auth/github/callback')
          .get(passport.authenticate('github', { failureRedirect: '/' }), (req,res) => {
              res.redirect('/profile');
          });
*/
/*  app.route('/auth/github')
          .get(passport.authenticate('github'));

        app.route('/auth/github/callback')
          .get(passport.authenticate('github', {failureRedirect: '/'}),
            (req, res) => {
              res.redirect('/profile');
            });*/
            /*


*/

}
