const express = require('express');
const router = express.Router();
const Info = require('../models/Info.js')
const fetch = require('node-fetch');
const { findByIdAndUpdate } = require('../models/Info.js');

router.get('/getData', async (req, res)=>{
    var allData = [];
    allData = await Info.find()
    res.json(allData);
})

module.exports = router;