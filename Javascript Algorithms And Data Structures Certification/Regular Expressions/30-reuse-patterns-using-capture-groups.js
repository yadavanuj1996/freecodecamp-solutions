// look again not fully satisfied with the understanding
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = repeatNum.match(reRegex);
//let result = reRegex.test(repeatNum);
console.log(result);
