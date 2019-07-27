function popShift(arr) {
  let popped=arr.pop(); // change this line
  let shifted=arr.shift(); // change this line
  return [shifted, popped];
}

// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));
