const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numSet) {
	return numSet.reduce((total, currentVal) => (total += currentVal), 0);
};

const multiply = function(numSet) {
  return numSet.reduce((total, currentVal) => (total *= currentVal), 1);
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  let sum = 1;
	for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
