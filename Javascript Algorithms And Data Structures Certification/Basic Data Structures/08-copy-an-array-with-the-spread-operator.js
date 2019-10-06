function copyMachine(arr, num) {
  let newArr = [];
  while (num-- >0) {
    // change code below this line
   
    newArr.push([...arr]);
   // change code above this line
   
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([1, 2, 3], 5));
