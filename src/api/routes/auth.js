
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    res.sendStatus(404);
  });

  router.get('/login', (req, res) => {
    const user = {
      id: 1,
      name: 'John',
      LastName: 'Doe',
      permissions:['canCreateUser', 'canViewUsers']
    };
    jwt.sign({ user }, process.env.JWT_SECRET, (err, token) => {
      res.json({ token });
    });
  });

  module.exports = router;