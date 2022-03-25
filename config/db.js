const mongoose = require("mongoose");

const uri =
  "mongodb+srv://skilvul:skilvul123@cluster0.wfybr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const db = mongoose.connect(uri);

module.exports = db;
