function mutation(arr) {
  let flag=0;
  let resultArr=arr[1].toLowerCase().split('').filter(x=>arr[0].toLowerCase().indexOf(x)<0?
false: true);

  return resultArr.length === arr[1].length;
}

console.log(mutation(["hello", "hey"]));
