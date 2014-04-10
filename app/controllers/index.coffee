showBook = (event) ->
    selectedBook = event.source
    args =
        title: selectedBook.title
        author: selectedBook.author

    bookview = Alloy.createController("bookdetails", args).getView()
    $.navGroupWin.openWindow bookview  if OS_IOS
    bookview.open()  if OS_ANDROID
    return
addBook = ->
    addBookCtrl = Alloy.createController("addbook", {}).getView()
    $.navGroupWin.openWindow addBookCtrl  if OS_IOS
    addBookCtrl.open()  if OS_ANDROID
    return
books = Alloy.Collections.books
book = Alloy.createModel("books",
    title: "Great Expectations"
    author: "Charles Dickens"
)
books.add book
book.save()

# Open main window
$.navGroupWin.open()  if OS_IOS
$.index.open()  if OS_ANDROID