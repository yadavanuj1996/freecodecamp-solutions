function pairElement(str) {
  str=str.split('').map(x=>{
    if(x==='G')
      return ["G","C"];
    else if(x==='C')
      return ["C","G"];
    else if(x==='A')
      return ["A","T"]
    else if(x==='T')
      return ["T","A"]
  });
  return str;
}

console.log(pairElement("GCG"));
