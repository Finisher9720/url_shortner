const express = require('express');
const router = express.Router();

const { handlegeneratenewshorturl, } = require('../controller/url');

router.post('/', handlegeneratenewshorturl);

// router.get("/:shortid", async (req, res) => {
//   const shortid = req.params.shortid;
//   const entry  = await URL.findOneAndUpdate(
//     {
//       shortid
//     },
//     { $push: { visithistory: Date.now } }
//   );
//   res.redirect(entry.redirecturl)
// });

module.exports = router;
