const AdminPermissions = [
  'canViewUsers',
  'canCreateUser',
  'canUpdateUser',
  'canDeleteUser',
  'canChangePassword',
];

const UserPermissions = ['canChangePassword'];

// 60b3ce12a657e62b30240ac5   admin
// 60b3d0d7d908a45d30ef89b0   user

// const PERMS = {
//   admin: 1,
//   user: 2,
// };
const PERMS = {
  admin: '60b4873dfb023963184d27c2',
  user: '60b487922ec6e7114c1731f6',
};
module.exports = { AdminPermissions, UserPermissions, PERMS };
