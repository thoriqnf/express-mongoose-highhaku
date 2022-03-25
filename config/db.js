const mongoose = require("mongoose");

const uri = process.env.MONGODBURI;

const db = mongoose.connect(uri);

module.exports = db;
