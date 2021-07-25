const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Book = new Schema(
    {
        name: { type: String, required: true },
        author: { type: String, required: true },
        rating: { type: Number, required: true },
    },
    { timestamps: true },
);

module.exports = mongoose.model('books', Book);