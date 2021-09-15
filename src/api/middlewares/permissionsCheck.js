function verifyPermissions(permission) {
  return function (req, res, next) {
    if (req.currentUser.permissions.permissions.includes(permission)) {
      return next();
    } else {
      res.sendStatus(403);
    }
  };
}

module.exports = verifyPermissions;
