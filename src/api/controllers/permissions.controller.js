const {
  createPermissions,
  getPermissions,
  updatePermissions,
} = require('../services/permissions.service');

async function getPerm(req, res) {
  const id = req.body.id;
  const result = await getPermissions(id)
  return res.json(result);
}
async function createPermissionsController(req, res) {
  const id = req.body.id;
  console.log('CONTROLLER ID',id)
  const result = await createPermissions(id);
  return result ? res.sendStatus(200) : res.sendStatus(501);
}

async function updatePermissionsController(req, res) {
  const permissions = req.body;
  console.log(permissions);
  return res.sendStatus(200);
}

module.exports = {
  createPermissionsController,
  updatePermissionsController,
  getPerm,
};
