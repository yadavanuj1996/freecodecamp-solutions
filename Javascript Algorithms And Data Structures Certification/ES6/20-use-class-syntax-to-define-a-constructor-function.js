function makeClass() {
  "use strict";
  /* Alter code below this line */

  /* Alter code above this line */
  return Vegetable;
}
class Vegetable{
  constructor(vegetableName){
    this.name=vegetableName;
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
