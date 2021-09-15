const { Joi } = require('express-validation');

const userValidation = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phone: Joi.string().required(),
    position: Joi.string().required(),
    startWorking: Joi.date().required(),
    endWorking: Joi.date(),
    isAdmin: Joi.boolean().required(),
  }),
};

module.exports = userValidation;