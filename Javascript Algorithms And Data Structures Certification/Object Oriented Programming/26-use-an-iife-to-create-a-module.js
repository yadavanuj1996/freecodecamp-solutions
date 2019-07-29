let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};

let funModule= (function(){
  return {
    isCuteMixin(obj){
       obj.cute="cute";
    },
    singMixin(obj){
       obj.sing="sweet";
    }
  }
})();


