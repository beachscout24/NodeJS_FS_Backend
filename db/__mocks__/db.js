const connect = async () => {
  console.log('MongoDB mocked connection');
};

const disconnect = async () => {
  console.log('Mocked Disconnection');
};

// obj {firstName: req.body.firstName, email: req.body.email}
const findUser = async (obj) => {
  return Promise.resolve({
    firstName: 'Eric',
    lastName: 'Clarke',
    address: '123 Main St',
    city: 'Orlando',
    state: 'FL',
    zipCode: '34256',
    email: 'eric@eric.com',
    password: '123',
  });
};

const saveUser = async (newUser) => {
  return Promise.resolve({
    firstName: 'Eric',
    lastName: 'Clarke',
    address: '123 Main St',
    city: 'Orlando',
    state: 'FL',
    zipCode: '34256',
    email: 'eric@eric.com',
    password: '123',
  });
};

module.exports = { connect, disconnect, findUser, saveUser };
