function myReplace(str, before, after) {
  if(before.charCodeAt(0) <= 90 )
    after=after.slice(0,1).toUpperCase()+after.slice(1);
  
  return str.replace(new RegExp(before,'gi'),after);

}


console.log(myReplace("His name is Tom", "Tom", "john"));
