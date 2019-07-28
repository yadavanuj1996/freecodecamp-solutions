// one line solution (solution 1)
const findElement=(arr, func) =>  arr.find(func);


/*
//another 1 line solution (solution 2)
const findElement=(arr, func)=>  arr.filter(func)[0];

solution 3
const findElement=(arr, func) => arr.map(func).indexOf(true)>-1 ?arr[arr.map(func).indexOf(true)] :undefined;

*/
  
  /*
  Solution 4
const findElement=(arr, func) =>{
for(let i=0;i< arr.length;i++){
    if(func(arr[i]))
      return arr[i];
  }
   return undefined;
}
*/
console.log(findElement([1, 20, 3, 5], num => num % 5 === 0));
