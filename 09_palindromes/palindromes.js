const palindromes = function (phrase) {
    let actualPhrase = phrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    let reversedPhrase = actualPhrase.split("").reverse().join("");

    console.log(`Actual: ${actualPhrase}`);
    console.log(`Reversed: ${reversedPhrase}`);
    return actualPhrase.replace(/ /g, '') === reversedPhrase.replace(/ /g, '');
};

// Do not edit below this line
module.exports = palindromes;
