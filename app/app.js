const express = require('express');
const cors = require('cors');
const app = express();
// use middleware to form our contract for incoming json payloads ONLY!!
app.use(express.json());
// use middleware for url encoding
app.use(express.urlencoded({ extended: true }));
// use middleware to handle cors policy
app.use(cors());

// health point or actuator
app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'Service is up' });
});

// routers
// app.use("/register", registrationRouter)
// bad url or error we can handle
// with middleware
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
      status: error.status,
    },
  });
});

module.exports = app;
