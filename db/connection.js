const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017';
const dbName = 'CRUDapp';

mongoose.connect(`${url}/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

module.exports = mongoose;
