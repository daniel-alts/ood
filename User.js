class User {
    constructor(name) {
        this.name = name;
        this.isRegistered = false;
        this.booksBorrowed = [];
    }

    readBook(book) {
        const summary = book.getSummary();
        console.log(summary);
    }

    addBook(book) {
        this.booksBorrowed.push(book);
    }

    removeBook(book) {
        this.booksBorrowed = this.booksBorrowed.filter(b => b.id !== book.id);
    }
   
}

module.exports = User;
