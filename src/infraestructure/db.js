const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017');

db.on('eror', (erro) => {
  if (erro) {
    throw new Error(`message: ${erro}`);
  }
});
