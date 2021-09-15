const { User } = require('../models');

async function getUsers() {
  const users = await User.find({ isActive: true }).populate({
    path: 'permissions',
  });

  console.log('USeRs', users);
  return users;
}

async function getUserByEmail(email) {
  const users = await User.find({ email: email });
  return users;
}

async function userCreate(user) {
  const newUser = await (
    await User.create(user)
  ).populate('Permissions', 'permissions');
  console.log('NEW USER', newUser);
  return newUser;
}

async function userDelete(id) {
  return User.findByIdAndUpdate(id, { isActive: false });
}

async function userUpdate(user) {
  console.log(user);
  const newUser = await User.findByIdAndUpdate(user.id, user);
  console.log('RESULT', newUser);
  if (newUser) {
    return 'success';
  } else {
    return 'error';
  }
}

module.exports = {
  getUsers,
  userCreate,
  userDelete,
  getUserByEmail,
  userUpdate,
};
