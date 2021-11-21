const fs = require('fs');

// Write the content to a file.
const writeToFile = (name, fileContent) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(name, fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "File created!"
            });
        });
    });
};

module.exports = writeToFile;