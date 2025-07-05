const { v4: uuidv4 } = require('uuid');
const User = require("../models/user");
const { setuser } = require('../service/auth');  

async function handleusersignup(req, res) {
  try {
    const { name, email, password } = req.body;
    await User.create({ name, email, password });

    return res.redirect("/");
  } catch (error) {
    console.error(":", error);
  }
}
async function handleuserlogin(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.render("login", { err: "invalid username or password" });
    }
    
    const token=setuser(user)
    res.cookie('uid',token)

    return res.redirect("/");
  } catch (error) {
    console.error(":", error);
  }
}

module.exports = {
  handleusersignup,
  handleuserlogin,
};
