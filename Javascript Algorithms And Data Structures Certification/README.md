
					  Basic Javascript (ES5)

1) Variables which are used without the var keyword are automatically created in the global scope.

2) Variables can contain alphabets,number $ and _ but cannot start with a number.

3) js objects can contain number and strings and if it's single word or number quotes("") are not mandatory.

4) ` . and [] ` notation to access objects properties.  
	Cases where bracket notation rescues us  
	a) when the property is created or added on the fly and not been defined in the first assignment.  
	b) when the key contains space   
	c) The key name is stored in a variable.  
	
5) jsonObj.hasOwnProperty check in javascript object whether such key is present or not in object.

6) ```
   Math.random() generate a floating number between 0 and 1 excluding 1.
   
   Math.floor is used to round off a number to nearest whole number. 
   
   Math.floor(Math.random()*10) will generate single digit integer number
   between 0 and 10 (10 is exclusive)  	  
   
   Math.floor((Math.random()*(max-min+1))+min); will generate a random number 
   between min and max (inclusive both).  
   
   Math.round() // Math.round() will **round off** to the NEAREST integer. Math.round(2.8) = 3 
   
   Math.floor() will always **round down**. Math.floor(2.8)=2
   
   Math.ceil() will always return **round up**. Math.ceil(2.2)=3
   
   For ex, round(2.8) = 3 but floor(2.8) = 2 and ceil(2.2)=3
   ```
  
   
7) The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base
of the 	number in the string. The radix can be an integer between 2 and 36.
    
   The function call looks like:
   parseInt(string, radix);
   Number.isInteger(numVariable); will return boolean 

							
							ES6

1. ECMAScript is a standardized version of JavaScript with the goal of unifying the language's 
   specifications and features. As all major browsers and JavaScript-runtimes follow this specification,
   the term ECMAScript is interchangeable with the term JavaScript.

2. ```
   let camper = 'James';
   let camper = 'David'; // throws an error
   while with var there is no error generated
   ```
3) Note the "use strict". This enables Strict Mode, which catches common coding mistakes
   and "unsafe" actions. For instance:
	```
	"use strict";
	x = 3.14; // throws an error because x is not declared
	```

4) 	```
	var printNumTwo;
	for (var i = 0; i < 3; i++) {
	  if(i === 2){
	    printNumTwo = function() {
	      return i;
	    };
	  }
	}
	console.log(printNumTwo()); // Output: 3
	console.log(i);		    // 3

	var printNumTwo;
	for (let i = 0; i < 3; i++) {
	  if(i === 2){
	    printNumTwo = function() {
	      return i;
	    };
	  }
	}
	console.log(printNumTwo()); // Output: 2
	```

5) const FAV_PET , const acts as let except it cannot be updated and is read.  
	Use all uppercase letters for declaration.  
	```
	console.log(i);		    // undefined
	"use strict";
	const s = [5, 6, 7];
	s = [1, 2, 3]; // throws error, trying to assign a const
	s[2] = 45; // works just as it would with an array declared with var or let
	console.log(s); // returns [5, 6, 45]
	```
6)	To fetch present time and date 	  
	```
	new Date();
	```

7) concat(arr1, arr2) function 
	```
	"use strict";
	const myConcat = (arr1, arr2) => arr1.concat(arr2);

	// test your code
	console.log(myConcat([1, 2], [3, 4, 5]));  // [1,2,3,4,5]
	concat can similarly be used on string
	```
	
8) filter(), map(), reduce()
	```
	var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
	const result = words.filter(word => word.length > 6);
	console.log(result);	// expected output: Array ["exuberant", "destruction", "present"]

	var array1 = [1, 4, 9, 16];
	// pass a function to map
	const map1 = array1.map(x => x * 2);
	console.log(map1);	// expected output: Array [2, 8, 18, 32]

	const array1 = [1, 2, 3, 4];
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	// 1 + 2 + 3 + 4
	console.log(array1.reduce(reducer));	// expected output: 10
	// 5 + 1 + 2 + 3 + 4
	console.log(array1.reduce(reducer, 5));	// expected output: 15
	```
	NOTE: all 3 functions mentioned in this point does not alter the original array.

