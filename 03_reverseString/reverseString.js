const reverseString = function(str) {
    const len = str.length;
    if (len < 2) {
        return str;
    }
    let result = '';
    for (let i = len - 1; i >= 0; i--) {
        result += str.charAt(i);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
