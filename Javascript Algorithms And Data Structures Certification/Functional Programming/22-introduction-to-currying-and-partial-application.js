/*function add(x) {
  // Add your code below this line
  return function(y){
    return function(z){
      return x+y+z;
    }
  }

}*/
  
// Cool and es 6 way
const add= x=> y => z=> x+y+z;
console.log(add(10)(20)(30));
