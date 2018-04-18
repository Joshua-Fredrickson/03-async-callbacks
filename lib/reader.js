'use strict';

const fs = require('fs');

const reader = module.exports = {};

reader.textFileReaderAsync = (filePath, callback) => {
  return fs.readFile(filePath, 'utf8', (error, callback) => {
    if (error) {
      throw error;
    }
    return callback;
  });
};
