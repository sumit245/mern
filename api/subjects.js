const router = require("express").Router();

const {
  CreateSubject,
  GetSubjects,
  GetSubjectById,
  DeleteSubject,
  DeleteSubjects,
  UpdateSubject,
} = require("../controller/SubjectController");

router.get("/", GetSubjects);
router.post("/create-subject", CreateSubject);
router.put("/update-subject/:id", UpdateSubject);
router.get("/get-subject-by-id/:id", GetSubjectById);
router.delete("/delete-subjects/:id", DeleteSubjects);
router.delete("/", DeleteSubject);

module.exports = router;
