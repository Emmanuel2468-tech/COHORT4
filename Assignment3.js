class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.available = true;
    }
    borrowBook() {
        if (this.available) {
            this.available = false;
            console.log(`${this.title} has been borrowed`);
        } else {
            console.log(`${this.title} is not available`);
        }
    }
    returnBook () {
this.available = true;
console.log(`${this.title} has been returned.`);
    }
    set ISBN (value) {
        if (value.lenght === 13) {
            this.ISBN = value;
        } else {
            console.log ("Invalid ISBN.")
        }
    }
}

class library {
    constructor () {
        this.books = [];
    }
    addBook (book) {
        this.books.push (book);
    }
    removeBook (ISBN) {
        this.books = this.books.filter((book) => book.ISBN !== ISBN);
    }
    findBookByTitle (title) {
        return
        this.books.find ((book) => book.title === title);
    }
}

class digitalLibrary {
    downloadBook (ISBN) {
        const book = this.books.find ((book) => book.ISBN === ISBN);
        if (book && book.available)
        {
            console.log(`${book.title} has been downloaded.`);

        } else {
            console.log(`${book.title} is not available for download.`);
        }
    }
}

const libraries = new library ();
const book1 = new Book ("Everyday Greatness", "David K.Hatch", "978-1-4016-0241-3")
const book2 = new Book ("Winning Prayer", "David O.Oyedepo", "978-978-248-089-7")


book1.borrowBook()
console.log(book1.available);

book1.returnBook();
console.log(book1.available);



