// 1 line solution
const reverseString= str => str.split('').reverse().join('');



/*
function reverseString(str) {
  
	
  let resultStr="";
  for(let i=0;i<str.length;i++){
    resultStr+=str.substring(str.length-1-i,str.length-i);
  }
  
  /*
    Solution 2
  let resultStr="";
  let val=Array.from(str);
  for(let i=str.length-1;i>=0;i--){
    resultStr+=val[i];
  }
  */
  return resultStr;
}

console.log(reverseString("hello"));

*/
