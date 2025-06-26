const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
const urlroute = require('./routes/url');
const { connecttomongodb} = require('./connection');




// connection
connecttomongodb("mongodb://localhost:27017/myshorturl")

// routes
app.use("/url", urlroute);



app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:3000`);
});