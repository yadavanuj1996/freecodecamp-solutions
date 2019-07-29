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
