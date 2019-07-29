var globalArray = [5, 6, 3, 2, 9];
const nonMutatingSort=(arr) => [].concat(arr).sort((x, y) => x-y);
  
console.log(nonMutatingSort(globalArray));
