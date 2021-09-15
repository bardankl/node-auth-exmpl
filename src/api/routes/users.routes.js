const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const verifyToken = require('../auth/index');
const verifyPermissions = require('../middlewares/permissionsCheck');
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  dismissUser,
  getSingleUser,
  updateUserPassword,
} = require('../controllers/users.controller');
const { userValidation, loginValidation } = require('../validations');
const { validate } = require('express-validation');

router.get('/', [verifyToken, verifyPermissions('canViewUsers')], getAllUsers);

router.post(
  '/create',
  [
    validate(userValidation, {}, {}),
    verifyToken,
    verifyPermissions('canCreateUser'),
  ],
  createUser
);

router.post(
  '/update',
  [verifyToken, verifyPermissions('canCreateUser')],
  updateUser
);

router.post(
  '/delete',
  // [verifyToken, verifyPermissions('canDeleteUser')],
  [verifyToken, verifyPermissions('canCreateUser')],
  deleteUser
);

router.post(
  '/dismiss',
  [verifyToken, verifyPermissions('canUpdateUser')],
  dismissUser
);

router.get(
  '/getSingleById',
  [verifyToken, verifyPermissions('canViewUsers')],
  getSingleUser
);

router.post(
  '/updatePassword',
  [verifyToken, verifyPermissions('canChangePassword')],
  updateUserPassword
);

module.exports = router;
