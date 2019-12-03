
				 	Information Security with HelmetJS
	
1)  HelmetJS is a type of middleware for Express-based applications that automatically sets 
	HTTP headers to prevent sensitive information from unintentionally being passed between the 
	server and client. While HelmetJS does not account for all situations, it does include 
	support  for common ones like Content Security Policy, XSS Filtering, and HTTP Strict 
	Transport Security, among others. HelmetJS can be installed on an Express project from npm, 
	after which each layer of protection can be configured to best fit the project.

2) 	Hackers can exploit known vulnerabilities in Express/Node if they see that your site is 
	powered by Express. X-Powered-By: Express is sent in every request coming from Express by 
	default. The helmet.hidePoweredBy() middleware will remove the X-Powered-By header. You can
	also explicitly set the header to something else, to throw people off. e.g. app.use
	(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }))

3) 	As hashing is designed to be computationally intensive, it is recommended to do so 	
	asynchronously on your server as to avoid blocking incoming connections while you hash.
	All you have to do to hash a  password asynchronous is call
	```
	bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
	  /*Store hash in your db*/
	});
	```
	Add this hashing function to your server(we've already defined the variables used in the 
	function for you to use) and log it to the console for you to see! At this point you would 
	normally save the hash to your database.

	Now when you need to figure out if a new input is the same data as the hash you would just 
	use the compare function.
	```
	bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
	  /*res == true or false*/
	});
	```

	Add this into your existing hash function(since you need to wait for the hash to complete 
	before calling the compare function) after you log the completed hash and log 'res' to the 
	console within the compare. You should see in the console a hash then 'true' is printed! If 
	you change 'myPlaintextPassword' in the compare function to 'someOtherPlaintextPassword' 
	then it should say false.
	```
	bcrypt.hash('passw0rd!', 13, (err, hash) => {
	  console.log(hash);
	  //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
	  bcrypt.compare('passw0rd!', hash, (err, res) => {
	    console.log(res); //true
	  });
	});
	```
								Advanced Node & Express

1) 	Authentication is the process or action of verifying the identity of a user or process.
	Up to this point you have not been able to create an app utilizing this key concept.

	The most common and easiest to use authentication middleware for Node.js is Passport. It is 
	easy to learn, light-weight, and extremely flexible allowing for many strategies, which
	we will talk about in later challenges. In addition to authentication we will also look
	at template  engines which allow for use of Pug and web sockets which allow for real
	time communication  between all your clients and your server

2)  It's time to set up Passport so we can finally start allowing a user to register or login 
	to an account! In addition to Passport, we will use Express-session to handle sessions. 
	Using this middleware saves the session id as a cookie in the client and allows us to 
	access the session data using that id on the server. This way we keep personal account 
	information out of the cookie used by the client to verify to our server they are 
	authenticated and just keep the key to access the data stored on the server.

	To set up Passport for use in your project, you will need to add it as a dependency first in your package.json. "passport": "^0.3.2"

	In addition, add Express-session as a dependency now as well. Express-session has a ton of advanced features you can use but for now we're just going to use the basics! 
	`"express-session": "^1.15.0"

	You will need to set up the session settings now and initialize Passport. Be sure to first 
	create the variables 'session' and 'passport' to require 'express-session' and 'passport' 
	respectively.

	To set up your express app to use the session we'll define just a few basic options. Be 
	sure to add 'SESSION_SECRET' to your .env file and give it a random value. This is used to 
	compute the hash used to encrypt your cookie!
	```
		app.use(session({
		secret: process.env.SESSION_SECRET,
		resave: true,
		saveUninitialized: true,
		}));
		
		As well you can go ahead and tell your express app to use 'passport.initialize()' and 'passport.session()'
	```

3)  The basic path this kind of authentication will follow in your app is:

	User clicks a button or link sending them to our route to authenticate using a specific 
	strategy (EG. GitHub)
	Your route calls passport.authenticate('github') which redirects them to GitHub.
	The page the user lands on, on GitHub, allows them to login if they aren't already. It then 
	asks them to approve access to their profile from our app.
	The user is then returned to our app at a specific callback url with their profile if they 
	are approved.
	They are now authenticated and your app should check if it is a returning profile, or save 
	it in your database if it is not.
	Strategies with OAuth require you to have at least a Client ID and a Client Secret which is 
	a way for them to verify who the authentication request is coming from and if it is valid. 
	These are obtained from the site you are trying to implement authentication with, such as 
	GitHub, and are unique to your app- THEY ARE NOT TO BE SHARED and should never be uploaded 
	to a public repository or written directly in your code. A common practice is to put them 
	in your .env file and reference them like: process.env.GITHUB_CLIENT_ID. For this challenge 
	we're going to use the GitHub strategy.