9) Setting default parameter for your function
	```
	function greeting(name = "Anonymous") {
	  return "Hello " + name;
	}
	console.log(greeting("John")); // Hello John
	console.log(greeting()); // Hello Anonymous
	```

10) Rest operator (...)
	```
	function sum(...args){
		console.log(`you have passed {args.length} parameters`)
	} 
	```

11) Spread operator
	```
	arr2 = [1,2,...arr1]; will copy all elements of arr1 in arr2

	To find max or min element in array
	Math.max(...arr);
	Math.min(...arr);
	```

12) Destructing object
	```
	const LOCAL_FORECAST = {
	  today:    { min: 72, max: 83 },
	  tomorrow: { min: 73.3, max: 84.6 }
	};

	const {tomorrow: {max: maxOfTomorrow}} = LOCAL_FORECAST;  
	console.log(maxOfTomorrow); // 84.6
	```
	
13) 	
	```
	const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
    	console.log(a, b, c); // 1, 2, 5
	```

14) Destructing Array
	```
	const list = [1,2,3,4,5,6,7,8,9,10];  
	```
	ES 6  
	```
	const [a,b,...arr]=list;  // arr=[3,4,5,6,7,8,9,10] no change in list
	```
	
	ES 5 methods
	slice (Array.prototype.slice() & String.prototype.slice both exists 
	so slice can be used with string and array)
	
	```
	//indexing works similar to  .substring method in java (startIndex, lastIndex+1) for slice
	arr=list.slice(2,10); or arr=list.slice(2); //arr =[3,4,5,6,7,8,9,10] list will not be affected	
	```
	
	splice (Array.prototype.splice() only exists so splice cannot be used with string)
	will remove element from original array and 2 represent starting index 4 represent 
	present + next 3 index to be cut out
	```
	const arr=list.splice(2,4);	// arr= [3,4,5,6] ,list=[1,2,7,8,9,10]
	```
	
15) Destructuring Assignment to Pass an Object as a Function's Parameters
	```
	profileData={
		name:"Anuj",
		age: 29,
		nationality: "Indian"
		location: "Mumbai"
	}
	
	const profileUpdate = (profileData) => {
		 const { name, age, nationality, location } = profileData;
		  // do something with these variables
	}
		can also be coded as

	const profileUpdate = ({ name, age, nationality, location }) => {
	  /* do something with these fields */
	}
	```
	only ({name}) is also valid if we just want one parameter
	
16) Template Literal
	```
	`hello ${arr[0]}
	this will appear in next line`
	```
	 
17) Pass arguments to function and return an object
	```
	"use strict";
	const createPerson = (name, age, gender) => ({name,age,gender});
	console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
	```
	
	NOTE: use () around the object in function body as when the one line function generally 
	does not need a return statement in es6 but for object creation and return we need to 
	wrap one line block around () brackets.
	
18) When defining functions within objects in ES5, we have to use the keyword function as follows:
	```
	const person = {
	  name: "Taylor",
	  sayHello: function() {
	    return `Hello! My name is ${this.name}.`;
	  }
	};
	```
	With ES6, You can remove the function keyword and colon altogether when defining 
	functions in objects. Here's an example of this syntax:
	```
	const person = {
	  name: "Taylor",
	  sayHello() {
	    return `Hello! My name is ${this.name}.`;
	  }
	}; 
	```
	
19)	In ES5, we usually define a constructor function, and use the new keyword to instantiate an object.
	Note: We recognize a function is contructor if it starts with Capital letter.
	```
	var SpaceShuttle = function(targetPlanet){
	  this.targetPlanet = targetPlanet;
	}
	var zeus = new SpaceShuttle('Jupiter');

	The class syntax simply replaces the constructor function creation:

	class SpaceShuttle {
	  constructor(targetPlanet){
	    this.targetPlanet = targetPlanet;
	  }
	}
	const zeus = new SpaceShuttle('Jupiter');
	```
	
	the keyword class is just syntactic sugar

20)	```
	class Book {
	  constructor(author) {
	    this._author = author;
	  }
	  // getter
	  get writer(){
	    return this._author;
	  }
	  // setter
	  set writer(updatedAuthor){
	    this._author = updatedAuthor;
	  }
	}
	const lol = new Book('anonymous');
	console.log(lol.writer);  // anonymous
	lol.writer = 'wut';
	console.log(lol.writer);  // wut
	```
	
	Notice the syntax we are using to invoke the getter and setter - as if they are not even functions.   
	Getters and setters are important, because they hide internal implementation details.

