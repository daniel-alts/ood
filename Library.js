class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }

    borrowBook(book, user) {
        const _book = this.books.find(b => b.id === book.id);
        if (user.booksBorrowed.length >= 3) {
            return false
        }

        if (_book.borrowed) {
            return false
        }

        _book.borrowed = true;
        user.addBook(book);

        return true;
    }

    returnBook(book, user) {
        const _book = this.books.find(b => b.id === book.id);

        _book.borrowed = false;

        _book.userBorrowed = _book.userBorrowed.filter(u => u.id !== user.id);
        
        user.removeBook(book);
    }

    registerBook(book) {
        // check if book already exists
        // if it does, increment the copies
        this.books.push(book);
    }

    registerUser(user) {
        this.users.push(user);
    }
}

module.exports = Library;