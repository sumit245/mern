const Users = require("../model/UserModel");

module.exports.CreateUser = async (req, res) => {
  try {
    const user = await Users.create(req.body);
    res.send({ message: "User Created successfully", data: user }).status(200);
  } catch (error) {
    res.send({ message: "User not created" }).status(404);
  }
};

//This code will find the mongodb model and return the complete array of users
module.exports.GetUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.send({ message: "User fetched successfully", data: users }).status(200);
  } catch (error) {
    res.send({ message: "Unable to find Users" }).status(404);
  }
};

module.exports.GetUserById = async (req, res) => {
  try {
    const user = await Users.findById({ _id: req.params.id });
    res.send({ message: "User Fetched successfully", data: user }).status(200);
  } catch (error) {
    res.send({ message: "Unable to get" }).status(404);
  }
};

module.exports.UpdateUser = async (req, res) => {
  try {
    const user = await Users.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.send({ message: "User Updated successfully", data: user }).status(200);
  } catch (error) {
    res.send({ message: "Unable to update" }).status(404);
  }
};

module.exports.DeleteUser = async (req, res) => {
  try {
    const user = await Users.findByIdAndDelete({ _id: req.params.id });
    res.send({ message: "User Deleted successfully", data: user }).status(200);
  } catch (error) {
    res.send({ message: "Unable to delete" }).status(404);
  }
};

module.exports.DeleteUsers = async (req, res) => {
  try {
    const user = await Users.deleteMany();
    res.send({ message: "User Updated successfully", data: user }).status(200);
  } catch (error) {
    res.send({ message: "Unable to delete" }).status(404);
  }
};