21)	In the past, the function require() would be used to import the functions and code in external
	files and modules. While handy, this presents a problem: some files and modules are rather large,
	and you may only need certain code from those external resources.

	ES6 gives us a very handy tool known as import. With it, we can choose which parts of a module 
	or file to load into a given file,saving time and memory.
	
	```
	import { countItems } from "math_array_functions"
	```
	
	The whitespace surrounding the function inside the curly braces is a best practice 
	- it makes it easier to read the import statement countItems can either be a function or variable.

	In most cases,the file path requires a ./ before it; otherwise, node will look in the
	node_modules directory first trying to load it as a dependency.

22) 	
	```
	const capitalizeString = (string) => {
	  return string.charAt(0).toUpperCase() + string.slice(1);
	}
	export { capitalizeString } //How to export functions.
	export const foo = "bar"; //How to export variables.
	```
	or you can also export all variables in same line
	
23) To import all contents of files
	```
	import * as myMathModule from "math_functions";
	myMathModule.add(2,3);
	myMathModule.subtract(5,3);
	```


							Regular Expressions


1. Regex are written between // and should not be placed in quotes (both single or double)
	The .test() method takes the regex, applies it to a string (which is placed inside the parentheses),
	and returns true or false if your pattern finds something or not.
	test() returns true or false
	```
	let testStr = "freeCodeCamp";
	let testRegex = /Code/;
	testRegex.test(testStr) // Returns true
	```

2) OR for words and ignoring case	
	```
	/dog|cat|bird|fish/ 	"OR" search in regexp
	/regexpcharacters/i	for ignoring case
	```
	
3) .match is other way of matching a regexp
	```
	match() returns extracted word if we searcg /coding/i then if there is CoDiNG word 
	present it will return that string.
	
	checkingString.match(regExp); this will extrach the pattern

	use /code/g with match()  to get all multiple matchings
	and /code/gi 	for using two flags together i for ignoring case and g for multiple matches
	```
	
4) "." wild card operator 
	```
	let humStr = "I'll hum a song";
	let hugStr = "Bear hug";
	let huRegex = /hu./;
	humStr.match(huRegex); // Returns ["hum"]
	hugStr.match(huRegex); // Returns ["hug"]
	```
	
5) OR for characters and g global flag
	```
	/h[aeiou]m/ will search for either h_m as _ can either have any mentioned vowel
	/[a-e]/ig will search for characters between a-e 
	/[h-s2-6]/ig	 will match h to s characters or 2,3,4,5,6 numbers as an or
	```
