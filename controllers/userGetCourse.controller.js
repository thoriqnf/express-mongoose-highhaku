const {UserGetCourse} = require("../models")

module.exports = {
  addUserGetCourse: async (req, res) => {
    const data = req.body;
  
    try {
      await UserGetCourse.create(data);
      res.json({
        message: "berhasil input data",
        data: 1,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  getAll: async (req, res) => {
 
    const userGetCourse = await UserGetCourse.find({}, "-__v")
    .populate("user course", "-__v")
  
    try {
      res.json({
        message: "berhasil ambil data user get course",
        data: userGetCourse,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
}