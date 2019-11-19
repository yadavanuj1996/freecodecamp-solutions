					
				Managing Packages with npm

1) The Node Package Manager (npm) is a command-line tool used by developers to share and
   control modules (or packages) of JavaScript code written for use with Node.js.

   When starting a new project, npm generates a package.json file. This file lists
   the package dependencies for your project. Since npm packages are regularly updated,
   the package.json file allows you to set specific version numbers for each dependency.
   This ensures that updates to a package don't break your project.

   npm saves packages in a folder named node_modules

2) The package.json file is the center of any Node.js project or npm package. It 
   stores information about your project, similar to how the <head> section
   of an HTML document describes the content of a webpage. It consists of a single 
   JSON object where information is stored in key-value pairs. There are only two
   required fields; "name" and "version".

3) Versions or Semantic Versioning (SemVer), 

   "package": "MAJOR.MINOR.PATCH"
   The MAJOR version should increment when you make incompatible API changes. 
   The MINOR version should increment when you add functionality in a 
   backwards-compatible manner. The PATCH version should increment when you make
   backwards-compatible bug fixes.

4) In the last challenge, you told npm to only include a specific version of a
   package. That’s a   useful way to freeze your dependencies if you need to make
   sure that different parts of your project stay compatible with each other. 
   But in most use cases, you don’t want to miss bug fixes since they often 
   include important security patches and (hopefully) don’t break things in doing so.

   To allow an npm dependency to update to the latest PATCH version, you
   can prefix the dependency’s version with the tilde (~) character. Here's
   an example of how to allow updates to any 1.3.x version.

   "package": "~1.3.8"

5) Similar to how the tilde we learned about in the last challenge allows npm to 
   install the latest PATCH for a dependency, the caret (^) allows npm to install
   future updates as well. The difference is that the caret will allow both MINOR
   updates and PATCHes.

   Your current version of moment should be "~2.10.2" which allows npm to install 
   to the latest 2.10.x version. If you were to use the caret (^) as a version 
   prefix instead,npm would be allowed to update to any 2.x.x version.

   "package": "^1.3.8"
  
   This would allow updates to any 1.x.x version of the package.


				Basic Node and Express

1) Node.js is a JavaScript runtime that allows developers to write backend
   (server-side) programs   in JavaScript. Node.js comes with a handful
   of built-in modules - small, independent programs - that help facilitate
   this purpose. Some of the core modules include:

   HTTP: a module that acts as a server
   File System: a module that reads and modifies files
   Path: a module for working with directory and file paths
   Assertion Testing: a module that checks code against prescribed constraints

2) Express, while not included with Node.js, is another module often used with 
   it. Express runs between the server created by Node.js and the frontend pages
   of a web application. Express also handles an application's routing. Routing
   directs users to the correct page based on their interaction with the application.
   While there are alternatives to using Express, its simplicity makes it a good
   place to begin when learning the interaction between a backend powered by Node.js
   and the frontend.

3) Let’s serve our first string! In Express, routes takes the following structure:
   app.METHOD(PATH, HANDLER). METHOD is an http method in lowercase. PATH is a 
   relative path on the server (it can be a string, or even a regular expression).
   HANDLER is a function that Express calls when the route is matched.

   Handlers take the form function(req, res) {...}, where req is the
   request object, and res is the response object. For example, the handler

   function(req, res) {
   	res.send('Response String');
   }

4) We can respond to http get requests with a file using the res.sendFile(path) 
   method.

5) An HTML server usually has one or more directories that are accessible by the
   user. You can place there the static assets needed by your application 
   (stylesheets, scripts, images). In Express, you can put in place this 
   functionality using the middleware express.static(path), where the path parameter
   is the absolute path of the folder containing the assets. If you don’t know what
   middleware is... don’t worry, we will discuss in detail later. Basically, 
   middleware are functions that intercept route handlers, adding some kind of 
   information. A middleware needs to be mounted using the method app.use(path, 
   middlewareFunction). The first path argument is optional. If you don’t pass it,
   the middleware will be executed for all requests.

   Mount the express.static() middleware for all requests with app.use()
   /** Serve static assets  */
   app.use(express.static(__dirname+"/public"));

