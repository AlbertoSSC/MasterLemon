console.log("************** DELIVERABLE 04 *********************");
//Read books

interface Book {
    title: string;
    isRead: boolean;
}
const books: Array<Book> = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

const isBookRead = (booksList: Array<Book>, title: string): boolean => {
    const book = booksList.find((book) => book.title === title);
    return book ? book.isRead : false;
}
console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Devas"));