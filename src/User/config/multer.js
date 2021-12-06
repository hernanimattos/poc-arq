const path = require('path');
const multer = require('multer');
const crytpo = require('crypto');

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'temp', 'uploads'),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', 'temp', 'uploads'));
    },
    filename: (req, file, cb) => {
      crytpo.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        const fileName = `${hash.join('')}_${file.originalname}`;

        cb(null, fileName);
      });
    },
  }),
  limits: {
    filesize: 2 * 1024 * 1024,
  },
};
