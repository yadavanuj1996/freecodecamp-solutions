
const destroyer=(arr,...numbers) =>arr.filter(x=> numbers.indexOf(x)<0);
  

var t0 = performance.now();
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")

/*
SOlution 1
Call to doSomething took 0.1700000002529123 milliseconds.
function destroyer(arr,...numbers) {
    arr=arr.filter(x=>{
      let flag=0;
      numbers.forEach(y=>{
        if(y===x)
          flag=1;
      });
      if(flag===1)
        return false;
      else 
        return true;
    });
  return arr;
}
*/
//Call to doSomething took 0.030000000151630957 milliseconds.
