const getTheTitles = function(books) {
    let titles = [];
    for (book of books) {
        titles.push(book.title);
    }
    return titles; // use map
};

// Do not edit below this line
module.exports = getTheTitles;
