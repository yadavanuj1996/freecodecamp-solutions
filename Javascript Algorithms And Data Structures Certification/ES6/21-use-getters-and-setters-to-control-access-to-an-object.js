
class Thermostat{
  constructor(tempreatureF){
    this.temperatureC=(tempreatureF-32)*(5/9);
  }
  //getter
  get  temperatureInC(){
    return this.temperatureC;
  }
  //setter
  set  temperatureInC(updatedTempInC){
    this.temperatureC=updatedTempInC;
  }
}

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
