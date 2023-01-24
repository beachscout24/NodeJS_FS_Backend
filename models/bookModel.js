const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  ISBN: {
    type: String,
    required: true,
  },
  numberOfPages: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  yearPublished: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Book', bookSchema);