6) Caret operator or NOT INCLUDING (inside [])
	` /[^aeiou0-9]/ig		will exclude all vowels and all numbers
	
7) Search starting pattern  with Caret operator	
	Earlier, you used the caret character (^) inside a character set to create a negated character
	set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to
	search for patterns at the beginning of strings.
	```
	let firstString = "Ricky is first and can be found.";
	let firstRegex = /^Ricky/;
	firstRegex.test(firstString);// Returns true
	```
	
8) Search ending pattern with $ operator	
	```
	let caboose = "The last car on a train is the caboose";
	let lastRegex = /caboose$/; // Change this line
	let result = lastRegex.test(caboose);
	console.log(result);
	```
8) 1 or more than one character , 0 or more than 0 character
	```
	/s+/ig	 		will give all matching of 1 or more than 1 s together
	/[Aa]*/			for 0 or more than 0 A or a   /h[a*]s/ig	has,hAs,hAas
	/h[a-i]*s/ig;		has,HaS,hAaS,his
	```
	
9) Greedy (default) vs lazy search
	```
	let text = "<h1>Winter is coming</h1>";

	let myRegex = /<h.*1>/; //result=<h1>Winter is coming</h1> // Default GREEDY search	
	let myRegex = /<h.*?1>/;//result=<h1> // ? LAZY search (? should come afterwards not before *)
	
	let result = text.match(myRegex);
	```
	
10) \w alphanumeric class shortcut and not alphanumeric \W (capital W)
	```
	The closest character class in JavaScript to match the alphabet is \w. 
	This shortcut is equal to [A-Za-z0-9_]
	Note: _ (underscore) is also present
	
	\W will find all other characters such as . and " " space 

	\d  is shortcut for [0-9]
	\D  is shortcut for [^0-9]
	```
11) \s Searching Whitespces, tabs and carriages and \S for non-white spaces
	You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, 
	but also carriage return, tab, form feed, and new line characters. You can think of it as similar to 
	the character class [ \r\t\f\n\v].	

	\s for white spaces 
	\S for non-space characters

12) /ha{3-5}s/i Specify lower and upper number for repetitions of a character
	```
	let A4 = "aaaah";
	let A2 = "aah";
	let multipleA = /a{3,5}h/;
	multipleA.test(A4); // Returns true
	multipleA.test(A2); // Returns false

    For lower number of repetition of characters
	let haStr = "Hazzzzah";
	let haRegex = /haz{4,}ah/i; // Change this line
	let result = haRegex.test(haStr); // true

    For minimum number of repetiton of a character
	use /ha{100}s/	for exact 100 a's
	
	```

13) repeat function	 (Not part of Regex)
	```
	let timStr =  "h" + "a".repeat(100) + "s";
	will create a string haaaaaa_______________________________aaaaaaaaas
	100 times a
	```
	
14) optional character using ? (another use of ?)
	```
	let favWord = "favorite";
	let favRegex = /favou?rite/; 
	let result = favRegex.test(favWord);	// true
	```

15) ?= & ?! (positive and negative lookahead)
	
	positive lookahead
	```
	let pwRegex = /(?=\w{6,})(?=\D*\d\d\D*)/i; 
	
	This will match that tht password string should have minimum of 6 alphanumeric 
	characters([A-Za-z0-9_]) and the password string should contain atleast 2 consecutive digits.
	```
	
	negative lookahead
	` ?! is its representation and is just opposite of ?= (positive lookahead)
	
16) replace to replace a regexp by new word or text	
	```
	let huhText = "This sandwich is good.";
	let fixRegex = /good/; // Change this line
	let replaceText = "okey-dokey"; // Change this line
	let result = huhText.replace(fixRegex,replaceText);
	replace() word does not alter the original string as string are inmutable in JS.
	```
					
					     Basic Data Structures

1. Arrays are mutable in JS, arr.length returns the no of elements in array,  
   JS array can contain items of different Data type elements.
2) 	```
	arr.push(2);		// push() adds element in end of array
	arr.unshift(2);		// unshift() adds element in start of array
	arr.pop();		// pop() removes element in end of array
	arr.shift();		// shift() removes element in start of array
	```
3) splice()
	```
	let array = ['I', 'am', 'feeling', 'really', 'happy'];

	let newArray = array.splice(3, 2);
	// newArray equals ['really', 'happy']
	// array equals ['I', 'am', 'feeling']
	```
	
4) slice()
	```
	let arrayData = ['I', 'am', 'feeling', 'really', 'happy'];
	arr=arrayData.slice(3,5); or arr=arrayData.slice(3); 
	//arr =['really', 'happy']
	// arrayData = ['I', 'am', 'feeling', 'really', 'happy'];
	arrayData will not be affected	
	```
	
5) indexOf() 	

	indexOf (String.prototype.indexOf() & String.prototype.indexOf() both exists) so  
	we can use indexOf on both string and array.
	
	```
	let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

	fruits.indexOf('dates') // returns -1
	fruits.indexOf('oranges') // returns 2

	fruits.indexOf('pears') // returns 1, the first index at which the element exists
	fruits.lastIndexOf('pears') // returns 4, the last index at which the element exists
	```
6) Objects are nothing but key value pairs data

7) hasOwnProperty()
	```
	let users = {
	  Alan: {
	    age: 27,
	    online: true
	  },
	  Jeff: {
	    age: 32,
	    online: true
	  },
	  Sarah: {
	    age: 48,
	    online: true
	  },
	  Ryan: {
	    age: 19,
	    online: true
	  }
	};
	```
	
	```
	users.hasOwnProperty('Alan'); // return true
	above statement will search 'Alan' as key in users object;
	
	```
8)	```
	for (let user in users) {
	  console.log(user);
	};
	```
	// logs: Alan Jeff Sarah Ryan
	
	Objects do not maintain an ordering to stored keys like arrays do; thus a keys
	position on an object, or the relative order in which it appears, is irrelevant
	when referencing or accessing that key.
	
