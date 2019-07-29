function Animal() { 
  
}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Add your code below this line
// NOTE: we are not replacing the prototype of Dog object we are assigning prototype of dog it's own new prototype
Dog.prototype=Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"
console.log(Dog.prototype.constructor);
