const fibonacci = function(input) {
    const n = Number(input);
    if (n <= 0) {
        return 'OOPS';
    } else if (n <= 2) {
        return 1;
    } else {
        return fibonacci(n - 2) + fibonacci (n - 1);
    }
};

// Do not edit below this line
module.exports = fibonacci;
