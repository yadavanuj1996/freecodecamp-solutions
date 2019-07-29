function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Add your code below this line
Penguin.prototype.fly= () => "Alas, this is a flightless bird.";


// Add your code above this line

let penguin = new Penguin();
console.log(penguin.fly());
