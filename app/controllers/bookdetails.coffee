args = arguments_[0] or {}
console.log "title:" + args.title + ", author: " + args.author
$.titleLabel.text = args.title or "Default Title"
$.authorLabel.text = args.author or "Default author"