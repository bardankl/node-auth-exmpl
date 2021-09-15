const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  //get auth header value
  const bearerHeader = req.headers['authorization'];
  //check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ')[1];
    const currentUser = jwt.decode(bearer).user;
    req.token = bearer;
    req.currentUser = currentUser;
    jwt.verify(req.token, process.env.JWT_SECRET, (err) => {
      if (err) {
        res.sendStatus(403);
      } else {
        next();
      }
    });
  } else {
    res.sendStatus(403);
  }
}

module.exports = verifyToken;
