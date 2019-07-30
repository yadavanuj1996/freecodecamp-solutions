
function translatePigLatin(str) {

  let firstVowelIndex=str.split('').findIndex(x=>{
    return /[aeiou]/i.test(x);
  });
  
  if(firstVowelIndex===0)
    str=str+"way";
  else if(firstVowelIndex>=0) // findIndex returns -1 if not found
    str=str.slice(firstVowelIndex)+str.slice(0,firstVowelIndex)+"ay";
    else  
      str=str+"ay";
      
  return str;
}


console.log(translatePigLatin("sdf"));
 
  /*
  solution 3 usins concat
  if(firstVowelIndex===0)
    str=str.concat("way");
  else if(firstVowelIndex>=0) // findIndex returns -1 if not found
    str=str.slice(firstVowelIndex).concat(str.slice(0,firstVowelIndex)).concat("ay");
    else  
      str=str.concat("ay");
  */
