const Book = require("../models/book.model");

// CREATE
module.exports.createBook = (req, res) => {
    Book.create(req.body)
        .then(book => res.json(book))
        .catch(err => {res.status(500).json(err)})
}

// GET ALL
module.exports.getAllBooks = (req, res) => {
    Book.find({}).sort({name: 1}) // WITH SORTING
        .then(books => {
            console.log(books);
            res.json(books)
        })
        .catch(err => res.json({message: "Something went wrong", error:err}))
}

// GET ONE
module.exports.getBook = (req, res) => {
    Book.findOne({_id:req.params.id})
        .then(book => res.json(book))
        .catch(err => res.json({message: "Something went wrong", error:err}))
    }

// UPDATE
module.exports.updateBook = (req, res) => {
    Book.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators: true})
        .then(updatedBook => res.json(updatedBook))
        .catch(err => {res.status(500).json(err)})
}

// DELETE
module.exports.deleteBook = (req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json({message: "Something went wrong", error:err}))
}