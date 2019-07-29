function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line 

for(let property in beagle){
  console.log(property);
  if(Dog.hasOwnProperty(property))
    ownProps.push(property);
  else
    prototypeProps.push(property);
}

