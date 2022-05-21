const express = require('express');
const router = express.Router();
const Info = require('../models/Info.js')
const fetch = require('node-fetch');
const { findByIdAndUpdate } = require('../models/Info.js');

router.post('/updateData', async (req,res) =>{
    //Fetch data from Api
    const api_url = "https://api.wazirx.com/api/v2/tickers";
    const response = await fetch(api_url);
    const data = await response.json();
    const key = Object.keys(data);
    try {
      for (let i = 0; i < 10; i++) { 
        // Make a new crypto entry    
          var newObj = {};
          newObj.last = data[key[i]].last;
          newObj.name = data[key[i]].name;
          newObj.buy = data[key[i]].buy;
          newObj.sell = data[key[i]].sell;
          newObj.base_unit = data[key[i]].base_unit;
          newObj.volume = data[key[i]].volume;
    
        // Check if the entry with the same name already exists    
          var crypto = await Info.findOne({name: newObj.name});
          console.log(crypto.id);
        //If entry doesn't exist, make a new one  
          if(!crypto){
            newObj = Info.create({
                last: newObj.last,
                name: newObj.name,
                buy: newObj.buy,
                sell: newObj.sell,
                volume: newObj.volume,
                base_unit: newObj.base_unit
              });
            }else{
              newObj = await Info.findByIdAndUpdate(crypto.id, {$set: newObj}, {new:true});
             }
        }
          res.send('Data Updated Successfully');
    } catch (error) {
          res.status(500).json('Internal Server Error');
    }
  });

  module.exports = router;
  