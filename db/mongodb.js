const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Restaurants_Reviews')


const restaurantSchema = mongoose.Schema({
  restaurantId: Number,
  restaurantName: String,
  restaurantReviews: [
    {
      username: String,
      city: String,
      dinedDate: Date,
      rating: Number,
      review: String,
    },
  ],
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

function insertOne(restaurant, callback) {
  Restaurant.create(restaurant, callback);
}

// function findByRestaurantId(id, callback) {
//   Restaurant.find({ restaurantId: id }).exec((err, results) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, results);
//     }
//   });
// }


function findByRestaurantId(id) {
  return Restaurant.find({ restaurantId: id }).limit(1).lean();
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
