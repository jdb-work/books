// Generated by CoffeeScript 1.7.1
(function() {
  var args;

  args = arguments_[0] || {};

  console.log("title:" + args.title + ", author: " + args.author);

  $.titleLabel.text = args.title || "Default Title";

  $.authorLabel.text = args.author || "Default author";

}).call(this);
