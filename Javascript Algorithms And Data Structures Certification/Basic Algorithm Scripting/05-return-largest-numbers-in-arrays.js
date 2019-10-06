const largestOfFour= arr => {
  // You can do this!
  const reducer=(acculumator,currentValue)=> Math.max(currentValue,acculumator);

  let result= arr.map(subArray=> subArray.reduce(reducer));
  return result;
}

console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

/*
Solution 1
function largestOfFour(arr) {
  let result=[];
  for(let i=0;i<arr.length;i++){
    let max=Math.max(...arr[i]);
    result.push(max);
  }

  return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
*/
