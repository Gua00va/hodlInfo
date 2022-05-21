const mongoose = require('mongoose');
const { Schema } = mongoose;

const InfoSchema = new Schema({    
    last: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    buy:{
        type: Number,
        required: true
    },
    sell: {
        type: Number,
        required: true
    },
    volume: {
        type: Number,
        required: true
    },
    base_unit: {
        type: String,
        required: true
    },
  });

  const Info = mongoose.model('info', InfoSchema);
  Info.createIndexes();
  module.exports = Info;