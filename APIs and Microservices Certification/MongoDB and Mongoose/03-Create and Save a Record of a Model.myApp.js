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

