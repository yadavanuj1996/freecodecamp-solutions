function Animal() { }

Animal.prototype = {
  constructor: Animal, 
  eat: function() {
    console.log("nom nom nom");
  }
};

// Add your code below this line

let duck=Object.create(Animal.prototype); // Change this line
let beagle=Object.create(Animal.prototype); // Change this line

console.log(duck.eat()); // Should print "nom nom nom"
console.log(beagle.eat()); // Should print "nom nom nom" 
