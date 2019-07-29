function nonMutatingPush(original, newItem) {
  // Add your code below this line
  // sol 1
  //return original.concat(newItem);
  //sol 2
  return [...original,...newItem];
  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
console.log(nonMutatingPush(first, second));
