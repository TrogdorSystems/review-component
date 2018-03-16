const mongoose = require('mongoose');
// var autoIncrement = require("mongodb-autoincrement");


mongoose.connect('mongodb://localhost/Restaurants_Reviews')

// mongoose.plugin(autoIncrement.mongoosePlugin);

const restaurantSchema = mongoose.Schema({
  restaurantId: Number,
  restaurantName: String,
  username: String,
  city: String,
  dinedDate: String,
  rating: Number,
  review: [],
});
  // restaurantId: Number,
  // restaurantName: String,
  // restaurantReviews: [
  //   {
  //     username: String,
  //     city: String,
  //     dinedDate: String,
  //     rating: Number,
  //     review: String,
  //   },
  // ],
// const restaurantSchema = mongoose.Schema({
//       id: Number,
//       username: String,
//       city: String,
//       dinedDate: String,
//       rating: Number,
//       review: String
//   });


const Restaurant = mongoose.model('Restaurant', restaurantSchema);

function insertOne(restaurant, callback) {
  Restaurant.create(restaurant, callback).exec();
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
