function uniteUnique(...arr) {
  let result=[];
  arr.forEach(x=>{
    x.forEach(y=>{
      if(!result.includes(y))    // other way result.indexOf(y)==-1
        result.push(y);
    });    
  });
  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
