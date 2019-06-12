const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let Hotel = new Schema({
    hotel_name: {
      type: String
    },
    number_of_rooms: {
      type: Number
    },
  location: {
      type:String
    },
   lat: {
        type: String
      },
   lon: {
        type: String
      },
  },{
      collection: 'hotels'
  });
  
  module.exports = mongoose.model('Hotel', Hotel);