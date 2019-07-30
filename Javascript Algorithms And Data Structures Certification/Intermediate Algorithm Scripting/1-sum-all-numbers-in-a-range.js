const sumAll=(arr)=> {
  let result=0;
  let min=Math.min(...arr);
  let max=Math.max(...arr);

  for(let i=min;i<=max;i++){
    result+=i;
  }
  return result;
}

sumAll([1, 4]);
