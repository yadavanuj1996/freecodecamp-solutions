let username = "JackOfAllTrades";
let userCheck = /[a-z][a-z]+[0-9]*/i; // Solution 1
//let userCheck = /[a-zA-z][a-zA-Z]+[0-9]*/; // Solution 2

let result = userCheck.test(username);

