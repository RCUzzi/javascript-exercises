const findTheOldest = function(people) {
    let oldest = people.reduce((currentOldest, person) => {
        console.log(`Current oldest1: ${currentOldest}`)
        console.log(`Current person: ${person.name}`);
        if (!currentOldest){
            return person;
        } else {
            console.log(`Current oldest: ${currentOldest.name}`);
            let currentAge = 'yearOfDeath' in currentOldest ? (currentOldest.yearOfDeath - currentOldest.yearOfBirth) : (new Date().getFullYear() - currentOldest.yearOfBirth);
            // currentAge = currentOldest.yearOfDeath - currentOldest.yearOfBirth;
            let newAge = 'yearOfDeath' in person ? (person.yearOfDeath - person.yearOfBirth) : (new Date().getFullYear() - person.yearOfBirth);
            // newAge = person.yearOfDeath - person.yearOfBirth;
            if (newAge > currentAge) {
                console.log(person.name + " is older than " + currentOldest.name);
                return person;
            } else {
                console.log(currentOldest.name + " is still the oldest.");
                return currentOldest;
            }
        }
    });

    console.log(oldest);
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
