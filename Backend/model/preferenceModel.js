const Users = require('../model/userModel');
const mongoose = require('mongoose');

const preferenceSchema = mongoose.Schema({
    titlep: { type: String},
    user: {type: String, ref: 'Users'} // assuming you name your model User
 });
 
 module.exports = mongoose.model("Preference", preferenceSchema);