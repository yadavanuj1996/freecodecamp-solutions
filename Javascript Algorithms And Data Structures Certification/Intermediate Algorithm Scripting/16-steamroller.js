const steamrollArray=(arr)=> {  
  return filterArrayNesting(arr,[]);
}

const filterArrayNesting=(element,result)=>{
  if(Array.isArray(element)){
    element.forEach(x=>{
      result=filterArrayNesting(x,result);
    });
  }
  else{
    result.push(element); 
  }
 
  return result;
}
  console.log(steamrollArray([1, [2], [3, [[4]] ]]));
