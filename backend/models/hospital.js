//creating the model for hotels to be used with the databse
//this is just the blueprint/parameters for our data
const mongoose = require('mongoose');

//hotel schema
const hospitalSchema = mongoose.Schema({
    header: { type: String, default: 'TAG' },
    name: { type: String, required: true, maxlength: 30 },
    state: { type: String, required: true, maxlength: 30 },
    district: { type: String, maxlength: 30 },
    fee: { type: String },
    zeroByte: { type: String },
    description: { type: String, maxlength: 30 },
    rating: { type: String },
    type: { type: String, maxlength: 15 }
});

//defining the name for the model & the schema you want to use
module.exports = mongoose.model('Hospital', hospitalSchema);