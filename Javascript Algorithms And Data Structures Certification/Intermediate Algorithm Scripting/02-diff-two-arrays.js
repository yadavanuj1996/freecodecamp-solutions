function diffArray(arr1, arr2) {
   let minLengthArray=[];
  let maxLengthArray=[];
  // Same, same; but different.
  if(arr1.length < arr2.length){
    minLengthArray=arr1;
    maxLengthArray=arr2;
  } 
  else{
    minLengthArray=arr2;
    maxLengthArray=arr1;
  }

    maxLengthArray=maxLengthArray.filter(x=> {
    let indexOfValInMinArray=minLengthArray.indexOf(x);
    if(indexOfValInMinArray<0){
      return true;
    }
    else{
      minLengthArray.splice(indexOfValInMinArray,1);
      return false;
    }
  });
  return [...minLengthArray,...maxLengthArray];
}

console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