9) Object.keys()
 
	Object.keys() method and passing in an object as the argument. This will return  
	an array with strings representing each property in the object. Again, there will  
	be no specific order to the entries in the array.  
	
10) use combination of . [] (dot & bracket) notation along with for in loop and push to alter an object's value.

11)
	```
	var array1 = [5, 12, 8, 130, 44];

	var found = array1.find(function(element) {
	  return element > 10;
	});
	console.log(found); // 12 
	```
						

						Basic Algorithm Scripting


1. string to array and applying logic on each element
	```
	var str = 'The quick brown fox jumps over the lazy dog.';

	var words = str.split(' ');
	console.log(words[3]);

	console.log(Array.from('foo'));
	// expected output: Array ["f", "o", "o"]

	console.log(Array.from([1, 2, 3], x => x + x));
	// expected output: Array [2, 4, 6]

	str.substring(startIndex, lastIndex+1);
	```

2) Reverse a string	
	```
	stringVal.split('') will split the string into array elements
	
	arr.reverse(); //will reverse the value of array [1,2,3] becomes [3,2,1] 
		       //reverse only works on arrays
	
	arr.join('');  //will unite a array elements into a new string, array to string conversion
	```
4) arr.find(functionName) (without () call)
	Both functions below will find and return first element that satisfies functions
	condition or else will return undefined.
	
	```
	const findElement=(arr, func) =>  arr.find(func);
	
	const findElement=(arr, func) => arr.map(func).indexOf(true)>-1 ?arr[arr.map(func).indexOf(true)] :undefined;
	
	console.log(findElement([1, 20, 3, 5], num => num % 5 === 0));
	```

	We can search a element in array using indexOf() if indexOf() returns > -1 then items exist
	arr.filter() will run for complete array while find stops at first time the condition is met. 
	
5) Capitalize a sentence			
	toUpperCase()  
	toLowerCase()  
	```
	const titleCase=(str) => str.split(' ').map(x=> x.charAt(0).toUpperCase()+x.substring(1).toLowerCase()).join(' ');
	const titleCase=(str) => str.toLowerCase().replace(/(^|\s)\w/g, (L)=> L.toUpperCase());
	```
	
