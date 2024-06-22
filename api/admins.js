const router = require("express").Router();

const {
  CreateAdmin,
  GetAdmins,
  GetAdminById,
  DeleteAdmin,
  DeleteAdmins,
  UpdateAdmin,
} = require("../controller/AdminController");

router.get("/", GetAdmins);
router.post("/create-admin", CreateAdmin);
router.put("/update-admin/:id", UpdateAdmin);
router.get("/get-admin-by-id/:id", GetAdminById);
router.delete("/delete-admin/:id", DeleteAdmin);
router.delete("/", DeleteAdmins);

module.exports = router;
