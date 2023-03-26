const mongoose = require('mongoose');
const uri = ''; // doğru değişken adını kullanıyoruz

module.exports = {
  connect: () => {
    mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      })
      .then(() => console.log('MongoDB connection established!'))
      .catch((err) => console.log('MongoDB connection error:', err.message));
  }
};
