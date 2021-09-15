const {
  getUsers,
  userCreate,
  userDelete,
  userUpdate,
} = require('../services/users.service');
const {
  AdminPermissions,
  UserPermissions,
  PERMS,
} = require('../constants/permissions');

const bcrypt = require('bcryptjs');
async function getAllUsers(req, res) {
  const users = await getUsers();
  return res.json(users);
}

async function createUser(req, res) {
  const newUser = req.body;
  const createDate = new Date(Date.now());
  newUser.createDate = createDate.toString();
  newUser.isActive = true;
  newUser.isAdmin
    ? (newUser.permissions = PERMS.admin)
    : (newUser.permissions = PERMS.user);
  newUser.password = await bcrypt.hash(newUser.password, 10);
  //   return res.json(newUser);
  const user = await userCreate(newUser);
  // const {password,...result} = user;
  console.log(user);
  return res.json(user);
}
async function updateUser(req, res) {
  const user = req.body;
  user.isAdmin
    ? (user.permissions = AdminPermissions)
    : (user.permissions = UserPermissions);
  const result = await userUpdate(user)
    .then((r) => res.sendStatus(200))
    .catch((er) => res.sendStatus(404));
}
async function deleteUser(req, res) {
  const id = req.body.id;
  const result = await userDelete(id)
    .then((r) => res.sendStatus(200))
    .catch((er) => res.sendStatus(404));
}
async function dismissUser(req, res) {
  return;
}
async function getSingleUser(req, res) {
  return;
}
async function updateUserPassword(req, res) {
  return;
}

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  dismissUser,
  getSingleUser,
  updateUserPassword,
};
