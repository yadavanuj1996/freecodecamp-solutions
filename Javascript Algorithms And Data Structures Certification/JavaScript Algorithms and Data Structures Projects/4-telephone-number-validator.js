// NOTE remeber to match the lengths of text
function telephoneCheck(str) {
  // Good luck!
  let regex=/1{0,1}\s{0,1}((\(\d{3}\))|(\d{3}))[-]{0,1}[ ]{0,1}\d{3}[- ]{0,1}\d{4}/;
   console.log(str.match(regex));
 
  return regex.test(str) && str.match(regex)[0]===str;
 
}

console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck("555)-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("(555) 555-5555"));
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("5555555555"));

