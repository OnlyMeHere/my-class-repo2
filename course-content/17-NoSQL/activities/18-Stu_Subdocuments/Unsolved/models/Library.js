const mongoose = require('mongoose');

const bookData = [
  { title: 'Jaws', price: 10 },
]

// TODO: Define a new schema named `bookSchema` for the subdocument

const bookSchema = new mongoose.Scema({
  title: { trype: String, required: true },
  price: Number,
});

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  price: Number,
  // TODO: Add the `books` subdocument to the parent document as an array
  books: [bookSchema],
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`
const Library = new mongoose.Schema({
  books: [bookSchema]
});

// TODO: Create a new instance of the model including the subdocuments

Library.create = ({ name: Books, books: bookDate }, (err, data) )

module.exports = Library;
