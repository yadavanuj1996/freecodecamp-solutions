// solution 1
const confirmEnding=(str, target) => str.substring(str.length-target.length)===target;

/*
Solution 2
const confirmEnding=(str, target) =>{
  let regexWithVarData=`${target}$`;
  let regex=new RegExp(regexWithVarData);
  console.log(regex);
  return regex.test(str);
}
console.log(confirmEnding("Bastian", "n"));
*/

/*
Solution 3
const confirmEnding=(str, target) => str.endsWith(target);
*/
