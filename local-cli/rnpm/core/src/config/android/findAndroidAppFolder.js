const fs = require('fs');
const path = require('path');

/**
 * @param  {String} folder Folder to seek in
 * @return {String}
 */
module.exports = function findAndroidAppFolder(folder) {
  const flat = 'android';
  const nested = path.join('android', 'app');

  if (fs.existsSync(path.join(folder, nested))) {
    return nested;
  }

  if (fs.existsSync(path.join(folder, flat))) {
    return flat;
  }

  return null;
};
