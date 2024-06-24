const Students = require("../model/StudentModel");
const Subjects = require("../model/SubjectModel");
const Exam = require("../model/ExamModel");
const Questions = require("../model/QuestionModel");
const Result = require("../model/ResultModel");

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
    const student = await Students.findById({ _id: req.params.id });
    //const exams=await Exams.find()
  } catch (error) {}
};

module.exports.TakeExam = async (req, res) => {
  try {
    const { studentId, examId, answers } = req.body;

    // Fetch student and exam details
    const student = await Students.findById(studentId);
    const exam = await Exam.findById(examId);

    if (!student || !exam) {
      return res.status(404).send({ message: "Student or Exam not found" });
    }

    const questions = await Questions.findById(exam.questions);

    if (!questions) {
      return res.status(404).send({ message: "Questions not found" });
    }

    let score = 0;
    questions.questions.forEach((question, index) => {
      if (question.correctAnswer === answers[index]) {
        score++;
      }
    });

    const result = {
      studentId,
      examId,
      score,
      maxScore: exam.full_marks,
    };

    const savedResult = await Result.create(result);

    res
      .status(200)
      .send({ message: "Exam submitted successfully", data: savedResult });
  } catch (error) {
    console.error("Error taking exam:", error);
    res
      .status(500)
      .send({ message: "Error taking exam", error: error.message });
  }
};
