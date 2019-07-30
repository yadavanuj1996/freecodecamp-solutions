/*
 Find lcm of range of consecutive integes
 Imp Concepts for solving the problem
 lcm*hcf= product of two numbers (only applicable on 2 nos)
 lcm(a,b,c)= lcm(lcm(a,b),c)
*/
/**
 * Function to calculate lcm of range (consecutive integers) of numbers.
 * @param {Array<number>} arr The arr containing min and max integer range value.
 *  @return {number} The lcm of range of numbers between min and max integer.
 */
const smallestCommons=(arr)=> {
  let rangeMin=arr[0];
  let rangeMax=arr[1];
  // swapping values if arr[1] hold smaller of range integer
  if(rangeMax < rangeMin){
    let temp=rangeMax;
    rangeMax=rangeMin;
    rangeMin=temp;
  }
  let nosInRange=[];
  for(let i=rangeMin;i<=rangeMax;i++){
    nosInRange.push(i);   // will contain all the integers between input range
  }
  
  let result=nosInRange.reduce(reducer,1);
  return result;
}
/**
 * Reducer function that will be used as callback in smallestCommons.
 * @param {number} acculumator The result at end of each iteration.
 * @param {number} currentValue The present value of array.
 * @return {number} Lcm or lowest common multiple will be returned.
 */
const reducer=(accumulator,currentValue)=>{
  return findLCM(accumulator,currentValue);
}

/**
 * The function to return lcm of 2 numbers.
 * @param {number} num1 First number.
 * @param {number} num2 Second number.
 * @return {number} The result will be lcm of two numbers.
 */
const findLCM=(num1,num2)=>{
  return (num1*num2)/findGCD(num1,num2);
}
/**
 * The function of calculate gcd of or hcf of two numbers.
 * @param {number} num1 First number.
 * @param {number} num2 Second number.
 * @return {number} The result will be gcd or hcf of two numbers.
 */
const findGCD=(num1,num2)=>{
  if(num2==0)
    return num1;
  
  return findGCD(num2,num1 % num2);
}

console.log(smallestCommons([1,5]));
