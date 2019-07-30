// solving problem using Sieve of Eratosthenes

/**
 * Main function to calculate & return sum of prime numbers upto n
 * @param {number} maxLimitNumber The number upto prime numbers are to be checked
 * @return {number} The sum of all the prime number below maxLimitNumber
 */
const sumPrimes=(maxLimitNumber)=> {
  let primeNosUptoMaxLimit=getAllPrimeUpto(maxLimitNumber);
  let sumOfPrimesUptoMaxLimit=primeNosUptoMaxLimit.reduce(reducer,0);
  return sumOfPrimesUptoMaxLimit;
}
//TODO : Predict time complexity
/**
 * Returns all the prime no upto number n (including n) using Sieve of Eratosthenes
 * @param {number} maxLimit Upper Range for selecting prime no's.
 * @return {Array<number>} Sum of prime no's upto upper range.
 */
const getAllPrimeUpto=(maxLimit)=>{
  let prime=[];
  let result=[];
  for(let i=0;i<=maxLimit;i++)
    prime.push(true);
  
  prime[0]=false; // setting 0 and 1 as non prime
  prime[1]=false;

  for(let currPrime=2;currPrime<=maxLimit;currPrime++){
    
    if(prime[currPrime]==true){
      for(let x=currPrime*currPrime;x <= maxLimit;x=x+currPrime){
        
        if(x % currPrime===0){
          prime[x]=false;
        }
      }
    }
  }
  
    for(let i=0;i<= maxLimit;i++){
      if(prime[i]==true){
       result.push(i);
      }

    }
  return result;
 
}
/**
 * Reducer function to return sum of both input parameters
 * will be used as callback function
 * @param {number} accumulator The total value will be stored.
 * @param {number} currentValue Present value of array.
 * @return {number} Sum of accumulator and currentValue.
 */
const reducer=(accumulator,currentValue)=>{
  return accumulator+currentValue;
}



console.log(sumPrimes(10));

/*
Simple solution with check upto root n of number
function sumPrimes(num) {
  let result=0;
  for(let i=2;i<=num;i++){
    if(isPrime(i)){
      result+=i;
    }
  }
  return result;
}

const isPrime=(num)=>{
  for(let i=2; i*i<=num;i++){
    if(num % i==0)
      return false;
  }
  return true;
}

sumPrimes(10);

*/
