const Author = require('../models/authorModel');
const mongoose = require('mongoose');
const {
  findAuthors,
  findAuthorById,
  saveAuthor,
  updateAuthor,
  deleteAuthor,
} = require('../db/authorDb');
const { JsonWebTokenError } = require('jsonwebtoken');

jest.mock('./authorDB.js');

describe('Author DB Tests', () => {
  test('As a user I want to save an author to the db', async () => {
    const newAuthor = new Author({
      _id: mongoose.Types.ObjectId(),
      name: 'Mike Leaf',
      book: '63dbsg83jkskieiiekkeld;948484',
      publisher: 'Tynsdale',
      website: 'http://www.tynsdale.com',
      twitter: '@leafy',
      about: "I'm leaving",
    });
    const savedAuthor = await saveAuthor(newAuthor);

    expect(savedAuthor.name).toEqual('Mike Leaf');
    expect(savedAuthor.book).toEqual('63dbsg83jkskieiiekkeld;948484');
    expect(savedAuthor.publisher).toEqual('Tynsdale');
    expect(savedAuthor.website).toEqual('http://www.tynsdale.com');
    expect(savedAuthor.twitter).toEqual('@leafy');
    expect(savedAuthor.about).toEqual("I'm leaving");
  });

  test('As a user I want to get all the authors', async () => {
    const authors = await findAuthors({});
    expect(authors[0].name).toEqual('Mike Leaf');
    expect(authors[0].book).toEqual('63dbsg83jkskieiiekkeld;948484');
    expect(authors[0].publisher).toEqual('Tynsdale');
    expect(authors[0].website).toEqual('http://www.tynsdale.com');
    expect(authors[0].twitter).toEqual('@leafy');
    expect(authors[0].about).toEqual("I'm leaving");
  });

  test('As a user I want to get an author', async () => {
    let id = null;
    const author = await findAuthorById({ _id: id });
    expect(author.name).toEqual('Mike Leaf');
    expect(author.book).toEqual('63dbsg83jkskieiiekkeld;948484');
    expect(author.publisher).toEqual('Tynsdale');
    expect(author.website).toEqual('http://www.tynsdale.com');
    expect(author.twitter).toEqual('@leafy');
    expect(author.about).toEqual("I'm leaving");
  });

  test('As a user I want to update a author', async () => {
    let id = null;
    const author = await updateAuthor({ _id: id });
    expect(author.acknowledged).toEqual(true);
    expect(author.modifiedCount).toEqual(1);
    expect(author.upsertedId).toEqual(null);
    expect(author.upsertedCount).toEqual(0);
    expect(author.matchedCount).toEqual(1);
  });

  test('As a user I want to delete a author', async () => {
    let id = null;
    const author = await deleteAuthor({ _id: id });
    expect(author.acknowledged).toEqual(true);
    expect(author.deletedCount).toEqual(1);
  });
});
