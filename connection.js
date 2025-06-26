const mongoose = require('mongoose');

async function connecttomongodb(url) {
    mongoose
      .connect(url)
      .then(() => console.log("MongoDB Connected"))
      .catch((err) => console.error("Connection error:", err));
}

module.exports = {connecttomongodb}