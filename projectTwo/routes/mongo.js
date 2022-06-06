const { Double } = require("mongodb");
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/bank');
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var userSchema  = {
    "Date" : String,
    "Description" : String,
    "Deposits": Double,
    "withdrawls": Double,
    "Balance": Double,
};
// create model if not exists.
module.exports = mongoose.model('users',userSchema);