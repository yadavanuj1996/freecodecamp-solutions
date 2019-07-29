const sentensify=(str) => str.split(/\W/).join(' ');
//sol 2 return str.replace(/\W/g,' ');

console.log(sentensify("May-the-force-be-with-you"));
