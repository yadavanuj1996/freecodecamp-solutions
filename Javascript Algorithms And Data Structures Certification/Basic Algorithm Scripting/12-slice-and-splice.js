const frankenSplice=(arr1, arr2, n) => [...arr2.slice(0,n),...arr1,...arr2.slice(n)];

/*
solution 2
const frankenSplice=(arr1, arr2, n) =>{
  let result=[];
  for(let i=0;i< arr2.length;i++){
    if(i===n){
      let j=0;
      while(j < arr1.length){
        result.push(arr1[j]);
        j++;
      }
    }
    result.push(arr2[i]);
  }
  return result;
}
 
Solutin 3
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let arr2RemainingPart=arr2.splice(n);
  
  let result= [...arr2,...arr1.slice(0),...arr2RemainingPart];
  arr2=[...arr2,...arr2RemainingPart];
  console.log(arr2);
  return result;

}
*/
console.log(frankenSplice([1, 2, 3], [4, 5,], 1));
