function Cat(name) {
  this.name = name; 
}

Cat.prototype = {
  constructor: Cat, 
};

function Bear(name) {
  this.name = name; 
}

Bear.prototype = {
  constructor: Bear, 
  
};

function Animal() { 
  
}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
