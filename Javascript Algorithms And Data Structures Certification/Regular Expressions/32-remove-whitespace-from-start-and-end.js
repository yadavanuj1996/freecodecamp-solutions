// | (or) was key and + with \s is important
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
console.log(hello.match(wsRegex));
let result = hello.replace(wsRegex,""); // Change this line
console.log(result);
