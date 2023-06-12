console.log("************** DELIVERABLE 04 *********************");
var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
var isBookRead = function (booksList, title) {
    var book = booksList.find(function (book) { return book.title === title; });
    return book ? book.isRead : false;
};
console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Devas"));
