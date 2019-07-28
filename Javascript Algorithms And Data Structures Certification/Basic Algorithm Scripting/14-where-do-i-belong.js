function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  let index=-1;
  if(arr.length<=0)
    return 0;
  arr.sort((presentVal,nextVal)=> presentVal-nextVal);
  
  for(let i=0;i<arr.length;i++){
    if(arr[i] >= num){
      index=i;
      break;
    }
     if(index==-1)
      index=arr.length;
    
  }
  return index;
}

console.log(getIndexToIns([], 1));