6) truthy and falsy values
	```
	**All the values in JS are truthy except 6 values.**
	Only 6 falsy values are:-
	a) undefined 
	b) null
	c) NaN 
	d) false
	e) 0
	f) ""	
	```
	`arr.filter(Boolean);
	to filter all the boolean type values in hs array

7) 	To sort an array in alphabetic order in js
	Note: Even numbers will be converted to string and then will be compared 
	then their utf-16 value gets compared not the numbers themselves.
	```
	var months = ['March', 'Jan', 'Feb', 'Dec'];
	months.sort();
	console.log(months);
	// expected output: Array ["Dec", "Feb", "Jan", "March"]

	var array1 = [1, 30, 4, 21, 100000];
	array1.sort();
	console.log(array1);
	// expected output: Array [1, 100000, 21, 30, 4]

	```
	
8) To sort numbers array in js
	```
	let arr=[2,5,1,3,7,9,6,8]
	arr.sort((currentVal, nextVal)=> currentVal-nextVal);
	console.log(arr); //1, 2, 3, 5, 6, 7, 8, 9  
	```


						Object Oriented Programming

1. Constructors and creating objects	
	function Bird() {
	  this.name = "Albert";
	  this.color = "blue";
	  this.numLegs = 2;
	}
	This constructor defines a Bird object with properties name, color, and numLegs set to Albert, blue, and 2, respectively.

	Constructors follow a few conventions:

	Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
	Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new 		object it will create.
	Constructors define properties and behaviors instead of returning a value as other functions might.

	let blueBird = new Bird(); //create a object using new keyword with constructor

	IMPORTANT POINT-
	if you want to declare the variables inside constructor as private i.e., you don't want them to be accessed by outside functions 
	you shall then not use this keyword and declare it like normal variable using var or let and make sure inside the constructor 
	call the variable without this keyword.


2) instanceof	to check objects constructor	 (o in instaceof is lowercase)
	let Bird = function(name, color) {
	  this.name = name;
	  this.color = color;
	  this.numLegs = 2;
	}

	let crow = new Bird("Alexis", "black");

	crow instanceof Bird; // => true

3) to print all the properties of a object	
	let ownProps = [];

	for (let property in duck) {
	  if(duck.hasOwnProperty(property)) {
	    ownProps.push(property);
	  }
	}

	console.log(ownProps); // prints [ "name", "numLegs" ]

4) Prototype	
	A better way is to use Bird’s prototype. The prototype is an object that is shared among ALL instances of Bird. Here's how to add 		numLegs to the Bird prototype:

	Bird.prototype.numLegs = 2;
	Now all instances of Bird have the numLegs property.

	console.log(duck.numLegs); // prints 2
	console.log(canary.numLegs); // prints 2
	Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects.

	Note that the prototype for duck and canary is part of the Bird constructor as Bird.prototype. Nearly every object in JavaScript has a 		prototype property which is part of the constructor function that created it.
	
	let ownProps = [];
	let prototypeProps = [];

	for (let property in duck) {
	  if(duck.hasOwnProperty(property)) {
	    ownProps.push(property);
	  } else {
	    prototypeProps.push(property);
	  }
	}

	console.log(ownProps); // prints ["name"]
5) find constructor of object
	let duck = new Bird();
	let beagle = new Dog();

	console.log(duck.constructor === Bird); //prints true
	console.log(beagle.constructor === Dog); //prints true
	console.log(prototypeProps); // prints ["numLegs"]
	
	Since the constructor property can be overwritten (which will be covered in the next two challenges) it’s generally better to use the 		instanceof method to check the type of an object.

6) Updating the prototype by assignment of a object
	function Dog(name) {
	  this.name = name; 
	}

	Dog.prototype={
	  numLegs: 2,
	  eat(){
	    console.log("eat method in es6 way");
	  },
	  describe(){
	    console.log("describe method in es6 way");
	  }
	}

	There is one crucial side effect of manually setting the prototype to a new object. It erased the constructor property! The code in 		the previous challenge would print the following for duck:

	console.log(duck.constructor)
	// prints ‘undefined’ - Oops!
	
	To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property:
	Bird.prototype = {
	  constructor: Bird, // define the constructor property
	  numLegs: 2,
	  eat: function() {
	    console.log("nom nom nom");
	  },
	  describe: function() {
	    console.log("My name is " + this.name); 
	  }
	};

7)	
	Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor function that 	created it. For example, here the Bird constructor creates the duck object:

	function Bird(name) {
	  this.name = name;
	}

	let duck = new Bird("Donald");
	duck inherits its prototype from the Bird constructor function. You can show this relationship with the isPrototypeOf method:

	Bird.prototype.isPrototypeOf(duck);
	// returns true

	All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.

8)	
	All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.

	function Bird(name) {
	  this.name = name;
	}

	typeof Bird.prototype; // => object
	Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototype is 		Object.prototype:

	Object.prototype.isPrototypeOf(Bird.prototype);
	// returns true
	How is this useful? You may recall the hasOwnProperty method from a previous challenge:

	let duck = new Bird("Donald");
	duck.hasOwnProperty("name"); // => true
	The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck. 		This is an example of the prototype chain.

	In this prototype chain, Bird is the supertype for duck, while duck is the subtype. Object is a supertype for both Bird and duck.

	Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.

9)  isPrototypeOf()	To check prototype of a object
	function Dog(name) {
	  this.name = name;
	}

	let beagle = new Dog("Snoopy");

	console.log(Dog.prototype.isPrototypeOf(beagle)); //true

10) DRY principle & Inheritance
	There's a principle in programming called Don't Repeat Yourself (DRY). The reason repeated code is a problem is because any change 		requires fixing code in multiple places. This usually means more work for programmers and more room for errors.

	You already know one way to create an instance of Animal using the new operator:

	let animal = new Animal();
	There are some disadvantages when using this syntax for inheritance, which are too complex for the scope of this challenge. Instead, 		here's an alternative approach without those disadvantages:
	
	let animal = Object.create(Animal.prototype);
	Object.create(obj) creates a new object, and sets obj as the new object's prototype. Recall that the prototype is like the "recipe" 		for creating an object. By setting the prototype of animal to be Animal's prototype, you are effectively giving the animal instance 		the same "recipe" as any other instance of Animal.

	animal.eat(); // prints "nom nom nom"
	animal instanceof Animal; // => true
11)	
	Bird.prototype = Object.create(Animal.prototype);
	Remember that the prototype is like the "recipe" for creating an object. In a way, the recipe for Bird now includes all the key 	"ingredients" from Animal.

	let duck = new Bird("Donald");
	duck.eat(); // prints "nom nom nom"
	duck inherits all of Animal's properties, including the eat method.

12)
	When an object inherits its prototype from another object, it also inherits the supertype's constructor property.

	Here's an example:

	function Bird() { }
	Bird.prototype = Object.create(Animal.prototype);
	let duck = new Bird();
	duck.constructor // function Animal(){...}
	But duck and all instances of Bird should show that they were constructed by Bird and not Animal. To do so, you can manually set 		Bird's constructor property to the Bird object:

	Bird.prototype.constructor = Bird;
	duck.constructor // function Bird(){...}

13) Method Overriding
	function Animal() { }
	Animal.prototype.eat = function() {
	  return "nom nom nom";
	};
	function Bird() { }

	// Inherit all methods from Animal
	Bird.prototype = Object.create(Animal.prototype);

	// Bird.eat() overrides Animal.eat()
	Bird.prototype.eat = function() {
	  return "peck peck peck";
	};

14) Mixins	
	As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. 		Inheritance does not work well for unrelated objects like Bird and Airplane. They can both fly, but a Bird is not a type of Airplane 		and vice versa.

	For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.

	let flyMixin = function(obj) {
	  obj.fly = function() {
	    console.log("Flying, wooosh!");
	  }
	};

15)
	function Bird() {
		  let hatchedEgg = 10; // private property

		  this.getHatchedEggCount = function() { // publicly available method that a bird object can use
		    return hatchedEgg;
		  };
		}
		let ducky = new Bird();
		ducky.getHatchedEggCount(); // returns 10

	Here getHachedEggCount is a privileged method, because it has access to the private variable hatchedEgg. This is possible because 		hatchedEgg is declared in the same context as getHachedEggCount. In JavaScript, a function always has access to the context in which 		it was created. This is called closure.

16) IIFE (Immediately Invoked Function Expression )
	(function () {
	  console.log("Chirp, chirp!");
	})(); // this is an anonymous function expression that executes right away
	
	// Outputs "Chirp, chirp!" immediately
	Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause 		it to be immediately executed or invoked. This pattern is known as an immediately invoked function expression or IIFE.

17) Modules and IIFE together
	An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module. For 		example, an earlier challenge defined two mixins:

	function glideMixin(obj) {
	  obj.glide = function() {
	    console.log("Gliding on the water");
	  };
	}
	function flyMixin(obj) {
	  obj.fly = function() {
	    console.log("Flying, wooosh!");
	  };
	}
	We can group these mixins into a module as follows:

	let motionModule = (function () {
	  return {
	    glideMixin: function (obj) {
	      obj.glide = function() {
		console.log("Gliding on the water");
	      };
	    },
	    flyMixin: function(obj) {
	      obj.fly = function() {
		console.log("Flying, wooosh!");
	      };
	    }
	  }
	}) (); // The two parentheses cause the function to be immediately invoked
	Note that you have an immediately invoked function expression (IIFE) that returns an object motionModule. This returned object 		contains all of the mixin behaviors as properties of the object.

	The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by 		other parts of your code. Here is an example using it:

	motionModule.glideMixin(duck);
	duck.glide();

				

							Functional Programming

1.	Functional programming is about:

	a) Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

	b) Pure functions - the same input always gives the same output

	c) Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully 		controlled

2)	Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function. You may have 		seen them passed to other methods, for example in filter, the callback function tells JavaScript the criteria for how to filter an 		array.
	
	Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other 		normal value, are called first class functions. In JavaScript, all functions are first class functions.

	The functions that take a function as an argument, or return a function as a return value are called higher order functions.
	ex:- filter,map,reduce

	When the functions are passed in to another function or returned from another function, then those functions which gets passed in or 		returned can be called a lambda

3)	To concat 1 arrays not using spread operator
	 this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);

4)	Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect. A 		function, ideally, should be a pure function, meaning that it does not cause any side effects.
	
	One of the core principle of functional programming is to not change things. Changes lead to bugs. It's easier to prevent bugs knowing 		that your functions don't change anything, including the function arguments or any global var
	
	Avoid for loops in functional programming and use functions like map().

5)	Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a 		variable or object being present, then pass that variable or object directly into the function as an argument.

6)	Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable to avoid that as well.

7)	The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N 		functions of arity 1.

	In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and 		so on.

	Here's an example:

	//Un-curried function
	function unCurried(x, y) {
	  return x + y;
	}

	//Curried function
	function curried(x) {
	  return function(y) {
	    return x + y;
	  }
	}
	curried(1)(2) // Returns 3
	This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a 		variable, which will hold the returned function reference that takes the next argument when it's available. Here's an example using 		the curried function in the example above:

	// Call a curried function in parts:
	var funcForY = curried(1);
	console.log(funcForY(2)); // Prints 3
	Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function 		that is applied to more arguments.

	Here's an example:

	//Impartial function
	function impartial(x, y, z) {
	  return x + y + z;
	}
	var partialFn = impartial.bind(this, 1, 2);
	partialFn(10); // Returns 13

						Intermediate Algorithm Scripting				

1.	// the global Array
	var s = [23, 65, 98, 5];

	Array.prototype.myFilter = function(callback){
	  var newArray = [];
	  // Add your code below this line
	    this.forEach(x=>{
	      if(callback(x)){
		newArray.push(x);
	      }
	    });
	  // Add your code above this line
	  return newArray;

	};

	var new_s = s.myFilter(function(item){
	  return item % 2 === 1;
	});

2)	var arr = [1, 2, 3];
	arr.push([4, 5, 6]);
	// arr is changed to [1, 2, 3, [4, 5, 6]]
	// Not the functional programming way
	Concat offers a way to add new items to the end of an array without any mutating side effects.

3)	function ascendingOrder(arr) {
	  return arr.sort(function(a, b) {
	    return a - b;
	  });
	}
	ascendingOrder([1, 5, 2, 3, 4]);
	// Returns [1, 2, 3, 4, 5]

	function reverseAlpha(arr) {
	  return arr.sort(function(a, b) {
	    return a < b;
	  });
	}
	reverseAlpha(['l', 'h', 'z', 'b', 's']);
	// Returns ['z', 's', 'l', 'h', 'b']
4)	Use of replace() function is ill advised in functional programming as it changes the original string.
5)	Use trim() to replace trailing whitespaces
6) every() and some() function	
	The every method works with arrays to check if every element passes a particular test. It returns a Boolean value - true if all values 		meet the criteria, false if not.

	For example, the following code would check if every element in the numbers array is less than 10:

	var numbers = [1, 5, 8, 0, 10, 11];
	numbers.every(function(currentValue) {
	  return currentValue < 10;
	});

	For example, the following code would check if any element in the numbers array is less than 10:

	var numbers = [10, 50, 8, 220, 110, 11];
	numbers.some(function(currentValue) {
	  return currentValue < 10;
	});
	// Returns true
	// Returns false

7) arr.findIndex()
	to find first vowel index in string, works similar to arr.find() function exceot this function returns index instead of first 		satisfied value
	 let firstVowelIndex=str.split('').findIndex(x=>{
	    return /[aeiou]/i.test(x);
	  });

8) charCodeAt()
	console.log("ABC".charCodeAt(0)); //65
	String.fromCharCode(65); // 65	//Note: String keyword should come for each call to function

9) includes() to search an element in array & string
	var array1 = [1, 2, 3];

	console.log(array1.includes(2));
	// expected output: true

	var pets = ['cat', 'dog', 'bat'];

	console.log(pets.includes('at'));
	// expected output: false

10)	Math.sqrt(9) // 2
	Math.PI		// to get pi value in js

11) continue keyword
	var text = "";

	for (var i = 0; i < 10; i++) {
	  if (i === 3) {
	    continue;
	  }
	  text = text + i;
	}

	console.log(text);
	// expected output: "012456789"

12) Array.isArray();
	Array.isArray([1, 2, 3]);  // true
	Array.isArray({foo: 123}); // false
	Array.isArray('foobar');   // false
	Array.isArray(undefined);  // false
