const sumAll = function(a, b) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || a < 0 || b < 0) {
        return 'ERROR';
    }
    const begin  = Math.min(a, b);
    const end = Math.max(a, b);
    let finalSum = 0;

    for (let i = begin; i <= end; i++) {
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
