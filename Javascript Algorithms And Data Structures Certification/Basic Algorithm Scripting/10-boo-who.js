function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
 // solution 1
 // return bool===true || bool===false;
 return typeof bool == 'boolean';
}

console.log(booWho(true));
