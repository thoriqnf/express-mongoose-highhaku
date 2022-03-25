const mongoose = require("mongoose");

const uri = "mongodb://localhost:27018/school";

const db = mongoose.connect(uri)

module.exports = db