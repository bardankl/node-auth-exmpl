let mongoose = require('mongoose');
const { restart } = require('nodemon');

// user Schema
let userSchema = mongoose.Schema(
  {
    // _id: Number,
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      dropDups: true,
    },
    position: {
      type: String,
      require: true,
    },
    permissions: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'Permission',
    },
    createDate: {
      type: Date,
      default: Date.now,
    },
    startWorking: {
      type: Date,
    },
    endWorking: {
      type: Date,
    },
    isActive: {
      type: Boolean,
    },
    isAdmin: {
      type: Boolean,
      require: true,
    },
    password: {
      type: String,
      select: false,
    },
  },
  {
    versionKey: false,
  }
);
userSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    delete ret.password;
    delete ret._id;
    return ret;
  },
});
let User = (module.exports = mongoose.model('User', userSchema));
