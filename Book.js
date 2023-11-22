class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.id = Math.random() * 1000000;
        this.borrowed = false;
        this.copies = 1
        this.userBorrowed = []
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}


module.exports = Book;