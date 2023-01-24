const errorTemplate = require('../templates/errorTemplate');
const {
  findBooks,
  findBook,
  saveBook,
  updateBook,
  deleteBook,
} = require('../db/bookDb');
const messages = require('../messages/messages');
const successTemplate = require('../templates/successTemplate');
const Book = require('../models/bookModel');
const mongoose = require('mongoose');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await findBooks({}, '-__v');
    res.status(200).json({
      message: messages.books_found,
      result: books,
    });
  } catch (e) {
    return errorTemplate(res, e, messages.book_not_found, 500);
  }
};

exports.getAllBookIds = async (req, res) => {
  try {
    const books = await findBooks({}, '_id, title');
    res.status(200).json({
      message: messages.books_found,
      result: books,
    });
  } catch (e) {
    return errorTemplate(res, e, messages.book_not_found, 500);
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await findBook({ _id: req.params.bookId }, '-__v');
    if (!book) {
      throw new Error(messages.book_not_found);
    } else {
      successTemplate(res, book, messages.book_found, 200);
    }
  } catch (e) {
    return errorTemplate(res, e, e.message, 500);
  }
};

exports.postBook = async (req, res) => {
  try {
    const bookStub = new Book();
    const foundBook = Object.assign(bookStub, req.body);
    const book = await findBook(foundBook);
    if (book) {
      throw new Error(messages.book_cataloged);
    } else {
      let newBook = new Book({
        _id: mongoose.Types.ObjectId(),
      });
      newBook = Object.assign(newBook, req.body);
      const savedBook = await saveBook(newBook);
      return successTemplate(res, savedBook, messages.book_saved, 201);
    }
  } catch (e) {
    return errorTemplate(res, e, e.message, 501);
  }
};

exports.updateBook = async (req, res) => {
  try {
    const id = req.params.bookId;
    const book = new Book();
    const update = Object.assign(book, req.body);
    const result = await updateBook({ _id: id }, update);
    return successTemplate(res, result, messages.book_updated, 200);
  } catch (e) {
    return errorTemplate(res, e, messages.book_not_updated, 500);
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const id = req.params.bookId;
    const result = await deleteBook({ _id: id });
    return successTemplate(res, result, messages.book_deleted, 200);
  } catch (e) {
    return errorTemplate(res, e, messages.book_not_deleted, 500);
  }
};
