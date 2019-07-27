let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d\d\D*)/i; // Change this line
let result = pwRegex.test(sampleWord);
