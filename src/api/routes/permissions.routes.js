const express = require('express');
const router = express.Router();
const verifyToken = require('../auth/index');
const {
  createPermissionsController,
  updatePermissionsController,
  getPerm,
} = require('../controllers/permissions.controller');

router.get('/', [verifyToken], getPerm);
router.post('/create', [verifyToken], createPermissionsController);

router.post('/update', [verifyToken], updatePermissionsController);

module.exports = router;
