// Solve this problem in some other ide as fcc console creates a lot of confusion and shows the value as original value while they are replaced
// <  &lt;
// >  &gt;
// "  &quot;
// '  &apos;
// &  &amp;

function convertHTML(str) {
  str=str.split('').map(x=>{
    let flag=x;
    let a='amp';
    switch(x){
      case '<' :flag="&lt;";break;
      case '>' :flag="&gt;";break;
      case '"' :flag="&quot;";break;
      case "'" :flag="&apos;";break;
      case '&' :flag="&amp;";break;
    
    }

     //console.log(flag+" "+(x==='&'));
    return flag;
  });
  return str.join('');
}

console.log(convertHTML("Dolce & Gabbana"));
