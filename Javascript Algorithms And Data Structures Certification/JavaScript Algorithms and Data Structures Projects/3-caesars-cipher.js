// use brackets while doing variables calculation
function rot13(str) { // LBH QVQ VG!
  let result=str.split('').map(x=>{
    if(/[a-z]/i.test(x)){
      let resultASCIIValue;
      let inpASCIIValue=x.charCodeAt(0);
      if(inpASCIIValue-13<65){
        resultASCIIValue=91-(65-(inpASCIIValue-13));
      }
      else{
        resultASCIIValue=inpASCIIValue-13;
      }
      return String.fromCharCode(resultASCIIValue);
    }
    return x;
  });
  return result.join('');
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
