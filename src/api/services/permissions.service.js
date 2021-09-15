const { Permissions } = require('../models');
const {
  AdminPermissions,
  UserPermissions,
  PERMS,
} = require('../constants/permissions');


async function createPermissions(id) {
  const perms = id === 1 ? AdminPermissions : UserPermissions;
  const newPerms = {
    id,
    permissions: perms,
  };
  const result = await Permissions.create(newPerms);
  return result;
}
async function updatePermissions(id) {
  const perms = id === 1 ? AdminPermissions : UserPermissions;
  const result = await Permissions.findByIdAndUpdate(id, perms);
  return result;
}
async function getPermissions(id) {
  const result = await Permissions.find();
  return result;
}

module.exports = { createPermissions, updatePermissions, getPermissions };