5) While an HTML server serves (you guessed it!) HTML, an API serves data. 
   A REST (REpresentational State Transfer) API allows data exchange in a simple way
   , without the need for clients to know any detail about the server. The client only 
   needs to know where the resource is (the URL), and the action it wants to perform 
   on it (the verb). The GET verb is used when you are fetching some information, 
   without modifying anything. These days, the preferred data format for moving
   information around the web is JSON. Simply put, JSON is a convenient way to 
   represent a JavaScript object as a string, so it can be easily transmitted.

6) res.json(), passing in an object as an argument. This method closes the 
   request-response loop,   returning the data. Behind the scenes, it converts a valid 
   JavaScript object into a string, then sets the appropriate headers to tell your browser
   that you are serving JSON, and sends the data back. A valid object has the usual
   structure {key: data}. data can be a number, a string, a nested object or an array.
   data can also be a variable or the result of a function call, in which case it will 
   be evaluated before being converted into a string.

   	app.get('/json',(req,res)=>res.json({"message": "Hello json"}));

7) The .env file is a hidden file that is used to pass environment variables to your
   application. This file is secret, no one but you can access it, and it can be used 
   to store data that you want to keep private or hidden. For example, you can store 
   API keys from external services or your database URI. You can also use it to store
   configuration options. By setting configuration options, you can change the behavior
   of your application, without the need to rewrite some code.

   The environment variables are accessible from the app as process.env.VAR_NAME.
   The process.env object is a global Node object, and variables are passed as strings.
   By convention, the variable names are all uppercase, with words separated by an 
   underscore. The .env is a shell file, so you don’t need to wrap names or values in
   quotes. It is also important to note that there cannot be space around the equals
   sign when you are assigning values to your variables, e.g. VAR_NAME=value. Usually, 
   you will put each variable definition on a separate line.
	if (process.env.MESSAGE_STYLE==="uppercase"){
	     resultMessage=resultMessage.toUpperCase();
	}

8) Earlier, you were introduced to the express.static() middleware function. Now it’s
   time to see what middleware is, in more detail. Middleware functions are functions that
   take 3 arguments: the request object, the response object, and the next function in the
   application’s request-response cycle. These functions execute some code that can have
   side effects on the app, and usually add information to the request or response 
   objects. They can also end the cycle by sending a response when some condition is
   met. If they don’t send the response when they are done, they start the execution
   of the next function in the stack. This triggers calling the 3rd argument, next().

   Look at the following example:

   function(req, res, next) {
     console.log("I'm a middleware...");
     next();
   }

    Analogous methods exist for all the HTTP verbs (GET, DELETE, PUT, …).

   You can get the request method (http verb), the relative route path, and the 
   caller’s ip from the request object using req.method, req.path and req.ip. Remember
   to call next() when you are done, or your server will be stuck forever.

10) Middleware can be mounted at a specific route using 
	app.METHOD(path, middlewareFunction). 

    Middleware can also be chained inside route definition.

    Look at the following example:

    app.get('/user', function(req, res, next) {
      req.user = getTheUserSync();  // Hypothetical synchronous operation
      next();
    }, function(req, res) {
     res.send(req.user);
    });
    This approach is useful to split the server operations into smaller units.
    That leads to a better app structure, and the possibility to reuse code in different
    places. This approach can also be used to perform some validation on the data. At
    each point of the middleware stack you can block the execution of the current chain
    and pass control to functions specifically designed to handle errors. Or you can pass
    control to the next matching route, to handle special cases

11) When building an API, we have to allow users to communicate to us what they want to
    get from our service. For example, if the client is requesting information about a user
    stored in the database, they need a way to let us know which user they're interested in.
    One possible way to achieve this result is by using route parameters. Route parameters
    are named segments of the URL, delimited by slashes (/). Each segment captures the value 
    of the part of the URL which matches its position. The captured values can be found in
    the req.params object.

   route_path: '/user/:userId/book/:bookId'
   actual_request_URL: '/user/546/book/6754'
   req.params: {userId: '546', bookId: '6754'}

