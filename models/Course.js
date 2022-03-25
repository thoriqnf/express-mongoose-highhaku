const mongoose = require("mongoose");

// buat schema data model
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
  },
  harga: {
    type: Number,
  },
});

const Course = mongoose.model("course", courseSchema);
module.exports = Course;
