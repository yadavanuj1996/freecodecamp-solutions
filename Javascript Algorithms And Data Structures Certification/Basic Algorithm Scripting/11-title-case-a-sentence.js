const titleCase=(str) => str.split(' ').map(x=> x.charAt(0).toUpperCase()+x.substring(1).toLowerCase()).join(' ');
   
// solution 2 using regex
//const titleCase=(str) => str.toLowerCase().replace(/(^|\s)\w/g, (L)=> L.toUpperCase());
   


console.log(titleCase("I'm a little tea pot"));
