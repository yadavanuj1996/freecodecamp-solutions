function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(str.length > num){
    str=str.substring(0,num);
    //sol 2 str=str.slice(0,num);
    str+="...";
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
