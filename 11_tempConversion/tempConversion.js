const convertToCelsius = function(temperature) {
  //formula = x - 32 * (5 / 9)
  let intConversion = (temperature - 32) * 5 / 9;
  let converted = Math.round(intConversion * 10) / 10;
  return converted;
};

const convertToFahrenheit = function(temperature) {
  //formula = x * (9/5) + 32
  let intConversion = temperature * (9 / 5) + 32;
  let converted = Math.round(intConversion * 10) / 10;
  return converted;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
