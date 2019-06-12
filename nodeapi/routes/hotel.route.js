
const express = require('express');
const app = express();
const hotelRoutes = express.Router();

// Require Business model in our routes module
let Hotel = require('../models/Hotels');

// Defined store route
hotelRoutes.route('/add').post(function (req, res) {
  let hotel = new Hotel(req.body);
  hotel.save()
    .then(hotel=> {
      res.status(200).json({'hotel': 'business in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});



// Defined get data(index or listing) route
hotelRoutes.route('/').get(function (req, res) {
  Hotel.find(function (err, hotel){
    if(err){
      console.log(err);
    }
    else {
      res.json(hotel);
    }
  });
});



module.exports = hotelRoutes;