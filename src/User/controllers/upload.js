// const Upload = require('../commands/upload');

// const newUpload = new Upload();
function Upload(req, res) {
  return res.json({ teste: 'hernani' });
}

module.exports = {
  Upload,
};