12) Another common way to get input from the client is by encoding the data after the
    route path, using a query string. The query string is delimited by a question mark (?),
    and includes field=value couples. Each couple is separated by an ampersand (&). Express
    can parse the data from the query string, and populate the object req.query. Some
    characters, like the percent (%), cannot be in URLs and have to be encoded in a 
    different format before you can send them. If you use the API from JavaScript, you can
    use specific methods to encode/decode these characters.

   route_path: '/library'
   actual_request_URL: '/library?userId=546&bookId=6754'
   req.query: {userId: '546', bookId: '6754'}

13) Besides GET, there is another common HTTP verb, it is POST. POST is the default method
    used to send client data with HTML forms. In REST convention, POST is used to send data
    to create new items in the database (a new user, or a new blog post). You don’t have a 
    database in this project, but you are going to learn how to handle POST requests anyway.

    In these kind of requests, the data doesn’t appear in the URL, it is hidden in the  
    request body. This is a part of the HTML request, also called payload. Since HTML is
    text-based, even if you don’t see the data, it doesn’t mean that it is secret. The 
    raw content of an HTTP POST request is shown below:

    POST /path/subpath HTTP/1.0
    From: john@example.com
    User-Agent: someBrowser/1.0
    Content-Type: application/x-www-form-urlencoded
    Content-Length: 20
    name=John+Doe&age=25

    As you can see, the body is encoded like the query string. This is the default format
    used by HTML forms. With Ajax, you can also use JSON to handle data having a more
    complex structure. There is also another type of encoding: multipart/form-data. This 
    one is used to upload binary files. In this exercise, you will use a urlencoded body. 
    To parse the data coming from POST requests, you have to install the body-parser
    package. This package allows you to use a series of middleware, which can decode 
    data in different formats.

    // Mount the body-parser middleware  here
    app.use(bodyParser.urlencoded({extended: false}));

14) Tip: There are several other http methods other than GET and POST. And by
    convention there is a correspondence between the http verb, and the operation 
    you are going to execute on the server. The conventional mapping is:

   POST (sometimes PUT) - Create a new resource using the information sent with 
   the request,

   GET - Read an existing resource without modifying it,

   PUT or PATCH (sometimes POST) - Update a resource using the data sent,

   DELETE => Delete a resource.

	Along with app.use(bodyParser.urlencoded({extended: false}));

	route: POST '/library'
	urlencoded_body: userId=546&bookId=6754
	req.body: {userId: '546', bookId: '6754'} 

	so post ,put and other will have req.body just like get request data can 
	be used using req.params and req.query

15) There are also a couple of other methods which are used to negotiate a 
    connection with the server. Except from GET, all the other methods listed above
    can have a payload (i.e. the data into the request body). The body-parser 
    middleware works with these methods as well.

						MongoDB and Mongoose

1. MongoDB is a database that stores data records (documents) for use by an
   application. Mongo is a non-relational, "NoSQL" database. This means Mongo stores
   all associated data within one record, instead of storing it across many preset 
   tables as in a SQL database. Some benefits of this storage model are:

   Scalability: by default, non-relational databases are split (or "shared") across
   many systems instead of only one. This makes it easier to improve performance at
   a lower cost.
   
   Flexibility: new datasets and properties can be added to a document without the 
   need to make a new table for that data.
   
   Replication: copies of the database run in parallel so if one goes down, one of 
   the copies becomes the new primary data source.
   While there are many non-relational databases, Mongo's use of JSON as its document
   storage structure makes it a logical choice when learning backend JavaScript.
   
   Accessing documents and their properties is like accessing objects in JavaScript.


   Mongoose.js is an npm module for Node.js that allows you to write objects for
   Mongo as you would in JavaScript. This can make it easier to construct documents
   for storage in Mongo.

2. Do not declare methods using ES6 arrow functions (=>) in mongoose. Arrow functions 
   explicitly prevent binding this, so your method will not have access to the document and the
   above examples will not work.

3)  Mongoose connection with MongoDB.
    ```
    var mongoose=require('mongoose');
    mongoose.connect(process.env.MONGO_URI);
    ```

