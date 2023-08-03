const convertToCelsius = function(temp) {
  return roundNum(5 / 9 * (temp - 32));
};

const convertToFahrenheit = function(temp) {
  return roundNum((9 / 5 * temp) + 32);
};

const roundNum = function (num) {
  return Math.round(num * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
