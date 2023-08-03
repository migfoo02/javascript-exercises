const removeFromArray = function(arr, ...args) {
    let newArray = [];
    const toRemoveArray = Array.from(args);
    const len = arr.length;
    for (item of arr) { //alt: use forEach function
        if (!toRemoveArray.includes(item)) {
            newArray.push(item);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
