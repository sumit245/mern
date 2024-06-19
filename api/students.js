const router = require("express").Router();

const {
  CreateStudent,
  GetStudents,
  GetStudentById,
  DeleteStudent,
  DeleteStudents,
  UpdateStudent,
} = require("../controller/StudentController");

router.get("/", GetStudents);
router.post("/create-student", CreateStudent);
router.put("/update-student/:id", UpdateStudent);
router.get("/get-student-by-id/:id", GetStudentById);
router.delete("/delete-student/:id", DeleteStudents);
router.delete("/", DeleteStudent);

module.exports = router;
