const util = require('util');
const fs = require('fs');

module.exports = {
    readDir: util.promisify(fs.readdir),
    readFile: util.promisify(fs.readFile),
    rename: util.promisify(fs.rename)
};