// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
 
  var name={
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  }
  result= name[val];

  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
