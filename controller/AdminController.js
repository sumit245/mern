const Admins = require( "../model/AdminModel" );

module.exports.CreateAdmin = async (req, res) => {
  try {
    const admin = await Admins.create(req.body);
    res
      .send({ message: "Admin Created successfully", data: admin })
      .status(200);
  } catch (error) {
    res.send({ message: "Admin not created" }).status(404);
  }
};

//This code will find the mongodb model and return the complete array of users
module.exports.GetAdmins = async (req, res) => {
  try {
    const admins = await Admins.find();
    res
      .send({ message: "Admins fetched successfully", data: admins })
      .status(200);
  } catch (error) {
    res.send({ message: "Unable to find Admins" }).status(404);
  }
};

module.exports.GetAdminById = async (req, res) => {
  try {
    const admin = await Admins.findById({ _id: req.params.id });
    res
      .send({ message: "Admin Fetched successfully", data: admin })
      .status(200);
  } catch (error) {
    res.send({ message: "Unable to get" }).status(404);
  }
};

module.exports.UpdateAdmin = async (req, res) => {
  try {
    const admin = await Admins.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.send({ message: "Admin Updated successfully", data: admin }).status(200);
  } catch (error) {
    res.send({ message: "Unable to update" }).status(404);
  }
};

module.exports.DeleteAdmin = async (req, res) => {
  try {
    const admin = await Admins.findByIdAndDelete({ _id: req.params.id });
    res.send({ message: "Admin Deleted successfully", data: admin }).status(200);
  } catch (error) {
    res.send({ message: "Unable to delete" }).status(404);
  }
};

module.exports.DeleteAdmins = async (req, res) => {
  try {
    const admin = await Admins.deleteMany();
    res.send({ message: "Admin Updated successfully", data: admin }).status(200);
  } catch (error) {
    res.send({ message: "Unable to delete" }).status(404);
  }
};
