function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line
for(let birdProperties in canary){
  //check for below line relevance
    if(canary.hasOwnProperty(birdProperties))
      ownProps.push(birdProperties);
} 

console.log(ownProps);


