const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  getBookById,
  postBook,
  updateBook,
  deleteBook,
  getAllBookIds,
} = require('../services/bookService');
const auth = require('../auth/authorization');

// http://localhost:3001/books
router.get('/', [auth, getAllBooks]);

// http://localhost:3001/books/books
router.get('/books', [auth, getAllBookIds]);

// http://localhost:3001/books/34
router.get('/:bookId', [auth, getBookById]);

// http://localhost:3001/books
router.post('/', [auth, postBook]);

// http://localhost:3001/books/34
router.put('/:bookId', [auth, updateBook]);

// http://localhost:3001/books/34
router.delete('/:bookId', [auth, deleteBook]);

module.exports = router;
