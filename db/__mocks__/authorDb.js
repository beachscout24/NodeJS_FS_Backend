const saveAuthor = async (newAuthor) => {
  console.log('Mocked Author Save');
  return Promise.resolve({
    name: 'Mike Leaf',
    book: '63dbsg83jkskieiiekkeld;948484',
    publisher: 'Tynsdale',
    website: 'http://www.tynsdale.com',
    twitter: '@leafy',
    about: "I'm leaving",
  });
};

const findAuthors = async (obj) => {
  console.log('Mocked Get All Author');
  return Promise.resolve([
    {
      name: 'Mike Leaf',
      book: '63dbsg83jkskieiiekkeld;948484',
      publisher: 'Tynsdale',
      website: 'http://www.tynsdale.com',
      twitter: '@leafy',
      about: "I'm leaving",
    },
  ]);
};

const findAuthorById = async (obj) => {
  console.log('Mocked Author GET');
  return Promise.resolve({
    name: 'Mike Leaf',
    book: '63dbsg83jkskieiiekkeld;948484',
    publisher: 'Tynsdale',
    website: 'http://www.tynsdale.com',
    twitter: '@leafy',
    about: "I'm leaving",
  });
};

const updateAuthor = async (filter, update) => {
  console.log('Mocked Author Update');
  return Promise.resolve({
    acknowledged: true,
    modifiedCount: 1,
    upsertedId: null,
    upsertedCount: 0,
    matchedCount: 1,
  });
};

const deleteAuthor = async (obj) => {
  console.log('Mocked Author Delete');
  return Promise.resolve({
    acknowledged: true,
    deletedCount: 1,
  });
};

module.exports = {
  findAuthors,
  findAuthorById,
  saveAuthor,
  updateAuthor,
  deleteAuthor,
};
