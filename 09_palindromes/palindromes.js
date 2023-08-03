const palindromes = function (text) {
    const processedText = removePunctuationAndSpace(text).toLowerCase();
    const arr = Array.from(processedText);
    let len = arr.length;
    const midElem = Math.floor(len / 2) + 1;

    for (let i = 0; i < midElem; i++) {
        if (arr[i] != arr[len - 1 - i]) {
            return false;
        }
    }
    return true;
};

function removePunctuationAndSpace(text) {
    let punctuations = /[\.,?! ]/g;
    let newText = text.replace(punctuations, '');
    return newText;
}

// Do not edit below this line
module.exports = palindromes;
