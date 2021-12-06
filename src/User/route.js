const route = require('express').Router();
const { Upload } = require('./controllers/upload');
const multer = require('multer');
const multerConfig = require('./config/multer');

route.post('/upload', multer(multerConfig).single('file'), Upload);

module.exports = route;
