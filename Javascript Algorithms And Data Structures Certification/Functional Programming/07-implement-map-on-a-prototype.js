// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line
  for(let i=0;i< this.length;i++){
    newArray.push(callback(this[i]));
  }
  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
