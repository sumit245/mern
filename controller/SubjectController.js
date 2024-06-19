const Subjects = require("../model/SubjectModel");

module.exports.CreateSubject = async (req, res) => {
  try {
    const subject = await Subjects.create(req.body);
    res
      .send({ message: "Subject Created successfully", data: subject })
      .status(200);
  } catch (error) {
    res.send({ message: "Subject not created" }).status(404);
  }
};

module.exports.GetSubjects = async (req, res) => {
  try {
    const subjects = await Subjects.find();
    res
      .send({ message: "Subject fetched successfully", data: subjects })
      .status(200);
  } catch (error) {
    res.send({ message: "Unable to find Subjects" }).status(404);
  }
};

module.exports.GetSubjectById = async (req, res) => {
  try {
    const subject = await Subjects.findById({ _id: req.params.id });
    res
      .send({ message: "Subject Fetched successfully", data: subject })
      .status(200);
  } catch (error) {
    res.send({ message: "Unable to get" }).status(404);
  }
};

module.exports.UpdateSubject = async (req, res) => {
  try {
    const subject = await Subjects.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res
      .send({ message: "Subject Updated successfully", data: subject })
      .status(200);
  } catch (error) {
    res.send({ message: "Unable to update" }).status(404);
  }
};

module.exports.DeleteSubject = async (req, res) => {
  try {
    const subject = await Subjects.findByIdAndDelete({ _id: req.params.id });
    res
      .send({ message: "Subject Deleted successfully", data: subject })
      .status(200);
  } catch (error) {
    res.send({ message: "Unable to delete" }).status(404);
  }
};

module.exports.DeleteSubjects = async (req, res) => {
  try {
    const subject = await Subjects.deleteMany();
    res
      .send({ message: "Subject Updated successfully", data: subject })
      .status(200);
  } catch (error) {
    res.send({ message: "Unable to delete" }).status(404);
  }
};
