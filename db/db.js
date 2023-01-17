require('dotenv').config();
const mongoose = require('mongoose');

const connect = async () => {
  await mongoose.connect(process.env.mongo, () => {
    console.log(`MongoDB is up and running`);
  });
};

module.exports = { connect };
