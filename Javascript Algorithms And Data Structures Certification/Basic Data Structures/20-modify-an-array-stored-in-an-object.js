let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // change code below this line 
  console.log(JSON.stringify(userObj.data.friends)); 
userObj.data.friends.push(friend);
  // change code above this line
  return userObj.data.friends;
}

console.log(JSON.stringify(addFriend(user, 'Pete')));
