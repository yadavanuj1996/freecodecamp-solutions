// solution using currying
// NOTE: isNaN() converts the argument into number using coercion  then starts checking
function test(arg1,arg2){

}
function addTogether(...args) {
  if( typeof args[0]!='number'){
    return undefined;
  }
  else if(args.length===2){
    if( typeof args[0]!='number' || typeof args[1]!='number' ){
      return undefined;
    }
    return args[0]+args[1];
  }
  return function(y){
    if(typeof y !=='number')
      return undefined;
    return args[0]+ y;
  }

}

console.log(addTogether(2,[3]));
