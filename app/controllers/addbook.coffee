addBookToCollection = (model="books") ->
    book = Alloy.createModel(model,
        title: $.titleInput.value
        author: $.authorInput.value
    )
    books.add book
    book.save()

    #todo: extract close() side-effect
    $.addbook.close()
    return

books = Alloy.Collections.books