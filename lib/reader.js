'use strict';

const fs = require('fs');
const reader = module.exports = {};

reader.textFileReaderAsync = (filePath, callback) => {
  console.log('reading');
  return fs.readFile(filePath, (error, fileBuffer) => {
    if (error) {
      throw error;
    }
    return callback(fileBuffer.toString());
  });
};
