const findBooks = async (obj, selectValues) => {
  console.log('Mocked GET all books');
  return Promise.resolve([
    {
      title: 'A tree grows in Brooklyn',
      author: 'Mike Leaf',
      price: 9.99,
      ISBN: '345-57570-3930-0',
      numberOfPages: '500',
      yearPublished: '1999',
    },
  ]);
};

const findBook = async (obj, selectValues) => {
  console.log('Mocked GET Book');
  return Promise.resolve({
    title: 'A tree grows in Brooklyn',
    author: 'Mike Leaf',
    price: 9.99,
    ISBN: '345-57570-3930-0',
    numberOfPages: '500',
    yearPublished: '1999',
  });
};

const saveBook = async (newBook) => {
  console.log('Mocked Save Book');
  return Promise.resolve({
    title: 'A tree grows in Brooklyn',
    author: 'Mike Leaf',
    price: 9.99,
    ISBN: '345-57570-3930-0',
    numberOfPages: '500',
    yearPublished: '1999',
  });
};

const updateBook = async (filter, update) => {
  return Promise.resolve({
    acknowledged: true,
    modifiedCount: 1,
    upsertedId: null,
    upsertedCount: 0,
    matchedCount: 1,
  });
};

const deleteBook = async (obj) => {
  return Promise.resolve({
    acknowledged: true,
    deletedCount: 1,
  });
};

module.exports = { findBooks, findBook, saveBook, updateBook, deleteBook };
