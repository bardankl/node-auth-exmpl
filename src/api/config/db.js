const mongoose = require('mongoose');

mongoose.set('toJSON', {
  virtuals: true,
  transform: (doc, converted) => {
    delete converted._id;
  },
});
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    // console.log('DB CONNCETED:', conn.connection.host);
  } catch (err) {
    console.error('DB ERROR', err);
    process.exit(1);
  }
};

module.exports = connectDb;
