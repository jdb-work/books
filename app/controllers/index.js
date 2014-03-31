var books = Alloy.Collections.books;

var book = Alloy.createModel('books', {
	title : 'Great Expectations',
	author : 'Charles Dickens'
});

books.add(book);
book.save();

function showBook(event) {
	var selectedBook = event.source;
	var args = {
		title : selectedBook.title,
		author : selectedBook.author
	};
	var bookview = Alloy.createController("bookdetails", args).getView();

    if (OS_IOS) {
        $.navGroupWin.openWindow(bookview);
    }
    if (OS_ANDROID) {
        bookview.open();
    }
}

function addBook(){
    var addBookCtrl = Alloy.createController("addbook",{}).getView();
    if (OS_IOS) {
        $.navGroupWin.openWindow(addBookCtrl);
    }
    if (OS_ANDROID) {
        addBookCtrl.open();
    }
}

// Open main window
if(OS_IOS) { 
   $.navGroupWin.open(); 
} 
if (OS_ANDROID) { 
   $.index.open(); 
}