4) Creating a model in mongoose
	```
	var Schema=mongoose.Schema;
	var PersonSchema=new Schema({
	  name: {type: String, required:true},
	  age: Number,
	  favoriteFoods: [{type: String,unique: true}]  
	});
	var Person=mongoose.model('Person',PersonSchema); //model
	```

5) Glitch is a real server, and in real servers the interactions with the db happen
   in handler 	functions. These function are executed when some event happens 
   (e.g. someone hits an endpoint on your API). We’ll follow the same approach in these
   exercises. The done() function is a callback that tells us that we can proceed after
   completing an asynchronous operation such as inserting, searching, updating or 
   deleting. It’s following the Node convention and should be called as done(null, data)
   on success, or done(err) on error. Warning - When interacting with remote services, 
   errors may occur!
   ```	
   /* Example */
	
   var someFunc = function(done) {
     //... do something (risky) ...
     if(error) return done(error);
     done(null, result);
   };
   ```
   
6)  	
	```
	var createAndSavePerson = function(done) {
		const person=new Person({name: 'Case Closed',age: 23, favoriteFoods: ['Chicken Curry']});
		person.save((err,data)=>err?done(null):done(null , data));
	};
	```

7) All concepts with comments
	
	```
		/**********************************************
	* 3. FCC Mongo & Mongoose Challenges
	* ==================================
	***********************************************/

	/** # MONGOOSE SETUP #
	/*  ================== */

	/** 1) Install & Set up mongoose */

	// Add `mongodb` and `mongoose` to the project's `package.json`. Then require 
	// `mongoose`. Store your **mLab** database URI in the private `.env` file 
	// as `MONGO_URI`. Connect to the database using `mongoose.connect(<Your URI>)`
	 var mongoose=require('mongoose');
	 mongoose.connect(process.env.MONGO_URI);
	/** # SCHEMAS and MODELS #
	/*  ====================== */

	/** 2) Create a 'Person' Model */

	// First of all we need a **Schema**. Each schema maps to a MongoDB collection
	// and defines the shape of the documents within that collection. Schemas are
	// building block for Models. They can be nested to create complex models,
	// but in this case we'll keep things simple. A model allows you to create
	// instances of your objects, called **documents**.

	// Create a person having this prototype :

	// - Person Prototype -
	// --------------------
	// name : string [required]
	// age :  number
	// favoriteFoods : array of strings (*)

	// Use the mongoose basic *schema types*. If you want you can also add more
	// fields, use simple validators like `required` or `unique`, and set
	// `default` values. See the [mongoose docs](http://mongoosejs.com/docs/guide.html).

	// <Your code here >
	var Schema=mongoose.Schema;
	var PersonSchema=new Schema({
	  name: {type: String, required:true},
	  age: Number,
	  favoriteFoods: [{type: String,unique: true}]  
	});
	var Person=mongoose.model('Person',PersonSchema); //model

	// **Note**: Glitch is a real server, and in real servers interactions with
	// the db are placed in handler functions, to be called when some event happens
	// (e.g. someone hits an endpoint on your API). We'll follow the same approach
	// in these exercises. The `done()` function is a callback that tells us that
	// we can proceed after completing an asynchronous operation such as inserting,
	// searching, updating or deleting. It's following the Node convention and
	// should be called as `done(null, data)` on success, or `done(err)` on error.
	// **Warning** - When interacting with remote services, **errors may occur** !

	// - Example -
	// var someFunc = function(done) {
	//   ... do something (risky) ...
	//   if(error) return done(error);
	//   done(null, result);
	// };

	/** # [C]RUD part I - CREATE #
	/*  ========================== */

	/** 3) Create and Save a Person */

	// Create a `document` instance using the `Person` constructor you build before.
	// Pass to the constructor an object having the fields `name`, `age`,
	// and `favoriteFoods`. Their types must be conformant to the ones in
	// the Person `Schema`. Then call the method `document.save()` on the returned
	// document instance, passing to it a callback using the Node convention.
	// This is a common pattern, all the **CRUD** methods take a callback 
	// function like this as the last argument.

	// - Example -
	// ...
	// person.save(function(err, data) {
	//    ...do your stuff here...
	// });

	var createAndSavePerson = function(done) {
	  const person=new Person({name: 'Anuj Yadav',age: 23,favoriteFoods: ['Chicken Curry']}); 
	  person.save((err,data)=>err?done(null):done(null , data));
	};

	/** 4) Create many People with `Model.create()` */

	// Sometimes you need to create many Instances of your Models,
	// e.g. when seeding a database with initial data. `Model.create()`
	// takes an array of objects like [{name: 'John', ...}, {...}, ...],
	// as the 1st argument, and saves them all in the db.
	// Create many people using `Model.create()`, using the function argument
	// 'arrayOfPeople'.

	var createManyPeople = function(arrayOfPeople, done) {
	    Person.create(arrayOfPeople,(err,data)=>err?done(err):done(null,data));
	    
	};

	/** # C[R]UD part II - READ #
	/*  ========================= */

	/** 5) Use `Model.find()` */

	// Find all the people having a given name, using `Model.find() -> [Person]`
	// In its simplest usage, `Model.find()` accepts a **query** document (a JSON
	// object ) as the first argument, and returns an **array** of matches.
	// It supports an extremely wide range of search options. Check it in the docs.
	// Use the function argument `personName` as search key.

	var findPeopleByName = function(personName, done) {
	  Person.find({name:personName},(err,data)=>err?done(err):done(null,data));
	};

	/** 6) Use `Model.findOne()` */

	// `Model.findOne()` behaves like `.find()`, but it returns **only one**
	// document, even if there are more. It is especially useful
	// when searching by properties that you have declared as unique.
	// Find just one person which has a certain food in her favorites,
	// using `Model.findOne() -> Person`. Use the function
	// argument `food` as search key

	var findOneByFood = function(food, done) {
	  Person.findOne({ favoriteFoods: food },(err,data)=>err?done(err):done(null,data));
	}

	/** 7) Use `Model.findById()` */

	// When saving a document, mongodb automatically add the field `_id`,
	// and set it to a unique alphanumeric key. Searching by `_id` is an
	// extremely frequent operation, so `moongose` provides a dedicated
	// method for it. Find the (only!!) person having a certain Id,
	// using `Model.findById() -> Person`.
	// Use the function argument 'personId' as search key.

	var findPersonById = function(personId, done) {
	  
	  Person.findById({ _id:  personId},(err,data)=>err?done(err):done(null,data));  
	}

	/** # CR[U]D part III - UPDATE # 
	/*  ============================ */

	/** 8) Classic Update : Find, Edit then Save */

	// In the good old days this was what you needed to do if you wanted to edit
	// a document and be able to use it somehow e.g. sending it back in a server
	// response. Mongoose has a dedicated updating method : `Model.update()`,
	// which is directly binded to the low-level mongo driver.
	// It can bulk edit many documents matching certain criteria, but it doesn't
	// pass the edited document to its callback, only a 'status' message.
	// Furthermore it makes validation difficult, because it just
	// direcly calls the mongodb driver.

	// Find a person by Id ( use any of the above methods ) with the parameter
	// `personId` as search key. Add "hamburger" to the list of her `favoriteFoods`
	// (you can use Array.push()). Then - **inside the find callback** - `.save()`
	// the updated `Person`.

	// [*] Hint: This may be tricky if in your `Schema` you declared
	// `favoriteFoods` as an `Array` without specifying the type (i.e. `[String]`).
	// In that case `favoriteFoods` defaults to `Mixed` type, and you have to
	// manually mark it as edited using `document.markModified('edited-field')`
	// (http://mongoosejs.com/docs/schematypes.html - #Mixed )

	var findEditThenSave = function(personId, done) {
	  var foodToAdd = 'hamburger';
	  Person.findById({ _id:  personId},function(err, data){
	    if(err){
	       return done(err);
	    }
	    else {
	      data.favoriteFoods.push(foodToAdd);
	      data.save((err, data) => err ? done(err) : done(null,data));
	     
	    }
	  })
	};

	/** 9) New Update : Use `findOneAndUpdate()` */

	// Recent versions of `mongoose` have methods to simplify documents updating.
	// Some more advanced features (i.e. pre/post hooks, validation) beahve
	// differently with this approach, so the 'Classic' method is still useful in
	// many situations. `findByIdAndUpdate()` can be used when searching by Id.
	//
	// Find a person by `name` and set her age to `20`. Use the function parameter
	// `personName` as search key.
	//
	// Hint: We want you to return the **updated** document. In order to do that
	// you need to pass the options document `{ new: true }` as the 3rd argument
	// to `findOneAndUpdate()`. By default the method
	// passes the unmodified object to its callback.


	var findAndUpdate = function(personName, done) {
	  var ageToSet = 20;
	  Person.findOneAndUpdate(
	    {name:personName}, 
	    {$set: {age: ageToSet}}, 
	    {new : true}, 
	    (err, data) => {
	      if(err)
		done(err);
	    done(null, data);
	  })
	};

	/** # CRU[D] part IV - DELETE #
	/*  =========================== */

	/** 10) Delete one Person */

	// Delete one person by her `_id`. You should use one of the methods
	// `findByIdAndRemove()` or `findOneAndRemove()`. They are similar to the
	// previous update methods. They pass the removed document to the cb.
	// As usual, use the function argument `personId` as search key.


	var removeById = function(personId, done) {
	Person.findByIdAndRemove(personId, (err, data) => err ? done(err) : done(null, data));
	};


	/** 11) Delete many People */

	// `Model.remove()` is useful to delete all the documents matching given criteria.
	// Delete all the people whose name is "Mary", using `Model.remove()`.
	// Pass to it a query ducument with the "name" field set, and of course a callback.
	//
	// Note: `Model.remove()` doesn't return the removed document, but a document
	// containing the outcome of the operation, and the number of items affected.
	// Don't forget to pass it to the `done()` callback, since we use it in tests.

	var removeManyPeople = function(done) {
	    var nameToRemove = "Mary";
	    Person.remove({ name: nameToRemove }, function(error, data) {
	      error ? done(error) : done(null, data);
	    }); 
	};


	/** # C[R]UD part V -  More about Queries # 
	/*  ======================================= */

	/** 12) Chain Query helpers */

	// If you don't pass the `callback` as the last argument to `Model.find()`
	// (or to the other similar search methods introduced before), the query is
	// not executed, and can even be stored in a variable for later use.
	// This kind of object enables you to build up a query using chaining syntax.
	// The actual db search is executed when you finally chain
	// the method `.exec()`, passing your callback to it.
	// There are many query helpers, here we'll use the most 'famous' ones.

	// Find people who like "burrito". Sort them alphabetically by name,
	// Limit the results to two documents, and hide their age.
	// Chain `.find()`, `.sort()`, `.limit()`, `.select()`, and then `.exec()`,
	// passing the `done(err, data)` callback to it.

	var queryChain = function(done) {
	  var foodToSearch = "burrito";
	  
	  Person.find({favoriteFoods: foodToSearch}).sort({name: 'asc'}).limit(2).select("-age")
	  				            .exec(function(error, people) {
	    if(error){
	       done(error);
	    }
	    
	    done(null, people);
	  })
	  
	};


	/** **Well Done !!**
	/* You completed these challenges, let's go celebrate !
	 */

	/** # Further Readings... #
	/*  ======================= */
	// If you are eager to learn and want to go deeper, You may look at :
	// * Indexes ( very important for query efficiency ),
	// * Pre/Post hooks,
	// * Validation,
	// * Schema Virtuals and  Model, Static, and Instance methods,
	// * and much more in the [mongoose docs](http://mongoosejs.com/docs/)


	//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

	exports.PersonModel = Person;
	exports.createAndSavePerson = createAndSavePerson;
	exports.findPeopleByName = findPeopleByName;
	exports.findOneByFood = findOneByFood;
	exports.findPersonById = findPersonById;
	exports.findEditThenSave = findEditThenSave;
	exports.findAndUpdate = findAndUpdate;
	exports.createManyPeople = createManyPeople;
	exports.removeById = removeById;
	exports.removeManyPeople = removeManyPeople;
	exports.queryChain = queryChain;
	```
