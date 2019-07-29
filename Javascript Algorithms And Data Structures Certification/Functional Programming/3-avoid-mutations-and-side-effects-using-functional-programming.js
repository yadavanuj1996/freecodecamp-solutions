// the global variable
var fixedValue = 4;

const incrementer= ()=> fixedValue+1;
 

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4
