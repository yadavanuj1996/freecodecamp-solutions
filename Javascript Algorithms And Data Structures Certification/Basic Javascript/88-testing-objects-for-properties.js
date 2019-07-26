// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  var isCheckPropPresent=myObj.hasOwnProperty(checkProp);
  if(isCheckPropPresent){
    return myObj[checkProp];
  }
  return "Not Found";
}

// Test your code by modifying these values
checkObj("gift");
