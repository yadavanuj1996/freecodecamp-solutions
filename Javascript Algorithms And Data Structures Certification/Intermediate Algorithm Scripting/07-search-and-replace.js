function myReplace(str, before, after) {
  if(before.charCodeAt(0)<=90){
    after=after.slice(0,1).toUpperCase()+after.slice(1);
  }else{
    after=after.slice(0,1).toLowerCase()+after.slice(1);
  }
  return str.replace(before,after);
}

console.log(myReplace("I think we should look up there", "up", "Down"));
