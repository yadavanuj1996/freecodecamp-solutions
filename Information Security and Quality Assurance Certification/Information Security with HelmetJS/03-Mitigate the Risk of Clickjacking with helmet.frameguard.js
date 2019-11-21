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


/** 3) Mitigate the risk of clickjacking - `helmet.frameguard()` */

// Your page could be put in a <frame> or <iframe> without your consent.
// This can result in [clickjacking attacks](https://en.wikipedia.org/wiki/Clickjacking),
// among other things. Clickjacking is a technique of tricking a user into
// interacting with a page different from what the user thinks it is. Often this
// happens using another page put over the framed original, in a transparent layer.
// The `X-Frame-Options` header set by this middleware restricts who can put
// your site in a frame. It has three modes: DENY, SAMEORIGIN, and ALLOW-FROM.

// We don't need our app to be framed, so you should use `helmet.frameguard()`
// passing to it the configuration object `{action: 'deny'}`

app.use(helmet.frameguard({action: 'deny'}));
 

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

