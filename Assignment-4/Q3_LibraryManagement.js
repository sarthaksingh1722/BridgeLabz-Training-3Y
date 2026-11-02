"use strict";

// Create Book class
class Book {

    constructor(title, author, ISBN, isIssued = false) {

        this.title = title;

        this.author = author;

        this.ISBN = ISBN;

        this.isIssued = isIssued;
    }

    // Issue book
    issueBook() {

        if (this.isIssued) {

            console.log(`${this.title} is already issued.`);

        } else {

            this.isIssued = true;

            console.log(`${this.title} has been issued successfully.`);
        }
    }

    // Return book
    returnBook() {

        if (this.isIssued) {

            this.isIssued = false;

            console.log(`${this.title} has been returned.`);

        } else {

            console.log(`${this.title} was not issued.`);
        }
    }
}

// Create book objects
const book1 = new Book(
    "Java Programming",
    "James Gosling",
    "ISBN101"
);

const book2 = new Book(
    "Python Basics",
    "Guido van Rossum",
    "ISBN102"
);

const book3 = new Book(
    "Data Structures",
    "Mark Allen",
    "ISBN103"
);

const book4 = new Book(
    "JavaScript Guide",
    "David Flanagan",
    "ISBN104"
);

// Store books in array
const books = [book1, book2, book3, book4];

// Display available books
function displayAvailableBooks() {

    const availableBooks = books.filter(book => !book.isIssued);

    console.log("\n====== AVAILABLE BOOKS ======");

    availableBooks.forEach(book => {

        console.log(
            `${book.title} | ${book.author} | ${book.ISBN}`
        );
    });
}

// Issue book using ISBN
function issueBookByISBN(isbn) {

    const book = books.find(book => book.ISBN === isbn);

    if (book) {

        book.issueBook();

    } else {

        console.log("Book not found!");
    }
}

// Display available books
displayAvailableBooks();

// Issue a book
issueBookByISBN("ISBN102");

// Display available books again
displayAvailableBooks();

// Return the book
book2.returnBook();

// Final available books
displayAvailableBooks();