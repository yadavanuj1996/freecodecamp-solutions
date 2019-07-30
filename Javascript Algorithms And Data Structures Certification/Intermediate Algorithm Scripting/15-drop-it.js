const dropElements=(arr, func)=>{
  let firstTrueIndex=arr.findIndex(func);
  return firstTrueIndex < 0 ?[]:arr.splice(firstTrueIndex);
}

dropElements([1, 2, 3], function(n) {return n < 3; });
