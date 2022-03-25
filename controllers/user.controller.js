const {UserModel} = require("../models")

module.exports = {
  getAll: async (req, res) => {
 
    const users = await UserModel.find({}, "-__v");
    console.log(users);
  
    try {
      res.json({
        message: "berhasil ambil data user",
        data: users,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  getByID: async (req, res) => {
    const users = await UserModel.findById(req.params.id);
    try {
      res.json({
        message: "berhasil ambil data user",
        data: users,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  addUser: async (req, res) => {
    const data = req.body;
  
    try {
      await UserModel.create(data);
      res.json({
        message: "berhasil input data",
        data: 1,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
}