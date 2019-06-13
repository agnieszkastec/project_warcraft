const {load} = require('../utils/data');



module.exports.getEmail = (request) => {
  let data = load('user.json');
  let email = null;

  const {
    token
  } = request.body;

  Object
    .entries(data)
    .forEach(([key, value]) => {
      if (value.token === token) {
        email = key;
      }
    });

  return email;
}