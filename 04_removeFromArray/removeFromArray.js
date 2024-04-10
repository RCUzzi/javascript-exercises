const removeFromArray = function(arr, ...val) {
    let updatedArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!val.includes(arr[i])) {
            updatedArray.push(arr[i]);
        }
    }
    return updatedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
