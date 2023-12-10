const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters long"]
    },
    author: {
        type: String,
        required: [true, "Author is required"],
        minlength: [3, "Author must be at least 3 characters long"]
    },
    pages: {
        type: Number,
        required: [true, "Pages is required"],
        min: [10, "Book must be at least 10 pages long"]
    },
    publishYear: {
        type: Number,
        required: [true, "Publish Year is required"],
        min: [1800, "Publish Year must be at least 1800"]
    },
    genre: {
        type: String,
        required: [true, "Genre is required"],
        minlength: [3, "Genre must be at least 3 characters long"]
    },
}, {timestamps: true});

module.exports = mongoose.model("Book", BookSchema);