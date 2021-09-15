const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./api/config/db');
const morgan = require('morgan');
const {
  UsersRoute,
  MainRoute,
  Auth,
  PermissionsRoute,
} = require('./api/routes');
const { ValidationError } = require('express-validation');
dotenv.config();

connectDb();
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use('/api', MainRoute);
app.use('/api/auth', Auth);
app.use('/api/users', UsersRoute);
app.use('/api/permissions', PermissionsRoute);

app.use(function (err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  return res.status(500).json(err);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('server started at ' + PORT));
