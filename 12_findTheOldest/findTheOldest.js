const findTheOldest = function(people) {
    //reduce to compare age
    const base = {
        name: "Base",
        yearOfBirth: 0,
        yearOfDeath: 0,
      }
    const oldest = people.reduce(
        (next, current) => age(next) > age(current) ? next : current,
         base);
    return oldest;
};

//function to find age
function age (person) {
    const currentYear = 2023;
    if (person.yearOfDeath == undefined) {
        return currentYear - person.yearOfBirth;
    }
    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
