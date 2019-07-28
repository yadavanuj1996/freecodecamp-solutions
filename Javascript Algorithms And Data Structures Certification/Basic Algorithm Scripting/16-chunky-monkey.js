function chunkArrayInGroups(arr, size) {
  // Break it up.
  let result=[];
  let tempArr=[];
  for(let i=0;i<arr.length;i=i+size){
    tempArr=arr.slice(i,i+size);
   
    result.push(tempArr);
  }
  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
