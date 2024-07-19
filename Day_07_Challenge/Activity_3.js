// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

let library = {
    name: "National Library",
    books: [
        {
            title: "The Alchemist",
            author: "Paulo Co",
            year: 1988,
        },
        {
            title: "The Little Prince",
            author: "Prince reader",
            year: 1943,
        },
    ],
};

console.log(library);

// Task 6: Acess and log the name of the library and the titles of all the books in the library.

console.log(library.name);
library.books.forEach(book => console.log(book.title));

