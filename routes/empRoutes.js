const express = require("express");
const router = express.Router();
const { createEmployee, getEmployee } = require("../controllers/empController");

router.post("/", createEmployee);
router.get("/", getEmployee);

module.exports = router;
