const express = require('express');
const {
  postAuthor,
  getAuthors,
  getAuthorsById,
  patchAuthor,
  deleteAuthor,
} = require('../services/authorService');
const router = express.Router();
const auth = require('../auth/authorization');

router.post('/', [auth, postAuthor]);

router.get('/', [auth, getAuthors]);

router.get('/:authorId', [auth, getAuthorsById]);

router.patch('/:authorId', [auth, patchAuthor]);

router.delete('/:authorId', [auth, deleteAuthor]);

module.exports = router;
