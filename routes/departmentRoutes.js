const express = require("express");
const router = express.Router();
const {
  createDepartment,
  getDepartment,
} = require("../controllers/departmentController");

router.post("/", createDepartment);
router.get("/", getDepartment);

module.exports = router;
