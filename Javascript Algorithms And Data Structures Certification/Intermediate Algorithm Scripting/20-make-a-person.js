var Person = function(firstAndLast) {
  let firstName = firstAndLast.split(' ')[0];
  let lastName = firstAndLast.split(' ')[1];

  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
    return `${firstName} ${lastName}`;
  };

  this.setFirstName = function(name) {
    firstName = name;
  };

  this.setLastName = function(name) {
    lastName =name;
  };

  this.setFullName = function(firstAndLast) {
    firstName = firstAndLast.split(' ')[0];
    lastName = firstAndLast.split(' ')[1];

  };
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
