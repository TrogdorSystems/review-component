const mongoose = require('mongoose');
// var autoIncrement = require("mongodb-autoincrement");


mongoose.connect('mongodb://localhost/Restaurants_Reviews')

const restaurantSchema = mongoose.Schema({
  restaurantId: Number,
  restaurantName: String,
  username: String,
  city: String,
  dinedDate: String,
  rating: Number,
  review: [],
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

function insertOne(restaurant, callback) {
  Restaurant.create(restaurant, callback);
}

function findByRestaurantId(id, callback) {
  Restaurant.find({ restaurantId: id }).exec((err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

function findRestaurantByName(name, callback) {
  restaurant.find({ restaurantName: name}).exec((err, results) => {
    if(err) {
      callback(err, null);
    }else{
      callback(null, results);
    }
  })
}

module.exports.insertOne = insertOne;
module.exports.findByRestaurantId = findByRestaurantId;
module.exports.findRestaurantByName =findRestaurantByName;
module.exports.Restaurant = Restaurant;
