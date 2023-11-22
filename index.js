// Library management system
const Book = require("./Book");
const User = require("./User");
const Library = require("./Library");


const library = new Library();

// create books
const book1 = new Book("The Alchemist", "Paulo Coelho", 1988);
const book2 = new Book("Things Fall Apart", "Chinua Achebe", 1958);
const book3 = new Book("How to Say Babylon", "Safiya Sinclair", 2023);
const book4 = new Book("Harry Potter", "Harry Maguire", 1810);
const book5 = new Book("Daniel Writes JS", "Usman Danfolio", 2033);
const book6 = new Book("The avatar", "Ella Manuealla", 2024);
const book7 = new Book("No Excuses", "Bryan Tracy", 2011);



// create users
const user1 = new User("Daniel");
const user2 = new User("John");
const user3 = new User("Jane");
const user4 = new User("James");
const user5 = new User("Mary");


// register books
library.registerBook(book1);
library.registerBook(book2);
library.registerBook(book3);
library.registerBook(book4);
library.registerBook(book5);
library.registerBook(book6);
library.registerBook(book7);

// register users
library.registerUser(user1);
library.registerUser(user2);
library.registerUser(user3);
library.registerUser(user4);
library.registerUser(user5);


// borrow books
library.borrowBook(book1, user1);
console.log(user1);
console.log(book1);

// borrow books
library.borrowBook(book1, user2);
console.log(user2);

// return a book and a new user should borrow it
library.returnBook(book1, user1);
library.borrowBook(book1, user2);
console.log(user1);
console.log(book1);
console.log(user2);

