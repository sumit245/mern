const Teachers = require("../model/TeacherModel");
const Questions = require("../model/QuestionModel");
const Exam = require("../model/ExamModel");

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
      eligibleExam = "quarterly";
    } else if (thisMonth >= 3 && thisMonth < 6) {
      eligibleExam = "half yearly";
    } else if (thisMonth >= 6 && thisMonth < 9) {
      eligibleExam = "quarterly";
    } else {
      eligibleExam = "final";
    }
    if (eligibleExam.match(req.body.exam_type.toLowerCase())) {
      const questions = await Questions.create({
        questions: req.body.questions,
      });
      const examBody = {
        exam_type: req.body.exam_type,
        duration: req.body.duration,
        passing_marks: req.body.passing_marks,
        full_marks: req.body.full_marks,
        subject: req.body.subject,
        alloted_class: req.body.alloted_class,
        instructions: req.body.instructions,
        questions: questions._id,
      };
      const exam = await Exam.create(examBody);
      res
        .send({ message: "Exam created successfully", data: exam })
        .status(200);
    } else {
      res.send({ message: "Exam cannot be created" }).status(403);
    }
    //Get all question and create exam
  } catch (error) {
    res.send({ message: "Exam cannot be created", error: error }).status(500);
  }
};
