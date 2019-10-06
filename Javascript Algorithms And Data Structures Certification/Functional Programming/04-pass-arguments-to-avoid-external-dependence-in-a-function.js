// the global variable
var fixedValue = 4;

/**
 *  A function to increment parameter value by 1 and retuen
 *  @param {numeber} inputVal the input value 
 *  @return {number} incremented value
 **/
const incrementer= (inputVal) => inputVal+1;

// Solution 2
/*function incrementer (inputVal) {
    return inputVal+1;
  
  // Add your code above this line
}
*/
var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4
