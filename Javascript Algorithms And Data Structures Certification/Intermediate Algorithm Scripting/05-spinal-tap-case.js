function spinalCase(str) {
   str = str.replace(/([a-z])([A-Z])/g,'$1 $2');
   str=str.toLowerCase().trim().replace(/\s+|_|\d+/gi,'-');
   return str;
}

console.log(spinalCase('AllThe-small Things'));
