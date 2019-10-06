//recursive solution
  
 
 
  const repeatStringNumTimes=(str,num)=>{
    if(num<=0)
      return "";
    return str+repeatStringNumTimes(str,num-1);
  }
 /*
  Solution 2
function repeatStringNumTimes(str, num) {
  if(num<0) 
    return "";
  let tempString=str;
  for(let i=0;i<num-1;i++){
    str+=tempString;
  }
  
  return str;
}
Solution 3
 const repeatStringNumTimes=(str,num)=>{
    if(num<0)
      return "";
    
    return str.repeat(num);
  }
*/



console.log(repeatStringNumTimes("*", 3));
