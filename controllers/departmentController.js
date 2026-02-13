const Department = require("../models/Department");

// CREATE
exports.createDepartment = async (req, res) => {
  try {
    const department = await Department.create(req.body);
    res.status(201).json(department);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET ALL
exports.getDepartment = async (req, res) => {
  const department = await Department.find();
  res.json(department);
};
