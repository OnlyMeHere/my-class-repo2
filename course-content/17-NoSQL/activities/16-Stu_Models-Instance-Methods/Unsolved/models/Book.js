const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: String,
    price: { type: Number, required: true },

})

// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function () {
    const discountPrice
}


// TODO: Create a model named `Book`

// TODO: Create a new instance of the model

// TODO: Call the custom instance method on the instance

module.exports = Book;
