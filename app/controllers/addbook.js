var books = Alloy.Collections.books;

function addBookToCollection() {
    var book = Alloy.createModel('books', {
        title : $.titleInput.value,
        author : $.authorInput.value
    });
    books.add(book);
    book.save();
    //todo: extract close() side-effect
    $.addbook.close();
} 