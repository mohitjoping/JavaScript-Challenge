// Activity 2: Object Methods 
// Task 3: Add a method to the book object that returns a string with book's title and author, and log the result of calling this method.

let book = {
    title: "The Alchemist",
    author: "Paulo Co",
    year: 1988,
};

book.getBookInfo = function() {
    return `${this.title} by ${this.author}`;
}

console.log(book.getBookInfo());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book.updateYear = function(year) {
    this.year = year;
}

book.updateYear(1990);
console.log(book);
