//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
var flag=0;
  for(var i=0;i<contacts.length;i++){
    if (contacts[i].firstName === name && contacts[i].hasOwnProperty(prop)){
      return contacts[i][prop];
    }
    else if(contacts[i].firstName === name && !contacts[i].hasOwnProperty(prop)){
      return "No such property";
    }
     else if(contacts[i].firstName !== name){
      flag=1;
    }
  }
  if(flag==1)
    return "No such contact";
// Only change code above this line
}

// Chan}ge these values to test your function
lookUpProfile("Kristian", "lastName");
