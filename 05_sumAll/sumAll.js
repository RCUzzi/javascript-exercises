const sumAll = function(num1, num2) {
    let finalValue = 0;
    if (isNaN(num1) || isNaN(num2) || num1 !== parseInt(num1) || num2 !== parseInt(num2) || num1 < 0 || num2 < 0){
        console.log(num1)
        console.log(num2)
        return "ERROR";
    }
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        finalValue += i;
    }
    return finalValue;
};

// Do not edit below this line
module.exports = sumAll;
