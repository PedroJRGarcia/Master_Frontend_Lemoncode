const books = [
    { title: "Troya", isRead: false },
    { title: "Agriculture", isRead: true },
    { title: "Yeast", isRead: true },
];


function isBookRead (books, titleToSearch) {
    const matchTitle = books.find(book => book.title === titleToSearch && book.isRead);

    return Boolean(matchTitle) ? 
    "Yes, the book was read" : "No, the book wasn't read";
}

console.log(isBookRead(books, "Agriculture"));