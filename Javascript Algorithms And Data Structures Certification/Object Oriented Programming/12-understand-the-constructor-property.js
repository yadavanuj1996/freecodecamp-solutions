function Dog(name) {
  this.name = name;
}

// Add your code below this line
const joinDogFraternity= candidate=>{
  if(candidate.constructor=== Dog)
    return true;
  else
    return false;
}

