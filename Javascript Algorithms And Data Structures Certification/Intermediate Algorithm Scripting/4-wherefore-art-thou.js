function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  for(let property in source){
   collection=collection.filter(x=> x.hasOwnProperty(property) && x[property]===source[property]);
  }
  
  // Only change code above this line
  return collection;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
