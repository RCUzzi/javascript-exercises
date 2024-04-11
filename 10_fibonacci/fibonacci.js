const fibonacci = function(num) {
    let realNum = parseInt(num);
    if(Number.isNaN(realNum) || realNum < 0) {
        return 'OOPS';
    }

    let sequence = [0, 1, 1]
    if(realNum <= 2) {
        return sequence[num];
    } else {
        for (let i = 3; i <= num; i++) {
            sequence[i] = (sequence[i-1] + sequence[i-2]);
        }
        console.log(sequence);
        return sequence[num];
    }
};

// Do not edit below this line
module.exports = fibonacci;
