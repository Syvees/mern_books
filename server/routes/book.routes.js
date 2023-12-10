const BookController = require("../controllers/book.controller");

module.exports = (app) => {
    app.get("/api/books", BookController.getAllBooks); // GET ALL
    app.get("/api/books/:id", BookController.getBook); // GET ONE
    app.post("/api/books", BookController.createBook); // CREATE
    app.put("/api/books/:id", BookController.updateBook); // UPDATE
    app.delete("/api/books/:id", BookController.deleteBook); // DELETE
} 