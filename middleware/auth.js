const { getuser } = require("../service/auth");
async function restricttologgedinuseronly(req, res, next) {
  const useruid = req.cookies?.uid;
  if (!useruid) {
    return res.redirect("/login");
  }
  const userfrommap = getuser(useruid);

  if (!userfrommap) {
    return res.redirect("/login");
  }

  req.user = userfrommap;
  next();
}

async function checkauth(req,res,next) {
  const useruid = req.cookies?.uid;

  const userfrommap = getuser(useruid);

  
  req.user = userfrommap;
  next();
}
module.exports = {
  restricttologgedinuseronly,checkauth
};
