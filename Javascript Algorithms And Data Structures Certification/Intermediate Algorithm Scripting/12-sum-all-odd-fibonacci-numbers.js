function sumFibs(num) {
  let firstFiboNum=1;
  let secondFiboNum=1;
  let result=1;

  if(num==1)
    return 1;
  while(secondFiboNum<=num){
     if(secondFiboNum % 2!==0){
      result+=secondFiboNum;
  //     console.log(secondFiboNum);
    }

    let temp=secondFiboNum;
    secondFiboNum=firstFiboNum+secondFiboNum;
    firstFiboNum=temp;
   
  }
  return result;
}

console.log(sumFibs(4));
