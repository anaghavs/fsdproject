const mongoose = require('mongoose');

//schema for reviews in the database
const reviewSchema = mongoose.Schema({
    rating: { type: Number, required: true },
    review: { type: String, required: true, maxlength: 240 },
    hospitalName: { type: String, ref: 'Hospital', required: true },
    username: { type: String, required: true }
});

//defining the name for the model & the schema you want to use
module.exports = mongoose.model('Reviews', reviewSchema);