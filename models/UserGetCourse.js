const mongoose = require("mongoose");

// buat schema data model
const userGetCourse = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    require: true,
  },
  course: {
    type: mongoose.Types.ObjectId,
    ref: "course",
    require: true,
  },
});

const UserGetCourse = mongoose.model("user_get_course", userGetCourse);
module.exports = UserGetCourse;
