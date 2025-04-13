const convertToCelsius = function(farenheit) {
  let num = (5/9) * (farenheit - 32);

  return num.toFixed(1) == 0.0 ? 0 : parseFloat(num.toFixed(1));
};

const convertToFahrenheit = function(celcius) {
  let num = 32 + (celcius * (9/5));

  return num.toFixed(1) === 0.0 ? 0 : parseFloat(num.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
