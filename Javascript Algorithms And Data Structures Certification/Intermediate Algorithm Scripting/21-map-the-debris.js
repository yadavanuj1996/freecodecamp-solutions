function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let result=[];
  arr.forEach(x=>{
    let temp={};
    temp.name=x.name;
    temp.orbitalPeriod=Math.round(
      2* Math.PI  * Math.sqrt(
        ((earthRadius+x.avgAlt)**3)/(GM))
                  );
    result.push(temp);
  });
  return result;
}

console.log(JSON.stringify(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])));
