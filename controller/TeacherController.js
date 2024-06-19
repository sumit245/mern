const Teachers = require("../model/TeacherModel");

module.exports.CreateTeacher = async (req, res) => {
  try {
    const teacher = await Teachers.create(req.body);
    res
      .send({ message: "Teacher Created successfully", data: teacher })
      .status(200);
  } catch (error) {
    res.send({ message: "Teacher not created" }).status(404);
  }
};

module.exports.GetTeachers = async (req, res) => {
  try {
    const teachers = await Teachers.find();
    res
      .send({ message: "Teacher fetched successfully", data: teachers })
      .status(200);
  } catch (error) {
    res.send({ message: "Unable to find Teachers" }).status(404);
  }
};

module.exports.GetTeacherById = async (req, res) => {
  try {
    const teacher = await Teachers.findById({ _id: req.params.id });
    res
      .send({ message: "Teacher Fetched successfully", data: teacher })
      .status(200);
  } catch (error) {
    res.send({ message: "Unable to get" }).status(404);
  }
};

module.exports.UpdateTeacher = async (req, res) => {
  try {
    const teacher = await Teachers.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res
      .send({ message: "Teacher Updated successfully", data: teacher })
      .status(200);
  } catch (error) {
    res.send({ message: "Unable to update" }).status(404);
  }
};

module.exports.DeleteTeacher = async (req, res) => {
  try {
    const teacher = await Teachers.findByIdAndDelete({ _id: req.params.id });
    res
      .send({ message: "Teacher Deleted successfully", data: teacher })
      .status(200);
  } catch (error) {
    res.send({ message: "Unable to delete" }).status(404);
  }
};

module.exports.DeleteTeachers = async (req, res) => {
  try {
    const teacher = await Teachers.deleteMany();
    res
      .send({ message: "Teacher Updated successfully", data: teacher })
      .status(200);
  } catch (error) {
    res.send({ message: "Unable to delete" }).status(404);
  }
};
