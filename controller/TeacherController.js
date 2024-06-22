const Teachers = require("../model/TeacherModel");
const QuestionModel = require("../model/QuestionModel");
module.exports.CreateTeacher = async (req, res) => {
  try {
    const teacher = await Teachers.create(req.body);

    res
      .send({ message: "Teacher created successfully", data: teacher })
      .status(200);
  } catch (error) {
    res.send({ message: "Teacher not created", error: error }).status(404);
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

module.exports.CreateExam = async (req, res) => {
  try {
    // Find All available exams_types: Quarterly, Half yearly, Final
    // Check current date and check under which quarter it falls April-15 June, 15June-15 Sept, 15 Sept-15Dec, 15Dec-15March
    const thisMonth = new Date().getMonth() - 2;
    let eligibleExam = "";
    if (thisMonth >= 0 && thisMonth < 3) {
      console.log("This month falls in 1st quarter");
      eligibleExam = "Quarterly";
    } else if (thisMonth >= 3 && thisMonth < 6) {
      console.log("This month falls in 2nd quarter");
      eligibleExam = "Half Yearly";
    } else if (thisMonth >= 6 && thisMonth < 9) {
      console.log("This month falls in 3rd quarter");
      eligibleExam = "Quarterly";
    } else {
      console.log("This month falls in 4th quarter");
      eligibleExam = "Final";
    }
    console.log(eligibleExam);
    console.log(req.body.exam_type);
    if (eligibleExam.match(req.body.exam_type)) {
      const questions = await questions.save(req.body.questions);
      const exam = await Exam.create({
        exam_types: exam_type._id(req.body.exam_type),
        duration: req.body.duration,
        questions: question._id,
      }); 
    } else {
      console.log("You cannot create this exam");
    }
    //Get all question and create exam
  } catch (error) {}
};
