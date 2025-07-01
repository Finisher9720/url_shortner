const express = require("express");
const path = require("path");
const { connecttomongodb } = require("./connection");
const cookieparser = require('cookie-parser');
const { restricttologgedinuseronly ,checkauth} = require('./middleware/auth');

const URL = require("./models/url");

const urlroute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const userRoute = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieparser());

// connection
connecttomongodb("mongodb://localhost:27017/myshorturl");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// routes

app.use("/url",restricttologgedinuseronly, urlroute);
app.use("/user", userRoute);
app.use("/",checkauth, staticRoute);

app.get("/url/:shortid", async (req, res) => {
  const shortID = req.params.shortid;
  const entry = await URL.findOneAndUpdate(
    {
      shortID,
    },
    { $push: { visithistory: { timestamp: Date.now() } } }
  );
  res.redirect(entry.redirecturl);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:3000`);
});
