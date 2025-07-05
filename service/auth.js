const jwt = require("jsonwebtoken");
const secretkey = "abcde12345";

function setuser(user) {
  const payload = {
    ...user,
  };
  return jwt.sign(payload, secretkey);
}
function getuser(token) {
  if (!token) {
    return null;
  }
  return jwt.verify(token, secretkey);
}

module.exports = {
  setuser,
  getuser,
};
