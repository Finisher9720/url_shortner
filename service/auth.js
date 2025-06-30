const sessionIdtousermap = new Map();

function setuser(id,user) {
    sessionIdtousermap.set(id,user)
}
function getuser(id) {
    return sessionIdtousermap.get(id)
}

module.exports = {
  setuser,getuser
};