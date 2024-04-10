const convertToCelsius = function(temp) {
  if (Number.isNaN(temp) ) {
    return "ERROR";
  }
  let newTemp = ((temp - 32) * 5 / 9);
  if (newTemp != 0) {
    return parseFloat(newTemp.toFixed(1));
  } else {
    return newTemp;
  }
};

const convertToFahrenheit = function(temp) {
  if (Number.isNaN(temp)) {
    return "ERROR";
  }
  let newTemp = (temp * (9/5) + 32);
  if (newTemp != 0) {
    return parseFloat(newTemp.toFixed(1));
  } else {
    return newTemp;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
