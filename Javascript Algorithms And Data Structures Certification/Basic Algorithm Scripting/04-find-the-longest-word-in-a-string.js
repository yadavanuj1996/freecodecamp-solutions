function findLongestWordLength(str) {

  const reducer = (accumulator, currentValue) => Math.max(accumulator,currentValue.length);

let max=str.split(' ').reduce(reducer,0);
  /* Solution 1
  let strArray=str.split(' ');
  let max=0;
  for(let i=0;i< strArray.length;i++){
    if(strArray[i].length>max)
      max=strArray[i].length;
  }
  console.log(strArray);
  */
  return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
