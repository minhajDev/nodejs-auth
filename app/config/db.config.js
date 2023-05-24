const mongoose = require('mongoose');

mongoose
  .connect('mongodb+srv://minhajDev:M5u2pGLVyl4uHLNi@cluster0.ljkbzjc.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Successfully connect to MongoDB.');
  })
  .catch((err) => {
    console.error('Connection error', err);
    process.exit();
  });

module.exports = mongoose;
