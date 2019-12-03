'use strict';

const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
var path=require('path');

const app = express();
app.set('view engine', 'pug')

fccTesting(app); //For FCC testing purposes



app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.route('/')
  .get((req, res) => {
    res.render(path.join(__dirname,'views','pug','index.pug'),{title: 'Hello', message: 'Please login'});
  });

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port " + process.env.PORT);
});

