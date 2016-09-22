var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

// require Book
module.exports.Book = require("./book.js");

