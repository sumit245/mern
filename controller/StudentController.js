const Students = require("../model/StudentModel");
const Subjects = require('../model/SubjectModel')

module.exports.CreateStudent = async (req, res) => {
  try {
    const student = await Students.create(req.body);
    res
      .send({ message: "Student Created successfully", data: student })
      .status(200);
  } catch (error) {
    res.send({ message: "Student not created" }).status(404);
  }
};

module.exports.GetStudents = async (req, res) => {
  try {
    const students = await Students.find();
    res
      .send({ message: "Student fetched successfully", data: students })
      .status(200);
  } catch (error) {
    res.send({ message: "Unable to find Students" }).status(404);
  }
};

module.exports.GetStudentById = async (req, res) => {
  try {
    const student = await Students.findById({ _id: req.params.id });
    res
      .send({ message: "Student Fetched successfully", data: student })
      .status(200);
  } catch (error) {
    res.send({ message: "Unable to get" }).status(404);
  }
};

module.exports.UpdateStudent = async (req, res) => {
  try {
    const student = await Students.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res
      .send({ message: "Student Updated successfully", data: student })
      .status(200);
  } catch (error) {
    res.send({ message: "Unable to update" }).status(404);
  }
};

module.exports.DeleteStudent = async (req, res) => {
  try {
    const student = await Students.findByIdAndDelete({ _id: req.params.id });
    res
      .send({ message: "Student Deleted successfully", data: student })
      .status(200);
  } catch (error) {
    res.send({ message: "Unable to delete" }).status(404);
  }
};

module.exports.DeleteStudents = async (req, res) => {
  try {
    const student = await Students.deleteMany();
    res
      .send({ message: "Student Updated successfully", data: student })
      .status(200);
  } catch (error) {
    res.send({ message: "Unable to delete" }).status(404);
  }
};

module.exports.GetResult = async (req, res) => {
  try {
    const student = await Students.findById({ _id: req.params.id })
    //const exams=await Exams.find()
  } catch (error) {
    
  }
}