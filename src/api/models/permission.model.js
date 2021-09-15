let mongoose = require('mongoose');

// user Schema
let permissionsSchema = mongoose.Schema(
  {
    id: Number,
    permissions: {
      type: [String],
      require: true,
    },
  },
  {
    versionKey: false,
  }
);

let Permissions = (module.exports = mongoose.model('Permission', permissionsSchema));
