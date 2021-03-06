// Generated by CoffeeScript 1.7.1
(function() {
  var addBook, book, books, showBook;

  showBook = function(event) {
    var args, bookview, selectedBook;
    selectedBook = event.source;
    args = {
      title: selectedBook.title,
      author: selectedBook.author
    };
    bookview = Alloy.createController("bookdetails", args).getView();
    if (OS_IOS) {
      $.navGroupWin.openWindow(bookview);
    }
    if (OS_ANDROID) {
      bookview.open();
    }
  };

  addBook = function() {
    var addBookCtrl;
    addBookCtrl = Alloy.createController("addbook", {}).getView();
    if (OS_IOS) {
      $.navGroupWin.openWindow(addBookCtrl);
    }
    if (OS_ANDROID) {
      addBookCtrl.open();
    }
  };

  books = Alloy.Collections.books;

  book = Alloy.createModel("books", {
    title: "Great Expectations",
    author: "Charles Dickens"
  });

  books.add(book);

  book.save();

  if (OS_IOS) {
    $.navGroupWin.open();
  }

  if (OS_ANDROID) {
    $.index.open();
  }

}).call(this);
