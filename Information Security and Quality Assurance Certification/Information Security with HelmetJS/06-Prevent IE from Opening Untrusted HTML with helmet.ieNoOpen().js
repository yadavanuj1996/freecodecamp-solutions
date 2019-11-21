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
 

/** 4) Mitigate the risk of XSS - `helmet.xssFilter()` */

// Cross-site scripting (XSS) is a very frequent type of attack where malicious
// script are injected into vulnerable pages, on the purpous of stealing sensitive
// data like session cookies, or passwords. The basic rule to lower the risk
// of an XSS attack is simple: **"Never trust user's input"**, so as a developer
// you should always *sanitize* all the input coming from the outside.
// This includes data coming from forms, GET query urls, and even from
// POST bodies. Sanitizing means that you should find and encode the characters
// that may be dangerous e.g. `<`, `>`.
// More Info [here](https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet).

// Modern browsers can help mitigating XSS risk by adoptiong software strategies,
// which often are configurable via http headers.
// The `X-XSS-Protection` HTTP header is a basic protection.  When the browser
// detects a potential injected script using an heuristic filter,
// it changes it, making the script not executable.
// It still has limited support.

// Use `helmet.xssFilter()`
app.use(helmet.xssFilter());


/** 5) Avoid inferring the response MIME type - `helmet.noSniff()` */

// Browsers can use content or MIME sniffing to override response `Content-Type`
// headers to guess and process the data using an implicit content type.
// While this can be convenient in some scenarios, it can also lead to
// some dangerous attacks.
// This middleware sets the X-Content-Type-Options header to `nosniff`,
// instructing the browser to not bypass the provided `Content-Type`.

// Use `helmet.noSniff()`
app.use(helmet.noSniff());


/** 6) Prevent IE from opening *untrusted* HTML - `helmet.ieNoOpen()` */

// Some web applications will serve untrusted HTML for download. By default,
// some versions of Internet Explorer will allow you to open those HTML files
// in the context of your site, which means that an untrusted HTML page could
// start doing bad things inside your pages.
// This middleware sets the `X-Download-Options` header to `noopen`,
// to prevent IE users from executing downloads in the *trusted* site's context.

// Use `helmet.ieNoOpen()`
app.use(helmet.ieNoOpen());


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

