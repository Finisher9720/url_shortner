const express = require('express');
const router = express.Router();
const URL = require("../models/url");

// GET route
router.get('/', async(req, res) => {
    const allurls = await URL.find({})

  res.render('home',{ urls : allurls});
});



module.exports = router;