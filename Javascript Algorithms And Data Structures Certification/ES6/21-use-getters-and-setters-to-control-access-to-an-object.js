class Thermostat{
  constructor(temperature){
    this.temperature=(temperature-32)*(5/9);
  }
  //getter
get temperatureInC(){
  return this.temperature;
  }
  //setter
set temperatureInC(updatedTempInC){
  this.temperature=updatedTempInC;
  }
}

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
