const mongoose = require("mongoose");

// buat schema data model
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
  },
  telephone: {
    type: String,
  },
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
