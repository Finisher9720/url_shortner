const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
const urlroute = require("./routes/url");
const { connecttomongodb } = require("./connection");
const URL = require("./models/url");

// connection
connecttomongodb("mongodb://localhost:27017/myshorturl");

// routes
app.use("/url", urlroute);

app.get("/:shortid", async (req, res) => {
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
