'use strict';

const reader = require('./lib/reader.js');

const essaysPath = `${__dirname}/data/essays.txt`;
const hamletPath = `${__dirname}/data/hamlet.txt`;
const macbethPath = `${__dirname}/data/macbeth.txt`;

const printText = (text) => {
  console.log(text);
  console.log('---------------------------------------------------------------------------------------');
};

const files = [essaysPath, hamletPath, macbethPath];

const readFileArrayAsync = (fileArray, currentIndex, callback) => {
  if (currentIndex >= fileArray.length) {
    return callback();
  }
  const currentFilePath = fileArray[currentIndex];
  try {
    return reader.textFileReaderAsync(currentFilePath, (file) => {
      printText(file);
      readFileArrayAsync(fileArray, currentIndex +1, callback);
    });
  } catch (error) {
    console.log('ERROR', error);
  }
  return undefined;
};

readFileArrayAsync(files, 0, () => console.log('All files have read'));