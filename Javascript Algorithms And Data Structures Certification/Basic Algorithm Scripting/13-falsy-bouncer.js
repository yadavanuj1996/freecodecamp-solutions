/*function bouncer(arr) {
  fcc solution
 // return arr.filter(Boolean);
 
*/

const bouncer=(arr) =>{
  let result=[];
  for(let i=0;i<arr.length;i++){
    if(arr[i]){
      result.push(arr[i]);
    }
  }
  return result;
}
 
console.log(bouncer(["a", "b", "c"]));
