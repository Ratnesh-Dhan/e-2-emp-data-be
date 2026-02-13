const Department = require("../models/Department");

// CREATE
exports.createEmployee = async (req, res) => {
  try {
    const department = await Department.create(req.body);
    res.status(201).json(department);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET ALL
exports.getEmployee = async (req, res) => {
  const department = await Department.find();
  res.json(department);
};
