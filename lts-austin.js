function removeChar(str){
return str.slice(1, -1);

}

console.log(removeChar('hello'));
console.log(removeChar('Edward'));
console.log(removeChar('Vidaurri'));

function weatherInfo (temp) {
  var c = convertToCelsius(temp);
  if (c < 0) {
    return (c + " is freezing temperature");
  }else{
    return c + " is above freezing temperature";
  }
}
console.log(weatherInfo(100));
function convertToCelsius (temperature) {
  var celsius = (temperature) - 32 + (5/9);
  return temperature;
}
console.log(weatherInfo(-10));
