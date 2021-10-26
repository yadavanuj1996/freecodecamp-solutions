function uniteUnique(...arr) {
  for(let i=1;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
      if(!arr[0].includes(arr[i][j])){
        arr[0].push(arr[i][j]);
      }
    }
  }
  return arr[0];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

