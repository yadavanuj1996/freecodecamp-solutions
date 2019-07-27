let ohStr = "Ohhhh no";
let ohRegex = /oh{3,6} no/i; // Change this line
let result = ohRegex.test(ohStr);
console.log(result);
