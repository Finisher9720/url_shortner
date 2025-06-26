const  shortid  = require('shortid');
const URL = require('../models/url');

async function handlegeneratenewshorturl(req,res) {
const body = req.body

if (!body) {
    return res.status(404).json({err:'url is req'})
}

    const shortID = shortid(8)
     await URL.create({
        shortID:shortID,
        redirecturl:body.url,
        visithistory:[],
    })
    return res.json({id :shortID})
}

module.exports = {
  handlegeneratenewshorturl,
};