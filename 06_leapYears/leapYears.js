const leapYears = function(year) {
    if (!Number.isInteger(year)) {
        return "ERROR";
    }

    let leap = false;

    if (year % 4 == 0) {
        if (year % 400 == 0) {
            leap = true;
        } else if (year % 100 != 0) {
            leap = true;
        }
    }

    return leap;
};

// Do not edit below this line
module.exports = leapYears;
