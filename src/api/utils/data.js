const {writeFileSync} = require('fs');
const {join} = require('path');



function getPath(path) {
  return join(__dirname, '../data', path);
}



module.exports.load = (path) => {
  return require(getPath(path));
};



module.exports.save = (path, json) => {
  writeFileSync(
    getPath(path),
    JSON.stringify(
      json,
      null,
      2
    )
  );
};