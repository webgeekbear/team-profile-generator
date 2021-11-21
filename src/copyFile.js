const fs = require('fs');

const copyFile = (from, to) => {
    return new Promise((resolve, reject) => {
      fs.copyFile(from, to, err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'Stylesheet created!'
        });
      });
    });
  };
  
  module.exports = copyFile;
  