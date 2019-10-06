// solved using ASCII value as doing from last 4 years 😝
function fearNotLetter(str) {
  for(let i=1;i<str.length;i++){
    if(!(str.charCodeAt(i)-str.charCodeAt(i-1)==1)){
      return String.fromCharCode(str.charCodeAt(i)-1);
    }
    
  }
  return undefined;
}

console.log(fearNotLetter("abce"));
