const router = require("express").Router();

const {
  CreateTeacher,
  GetTeachers,
  GetTeacherById,
  DeleteTeacher,
  DeleteTeachers,
  UpdateTeacher,
} = require("../controller/TeacherController");

router.get("/", GetTeachers);
router.post("/create-teacher", CreateTeacher);
router.put("/update-teacher/:id", UpdateTeacher);
router.get("/get-teacher-by-id/:id", GetTeacherById);
router.delete("/delete-teacher/:id", DeleteTeacher);
router.delete("/", DeleteTeachers);

module.exports = router;
