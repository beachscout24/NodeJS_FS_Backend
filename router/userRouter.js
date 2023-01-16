const express = require('express');
const router = express.Router();

// http://localhost:3001/users
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Successful - GET',
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

// http://localhost:3001/users/34
router.get('/:id', (req, res, next) => {
  res.status(200).json({
    message: 'Successful - GET by ID',
    metadata: {
      id: req.params.id,
      hostname: req.hostname,
      method: req.method,
    },
  });
});

// http://localhost:3001/users
router.post('/', (req, res, next) => {
  const name = req.body.name;
  res.status(201).json({
    message: 'Successful - POST',
    metadata: {
      name: name,
      hostname: req.hostname,
      method: req.method,
    },
  });
});

// http://localhost:3001/users/34
router.put('/:id', (req, res, next) => {
  res.status(200).json({
    message: 'Successful - PUT by ID',
    metadata: {
      id: req.params.id,
      hostname: req.hostname,
      method: req.method,
    },
  });
});

// http://localhost:3001/users/34
router.delete('/:id', (req, res, next) => {
  res.status(200).json({
    message: 'Successful - DELETE by ID',
    metadata: {
      id: req.params.id,
      hostname: req.hostname,
      method: req.method,
    },
  });
});

module.exports = router;
