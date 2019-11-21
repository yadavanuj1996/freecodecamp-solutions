/**********************************************
* 4. Applied InfoSec Challenges
* =============================
***********************************************/

var express = require('express'); // Do Not Edit
var app = express();              // Do Not Edit
// ----

/** - Challenges - *
********************/ 

/** 1) Install and require `helmet` */

// [Helmet](https://github.com/helmetjs/helmet) helps you secure your
// Express apps by setting various HTTP headers.
// Install the package, then require it.

var helmet=require('helmet');


/** 2) Hide potentially dangerous information - `helmet.hidePoweredBy()` */

// Hackers can exploit known vulnerabilities in Express/Node
// if they see that your site is powered by Express. `X-Powered-By: Express`
// is sent in every request coming from Express by default.

// The `hidePoweredBy` middleware will remove the `X-Powered-By` header.
// You can also explicitly set the header to something else, to throw
// people off. e.g. `helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' })`

// Use `helmet.hidePoweredBy()``
app.use(helmet.hidePoweredBy({setTo: 'PHP 4.2.0'}));

// ---- DO NOT EDIT BELOW THIS LINE ---------------------------------------

module.exports = app;
var api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});



