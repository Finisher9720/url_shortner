const  shortid  = require('shortid');
const URL = require('../models/url');

async function handlegeneratenewshorturl(req,res) {
const body = req.body

if (!body) {
    return res.status(404).json({err:'url is req'})
}

    const shortID = shortid()
     await URL.create({
        shortID:shortID,
        redirecturl:body.url,
        visithistory:[],
    })
    return res.json({id :shortID})
}

async function handlegetanalytics(req,res) {
     const shortID = req.params.shortid;
  const entry = await URL.findOne({shortID})
  return res.json({totalclicks :entry.visithistory.length ,analytics:entry.visithistory})

}

module.exports = {
  handlegeneratenewshorturl,handlegetanalytics
};