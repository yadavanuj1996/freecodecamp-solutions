// Satisfied with the concept as is was start ^ and $ end that was crucial for the problem
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = repeatNum.match(reRegex);
//let result = reRegex.test(repeatNum);
console.log(result);
