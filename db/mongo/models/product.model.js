const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  _id: {
    type: Schema.Types.Number,
  },
  name: {
    type: Schema.Types.String,
    index: true
  },
  price: Schema.Types.String,
  availableOnPrime: Schema.Types.Boolean,
  numberOfReviews: Schema.Types.Number,
  averageStarRating: Schema.Types.Number,
  image: Schema.Types.String,
  relatedProducts: {
    type: [Schema.Types.Number],
    ref: 'product'
  },
  frequentProducts: {
    type: [Schema.Types.Number],
    ref: 'product'
  }
});

module.exports = productSchema;
