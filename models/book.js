// book.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var BookSchema = new Schema({
	title: String,
	author: String,
	image: String,
	releaseDate: String
});	

// create a model from that schema
var Book = mongoose.model('Book', BookSchema);

// export Book from this module
module.exports = Book;
