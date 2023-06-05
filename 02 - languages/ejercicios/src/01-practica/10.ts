console.log("********************************  110 - Read Book");

// Ejemplo:
var booksReaded = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

// function isBookReaded(bookList, titleToSearch) {
//     for (let book of bookList) {
//         if (book.title === titleToSearch && book.isRead) return true;
//     }
//     return false;
// }

function isBookReaded(bookList, titleToSearch) {
    const book = bookList.find(book => book.title === titleToSearch);
    return book ? book.isRead : false;
}

console.log(isBookReaded(booksReaded, "Devastación")); // true
console.log(isBookReaded(booksReaded, "Canción de hielo y fuego")); // false
console.log(isBookReaded(booksReaded, "Los Pilares de la Tierra")); // false